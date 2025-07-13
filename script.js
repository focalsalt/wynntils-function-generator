import { FUNCTIONS } from "./define.js";

let tree = [];
let counter = 0;

// 
function generateId() {
  return `node-${counter++}`;
}

function createAutoSuggestInput(value, onInput, tooltip = '') {
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "relative flex-1 max-w-[420px]";

  const input = document.createElement("input");
  input.className = "w-full border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
  input.type = "text";
  input.placeholder = "Enter Function";
  input.value = value;
  if (tooltip) input.title = tooltip;

  const suggestionList = document.createElement("ul");
  suggestionList.className = "suggestion-list absolute top-full w-full z-10 bg-[#181c23] border text-sm max-h-80 overflow-y-auto hidden";

  function handleInput(e) {
    const value = e.target.value;
    onInput(value, false);
    suggestionList.innerHTML = '';
    if (value.length === 0) return suggestionList.classList.add("hidden");

    const hits = Object.keys(FUNCTIONS).filter(name => name.startsWith(value));
    if (hits.length === 0) return suggestionList.classList.add("hidden");

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
  }

  input.addEventListener("input", handleInput);
  input.addEventListener("focus", handleInput);
  input.addEventListener("blur", () => {
    setTimeout(() => suggestionList.classList.add("hidden"), 100);
  });

  inputWrapper.append(input, suggestionList);
  return inputWrapper;
}

function createStringForm(node) {
  const row = document.createElement("div");
  row.className = "flex items-center gap-2 py-1 w-full flex-nowrap min-w-0";
  row.dataset.id = node.id;

  // Create drag handle
  const dragHandle = document.createElement("span");
  dragHandle.className = "cursor-move select-none px-2 text-gray-400";
  dragHandle.title = "Drag to Move";
  dragHandle.innerHTML = "&#9776;";
  dragHandle.draggable = true;
  dragHandle.dataset.id = node.id;
  addDragHandlers(dragHandle);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#f74040] text-white rounded-xl shadow transition";
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    const p = findParent(node.id);
    p.list.splice(p.index, 1);
    renderAll();
  };

  // Create duplicate button
  const duplicateButton = document.createElement("button");
  duplicateButton.textContent = "Copy";
  duplicateButton.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#5865f2] text-white rounded-xl shadow transition";
  duplicateButton.onclick = () => {
    const p = findParent(node.id);
    const copy = cloneNode(node);
    p.list.splice(p.index + 1, 0, copy);
    renderAll();
  };

  // Create input field
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "flex-1 max-w-[420px]";
  const input = document.createElement("input");
  input.className = "w-full border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
  input.type = "text";
  input.placeholder = "Enter String";
  input.value = node.value;
  input.addEventListener('mousedown', e => e.stopPropagation());
  input.addEventListener('touchstart', e => e.stopPropagation());
  input.addEventListener('input', () => node.value = input.value);
  input.addEventListener('blur', () => renderAll());
  inputWrapper.appendChild(input);

  // Append elements to the row
  row.append(dragHandle, deleteButton, duplicateButton, inputWrapper);
  return row;
}

function createFunctionForm(node) {
  const box = document.createElement("div");
  box.className = "flex flex-col py-1 flex-grow w-full min-w-0";
  box.dataset.id = node.id;

  const mainRow = document.createElement("div");
  mainRow.className = "flex items-center gap-2";

  const dragHandle = document.createElement("span");
  dragHandle.className = "cursor-move select-none px-2 text-gray-400";
  dragHandle.title = "Drag";
  dragHandle.innerHTML = "&#9776;";
  dragHandle.draggable = true;
  dragHandle.dataset.id = node.id;
  addDragHandlers(dragHandle);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#f74040] text-white rounded-xl shadow transition";
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    const p = findParent(node.id);
    p.list.splice(p.index, 1);
    renderAll();
  };

  // Create duplicate button
  const duplicateButton = document.createElement("button");
  duplicateButton.textContent = "Copy";
  duplicateButton.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#5865f2] text-white rounded-xl shadow transition";
  duplicateButton.onclick = () => {
    const p = findParent(node.id);
    const copy = cloneNode(node);
    p.list.splice(p.index + 1, 0, copy);
    renderAll();
  };

  // Create input field
  const tooltip = FUNCTIONS[node.name]?.desc || '';
  const inputWrapper = createAutoSuggestInput(node.name, (value, isSelect) => {
    node.name = value;
    const isNoLimited = Array.isArray(FUNCTIONS[value]?.args) && FUNCTIONS[value].args.length === 1 && FUNCTIONS[value].args[0]?.type === "any";;
    if (!isNoLimited) {
      const meta = FUNCTIONS[value];
      const count = meta?.args?.length ?? node.args.length;
      while (node.args.length < count) {
        const argType = meta?.args?.[node.args.length]?.type || "any";
        if (argType === "string" || argType === "number") 
          node.args.push({ id: generateId(), type: "string", value: "" });
        else node.args.push({ id: generateId(), type: "function", name: "", args: [] });
      }
      while (node.args.length > count) {
        node.args.pop();
      }
    }
    if (isSelect) renderAll();
  }, tooltip);
  mainRow.append(dragHandle, deleteButton, duplicateButton, inputWrapper);

  const meta = FUNCTIONS[node.name];
  const isNoLimited = Array.isArray(meta?.args) && meta.args.length === 1 && meta.args[0]?.type === "any";
  if (isNoLimited) {
    const createStringButton = document.createElement("button");
    createStringButton.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#43b581] text-white rounded-xl shadow transition";
    createStringButton.textContent = "+ String";
    createStringButton.onclick = () => {
      node.args.push({ id: generateId(), type: "string", value: "" });
      renderAll();
    };

    const createFunctionButton = document.createElement("button");
    createFunctionButton.textContent = "+ Function";
    createFunctionButton.className = "bg-opacity-100 hover:bg-opacity-50 px-3 py-1 bg-[#43b581] text-white rounded-xl shadow transition";
    createFunctionButton.onclick = () => {
      node.args.push({ id: generateId(), type: "function", name: "", args: [] });
      renderAll();
    };
    mainRow.append(createStringButton, createFunctionButton);
  }

  const argList = document.createElement("div");
  argList.className = "ml-6 space-y-1 w-full";
  let labels = [];
  if (FUNCTIONS[node.name]?.labels) 
    labels = FUNCTIONS[node.name].labels;
  node.args.forEach((child, idx) => {
    if (labels.length > 0) {
      const label = document.createElement("label");
      label.className = "text-sm text-gray-400";
      label.textContent = labels[idx];
      argList.appendChild(label);
    }
    const meta = FUNCTIONS[node.name];
    let argType = "any";
    let typeHint = "";
    if (meta && meta.args && meta.args[idx]) {
      argType = meta.args[idx].type;
      typeHint = Array.isArray(argType) ? argType.join(", ") : argType;
    }
    if (Array.isArray(argType)) {
      const select = document.createElement("select");
      select.className = "border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
      ["string", "function"].forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type === "string" ? "String" : "Function";
        select.appendChild(option);
      });
      select.value = child.type === "function" ? "function" : "string";
      select.onchange = () => {
        if (select.value === "function" && child.type !== "function") 
          node.args[idx] = { id: generateId(), type: "function", name: "", args: [] };
        else if (select.value === "string" && child.type !== "string")
          node.args[idx] = { id: generateId(), type: "string", value: "" };
        renderAll();
      };

      const form = child.type === "string" ? createStringForm(child) : createFunctionForm(child);
      form.title = "Type: " + typeHint;
      const dragHandle = form.querySelector('.cursor-move');
      if (dragHandle) dragHandle.insertAdjacentElement('afterend', select);
      const row = document.createElement("div");
      row.className = "flex items-center gap-2 w-full flex-nowrap min-w-0";
      form.classList.add("flex-1", "min-w-0");
      row.append(form);
      argList.appendChild(row);
    } else {
      const form = child.type === "string" ? createStringForm(child) : createFunctionForm(child);
      if (typeHint) form.title = "Type: " + typeHint;
      argList.appendChild(form);
    }
  });

  box.append(mainRow, argList);
  return box;
}

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
    document.querySelectorAll(".drop-before, .drop-after").forEach (el => {
      el.classList.remove("drop-before", "drop-after");
    });
    if (tgt) {
      const rect = tgt.getBoundingClientRect();
      const offset = e.clientY - rect.top;
      if (offset < rect.height / 2) {
        tgt.classList.add("drop-before");
      } else {
        tgt.classList.add("drop-after");
      }
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

    if (tgt.classList.contains("drop-before")) {
      tgtP.list.splice(tgtP.index, 0, srcNode);
    } else {
      tgtP.list.splice(tgtP.index + 1, 0, srcNode);
    }
    renderAll();
  });
}

function cloneNode(node) {
  const id = generateId();
  if (node.type === "string") return { id, type: "string", value: node.value };
  return { id, type: "function", name: node.name, args: node.args.map(cloneNode), };
}

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

function addStringNode() {
  tree.push({ id: generateId(), type: "string", value: "" });
  renderAll();
}

function addFunctionNode() {
  tree.push({ id: generateId(), type: "function", name: "", args: [] });
  renderAll();
}

function renderNode(node, isRoot = true, parentFunction = null, argIndex = null) {
  if (node.type === "string") {
    let type = "string";
    if (parentFunction && argIndex !== null) {
      const meta = FUNCTIONS[parentFunction];
      if (meta && meta.args && meta.args[argIndex]) {
        type = meta.args[argIndex].type;
      }
    }
    if (isRoot) return node.value;
    const meta = FUNCTIONS[node.name];
    const isNoLimited = Array.isArray(meta?.args) && meta.args.length === 1 && meta.args[0]?.type === "any";
    if (isNoLimited) return `"${node.value.replace(/"/g, '\\"')}"`;
    if (type === "string") return `"${node.value.replace(/"/g, '\\"')}"`;
    return node.value;
  }
  const inner = node.args.map((arg, idx) => renderNode(arg, false, node.name, idx)).join("; ");
  if (isRoot) 
    return node.args.length > 0 ? `{${node.name}(${inner})}` : `{${node.name}}`;
  else 
    return node.args.length > 0 ? `${node.name}(${inner})` : `${node.name}`;
}

function renderAll() {
  const ul = document.getElementById('nodeList');
  ul.innerHTML = '';
  tree.forEach((node, i) => {
    const element = node.type === 'string' ? createStringForm(node) : createFunctionForm(node);
    // 設定主節點背景色
    element.style.background = (i % 2 === 0) ? "#282d36" : "#20232a";
    ul.appendChild(element);
  });
  document.getElementById('preview').textContent = tree.map(n => renderNode(n)).join('');
}

window.onload = () => {
  document.getElementById('addString').onclick = addStringNode;
  document.getElementById('addFunction').onclick = addFunctionNode;
  renderAll();

  // 複製預覽內容並顯示提示
  const copyButton = document.getElementById('copy-preview');
  if (copyButton) {
    copyButton.onclick = () => {
      const text = document.getElementById('preview').textContent;
      navigator.clipboard.writeText(text).then(() => {
        // 顯示提示
        const tip = document.createElement('div');
        tip.textContent = 'copied to clipboard!';
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