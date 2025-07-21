import { FUNCTIONS } from "./define.js";

// Node 型別統一定義
// type: 'string' | 'function'
// value: string (for string node)
// name: string (for function node)
// args: Node[] (for function node)
let tree = [];
let counter = 0;
function generateId() {
  return `node-${counter++}`;
}

// 通用 input 元件生成
function createInput({ type, value, onInput, placeholder = '', tooltip = '' }) {
  const input = document.createElement("input");
  input.className = "w-full border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
  input.type = type;
  input.placeholder = placeholder;
  input.value = value;
  if (tooltip) input.title = tooltip;
  input.addEventListener("input", e => onInput(e.target.value));
  return input;
}

// 自動提示 function 名稱
function createAutoSuggestInput(value, onInput, tooltip = '') {
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "relative flex-1 max-w-[420px]";
  const input = createInput({ type: "text", value, onInput: v => onInput(v, false), placeholder: "Enter Function", tooltip });
  const suggestionList = document.createElement("ul");
  suggestionList.className = "suggestion-list absolute top-full w-full z-10 bg-[#181c23] border text-sm max-h-80 overflow-y-auto hidden";
  input.addEventListener("input", e => {
    const val = e.target.value;
    onInput(val, false);
    suggestionList.innerHTML = '';
    if (!val) return suggestionList.classList.add("hidden");
    const hits = Object.keys(FUNCTIONS).filter(name => name.startsWith(val));
    if (!hits.length) return suggestionList.classList.add("hidden");
    hits.forEach(name => {
      const suggestion = document.createElement("div");
      suggestion.className = "bg-opacity-100 hover:bg-opacity-50 p-4 bg-[#2d3340] rounded-xl shadow flex flex-col cursor-pointer transition";
      suggestion.onclick = () => {
        input.value = name;
        input.title = FUNCTIONS[name].desc || '';
        onInput(name, true);
        suggestionList.classList.add("hidden");
      };
      const suggestionTitle = document.createElement("div");
      suggestionTitle.className = "text-base";
      suggestionTitle.textContent = name;
      const suggestionDesc = document.createElement("div");
      suggestionDesc.className = "text-xs text-gray-400";
      suggestionDesc.textContent = FUNCTIONS[name].desc || "";
      suggestion.appendChild(suggestionTitle);
      suggestion.appendChild(suggestionDesc);
      suggestionList.appendChild(suggestion);
    });
    suggestionList.classList.remove("hidden");
  });
  input.addEventListener("focus", e => input.dispatchEvent(new Event("input")));
  input.addEventListener("blur", () => setTimeout(() => suggestionList.classList.add("hidden"), 100));
  inputWrapper.append(input, suggestionList);
  return inputWrapper;
}

// 通用 Node 操作按鈕
function createNodeActions(node, parentList, index) {
  const actions = document.createElement("div");
  actions.className = "flex gap-2";
  // 刪除
  const delBtn = document.createElement("button");
  delBtn.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#f74040] text-white rounded-xl shadow transition";
  delBtn.textContent = "Delete";
  delBtn.onclick = () => {
    parentList.splice(index, 1);
    renderAll();
  };
  // 複製
  const copyBtn = document.createElement("button");
  copyBtn.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#5865f2] text-white rounded-xl shadow transition";
  copyBtn.textContent = "Copy";
  copyBtn.onclick = () => {
    parentList.splice(index + 1, 0, cloneNode(node));
    renderAll();
  };
  actions.append(delBtn, copyBtn);
  return actions;
}

// Node UI 渲染 (根據型別)
function renderNodeForm(node, parentList = tree, index = 0) {
  const row = document.createElement("div");
  row.className = "flex items-center gap-2 py-1 w-full flex-nowrap min-w-0";
  row.dataset.id = node.id;
  // 拖曳
  const dragHandle = document.createElement("span");
  dragHandle.className = "cursor-move select-none px-2 text-gray-400";
  dragHandle.title = "Drag";
  dragHandle.innerHTML = "&#9776;";
  dragHandle.draggable = true;
  dragHandle.dataset.id = node.id;
  addDragHandlers(dragHandle);
  row.appendChild(dragHandle);
  // 操作
  row.appendChild(createNodeActions(node, parentList, index));
  // 內容
  if (node.type === "string") {
    const input = createInput({ type: "text", value: node.value, onInput: v => node.value = v, placeholder: "Enter String" });
    input.addEventListener('blur', () => renderAll());
    row.appendChild(input);
    return row;
  } else if (node.type === "function") {
    const tooltip = FUNCTIONS[node.name]?.desc || '';
    row.appendChild(createAutoSuggestInput(node.name, (val, isSelect) => {
      node.name = val;
      // 根據 function 定義自動調整 args
      const meta = FUNCTIONS[val];
      const count = meta?.args?.length ?? node.args.length;
      while (node.args.length < count) {
        // 預設新增 string node
        node.args.push({ id: generateId(), type: "string", value: "" });
      }
      while (node.args.length > count) node.args.pop();
      if (isSelect) renderAll();
    }, tooltip));
    // args
    if (node.args && node.args.length) {
      const wrapper = document.createElement("div");
      wrapper.appendChild(row);
      const argList = document.createElement("div");
      argList.className = "ml-6 space-y-1 w-full";
      node.args.forEach((child, idx) => {
        // 新增型別選擇器
        const typeSelector = document.createElement("select");
        typeSelector.className = "border rounded-xl bg-[#23272f] text-white px-2 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition mr-2";
        ["string", "function"].forEach(type => {
          const option = document.createElement("option");
          option.value = type;
          option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
          typeSelector.appendChild(option);
        });
        typeSelector.value = child.type;
        typeSelector.onchange = () => {
          if (typeSelector.value === "function" && child.type !== "function") {
            node.args[idx] = { id: generateId(), type: "function", name: "", args: [] };
          } else if (typeSelector.value === "string" && child.type !== "string") {
            node.args[idx] = { id: generateId(), type: "string", value: "" };
          }
          renderAll();
        };
        const childRow = document.createElement("div");
        childRow.className = "w-full flex items-center gap-2";
        childRow.appendChild(typeSelector);
        childRow.appendChild(renderNodeForm(node.args[idx], node.args, idx));
        argList.appendChild(childRow);
      });
      wrapper.appendChild(argList);
      return wrapper;
    }
    return row;
  }
  return row;
}

// 拖曳功能 (與原本一致)
let dragSource = null;
function addDragHandlers(element) {
  element.addEventListener('dragstart', e => {
    dragSource = e.target.closest("div[data-id]");
    e.dataTransfer.effectAllowed = "move";
    dragSource.classList.add("opacity-50");
    const preview = dragSource.cloneNode(true);
    preview.style.position = "absolute";
    preview.style.top = "-1000px";
    preview.style.left = "-1000px";
    preview.style.width = `${dragSource.offsetWidth}px`;
    preview.style.background = "#23272e";
    preview.style.opacity = "0.9";
    document.body.appendChild(preview);
    e.dataTransfer.setDragImage(preview, 0, 0);
    setTimeout(() => document.body.removeChild(preview), 0);
  });
  element.addEventListener("dragend", () => dragSource.classList.remove("opacity-50"));
  element.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const tgt = e.target.closest("div[data-id]");
    document.querySelectorAll(".drop-before, .drop-after").forEach(el => el.classList.remove("drop-before", "drop-after"));
    if (tgt) {
      const rect = tgt.getBoundingClientRect();
      const offset = e.clientY - rect.top;
      if (offset < rect.height / 2) tgt.classList.add("drop-before");
      else tgt.classList.add("drop-after");
    }
  });
  element.addEventListener("dragleave", e => {
    const div = e.target.closest("div[data-id]");
    div?.classList.remove("drop-before", "drop-after");
  });
  element.addEventListener("drop", e => {
    e.preventDefault();
    const tgt = e.target.closest("div[data-id]");
    if (!dragSource || !tgt || dragSource === tgt) return;
    const srcId = dragSource.dataset.id;
    const tgtId = tgt.dataset.id;
    const srcP = findParent(srcId);
    const tgtP = findParent(tgtId);
    const srcNode = srcP.list[srcP.index];
    srcP.list.splice(srcP.index, 1);
    if (tgt.classList.contains("drop-before")) tgtP.list.splice(tgtP.index, 0, srcNode);
    else tgtP.list.splice(tgtP.index + 1, 0, srcNode);
    renderAll();
  });
}

// Node 複製
function cloneNode(node) {
  const id = generateId();
  if (node.type === "string") return { id, type: "string", value: node.value };
  return { id, type: "function", name: node.name, args: node.args.map(cloneNode) };
}
// 找 parent
function findParent(id, list = tree) {
  for (let i = 0; i < list.length; i++) {
    const node = list[i];
    if (node.id === id) return { list, index: i };
    if (node.type === "function") {
      const res = findParent(id, node.args);
      if (res) return res;
    }
  }
  return null;
}

// 新增 Node
function addStringNode() {
  tree.push({ id: generateId(), type: "string", value: "" });
  renderAll();
}
function addFunctionNode() {
  tree.push({ id: generateId(), type: "function", name: "", args: [] });
  renderAll();
}

// Node 轉字串
function renderNode(node, isRoot = true, parentFunction = null, argIndex = null) {
  if (node.type === "string") {
    let type = "string";
    if (parentFunction && argIndex !== null) {
      const meta = FUNCTIONS[parentFunction];
      if (meta && meta.args && meta.args[argIndex]) type = meta.args[argIndex].type;
    }
    if (isRoot) return node.value;
    const meta = FUNCTIONS[node.name];
    const isNoLimited = Array.isArray(meta?.args) && meta.args.length === 1 && meta.args[0]?.type === "any";
    if (isNoLimited) return `"${node.value.replace(/"/g, '\"')}"`;
    if (type === "string") return `"${node.value.replace(/"/g, '\"')}"`;
    return node.value;
  }
  const inner = node.args.map((arg, idx) => renderNode(arg, false, node.name, idx)).join("; ");
  if (isRoot) return node.args.length > 0 ? `{${node.name}(${inner})}` : `{${node.name}}`;
  else return node.args.length > 0 ? `${node.name}(${inner})` : `${node.name}`;
}

// 渲染全部
function renderAll() {
  const ul = document.getElementById('nodeList');
  ul.innerHTML = '';
  tree.forEach((node, i) => {
    const element = renderNodeForm(node, tree, i);
    element.style.background = (i % 2 === 0) ? "#282d36" : "#20232a";
    ul.appendChild(element);
  });
  document.getElementById('preview').textContent = tree.map(n => renderNode(n)).join('');
}

// 其他 UI 功能 (copy, link, float preview)
window.onload = () => {
  document.getElementById('addString').onclick = addStringNode;
  document.getElementById('addFunction').onclick = addFunctionNode;
  renderAll();
  const copyButton = document.getElementById('copy-preview');
  if (copyButton) {
    copyButton.onclick = () => {
      const text = document.getElementById('preview').textContent;
      navigator.clipboard.writeText(text).then(() => {
        const tip = document.createElement('div');
        tip.textContent = 'Copied to clipboard!';
        tip.className = 'fixed bottom-8 right-8 bg-[#43b581] text-white px-4 py-2 rounded-xl shadow-lg z-[9999] animate-fade-in';
        document.body.appendChild(tip);
        setTimeout(() => {
          tip.classList.remove('animate-fade-in');
          tip.classList.add('animate-fade-out');
          setTimeout(() => tip.remove(), 300);
        }, 1200);
      });
    };
  }
  const linkBtn = document.getElementById('generate-link');
  if (linkBtn) {
    linkBtn.onclick = () => {
      const json = JSON.stringify(tree);
      const url = `${location.origin}${location.pathname}?data=${encodeURIComponent(json)}`;
      navigator.clipboard.writeText(url).then(() => {
        const tip = document.createElement('div');
        tip.textContent = 'Share link copied to clipboard!';
        tip.className = 'fixed bottom-8 right-8 bg-[#43b581] text-white px-4 py-2 rounded-xl shadow-lg z-[9999] animate-fade-in';
        document.body.appendChild(tip);
        setTimeout(() => {
          tip.classList.remove('animate-fade-in');
          tip.classList.add('animate-fade-out');
          setTimeout(() => tip.remove(), 300);
        }, 1200);
      });
    };
  }
};

(function() {
  const box = document.getElementById('preview-float');
  const toggle = document.getElementById('preview-toggle');
  const arrow = document.getElementById('preview-arrow');
  let open = true;
  toggle.onclick = () => {
    open = !open;
    if (open) {
      box.style.transform = "translateX(0)";
      arrow.innerHTML = "&#8594;";
    } else {
      box.style.transform = "translateX(100%)";
      arrow.innerHTML = "&#8592;";
    }
  };
})();
