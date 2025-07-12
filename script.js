let tree = [];
let counter = 0;

const COMPONENTS = {
  concat: {
    desc: "多個字串合併",
    args: [{ type: "any[]" }],
    returns: "string"
  },
  string: {
    desc: "將整數轉換成字串",
    args: [{ type: ["number", "component"] }],
    returns: "string"
  },
  ping: {
    desc: "取得延遲",
    args: [],
    returns: "number"
  },
  str: {
    desc: "將整數轉換成字串",
    args: [{ type: "string" }],
    returns: "string"
  },
  int: {
    desc: "整數",
    args: [{ type: "number" }],
    returns: "number"
  },
  if_str: {
    desc: "字串條件",
    args: [{ type: "string" }, { type: "string" }, { type: "string" }],
    returns: "string"
  },
  mte: {
    desc: "數學運算",
    args: [{ type: "number" }, { type: "number" }],
    returns: "number"
  },
  // ... 你可以繼續補齊其他組件 ...
};

function genId() {
  return `node_${counter++}`;
}

function cloneNode(node) {
  const id = genId();
  if (node.type === 'text') return { id, type: 'text', value: node.value };
  return {
    id,
    type: 'component',
    name: node.name,
    args: node.args.map(cloneNode),
  };
}

function findParent(id, list = tree) {
  for (let i = 0; i < list.length; i++) {
    const node = list[i];
    if (node.id === id) return { list, index: i };
    if (node.type === 'component') {
      const res = findParent(id, node.args);
      if (res) return res;
    }
  }
  return null;
}

function createAutoSuggestInput(value, onInput, tooltip = '') {
  const wrapper = document.createElement("div");
  wrapper.className = "relative flex flex-1 max-w-[420px]"; // flex-1

  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.placeholder = "Function ";
  input.className = "w-full border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
  input.title = tooltip;

  const datalist = document.createElement("ul");
  datalist.className = "suggestion-list absolute top-full w-full z-10 bg-[#181c23] border text-sm max-h-40 overflow-y-auto hidden";

  input.oninput = (e) => {
    const val = e.target.value;
    onInput(val, false);
    datalist.innerHTML = "";
    if (val.length === 0) return datalist.classList.add("hidden");
    const hits = Object.keys(COMPONENTS).filter(s => s.startsWith(val));
    if (hits.length === 0) return datalist.classList.add("hidden");
    hits.forEach(s => {
      const option = document.createElement("div");
      option.className = "p-4 bg-[#2d3340] rounded-xl shadow flex flex-col cursor-pointer";
      option.onclick = () => {
        input.value = s;
        input.title = COMPONENTS[s]?.desc || "";
        onInput(s, true);
        datalist.classList.add("hidden");
      };
      const optionname = document.createElement("li");
      optionname.className = "text-base";
      optionname.textContent = s;
      const optiondsc = document.createElement("li");
      optiondsc.className = "text-xs text-gray-400";
      optiondsc.textContent = COMPONENTS[s]?.desc || "";
      option.appendChild(optionname);
      option.appendChild(optiondsc);
      datalist.appendChild(option);
    });
    datalist.classList.remove("hidden");
  };

  input.onfocus = input.oninput;
  wrapper.append(input, datalist);
  return wrapper;
}

function createTextForm(node) {
  const row = document.createElement("div");
  row.className = "flex items-center gap-2 py-1 w-full flex-nowrap min-w-0";
  row.dataset.id = node.id;

  const dragHandle = document.createElement("span");
  dragHandle.className = "cursor-move select-none px-2 text-gray-400";
  dragHandle.title = "拖曳排序";
  dragHandle.innerHTML = "&#9776;";
  dragHandle.draggable = true;
  dragHandle.dataset.id = node.id;
  addDragHandlers(dragHandle);

  // 新增 input 外層
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "flex-1 max-w-[420px]";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "輸入文字";
  input.className = "w-full border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
  input.value = node.value;
  input.addEventListener('mousedown', e => e.stopPropagation());
  input.addEventListener('touchstart', e => e.stopPropagation());
  input.addEventListener('input', () => {
    node.value = input.value;
  });
  input.addEventListener('blur', () => {
    renderAll();
  });
  inputWrapper.appendChild(input);

  const del = document.createElement("button");
  del.textContent = "刪除";
  del.className = "px-3 py-1 bg-[#f74040] hover:bg-[#dc2626] text-white rounded-xl shadow transition";
  del.onclick = () => {
    const p = findParent(node.id);
    p.list.splice(p.index, 1);
    renderAll();
  };

  const dup = document.createElement("button");
  dup.textContent = "複製";
  dup.className = "px-3 py-1 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-xl shadow transition";
  dup.onclick = () => {
    const p = findParent(node.id);
    const copy = cloneNode(node);
    p.list.splice(p.index + 1, 0, copy);
    renderAll();
  };

  row.append(dragHandle, dup, del, inputWrapper);
  return row;
}

function createCompForm(node) {
  const box = document.createElement("div");
  box.className = "flex flex-col gap-1 py-1 flex-grow w-full min-w-0";
  box.dataset.id = node.id;

  // 主行
  const mainRow = document.createElement("div");
  mainRow.className = "flex items-center gap-2";

  const dragHandle = document.createElement("span");
  dragHandle.className = "cursor-move select-none px-2 text-gray-400";
  dragHandle.title = "拖曳排序";
  dragHandle.innerHTML = "&#9776;";
  dragHandle.draggable = true;
  dragHandle.dataset.id = node.id;
  addDragHandlers(dragHandle);

  const del = document.createElement("button");
  del.textContent = "刪除";
  del.className = "px-3 py-1 bg-[#f74040] hover:bg-[#dc2626] text-white rounded-xl shadow transition";
  del.onclick = () => {
    const p = findParent(node.id);
    p.list.splice(p.index, 1);
    renderAll();
  };

  const dup = document.createElement("button");
  dup.textContent = "複製";
  dup.className = "px-3 py-1 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-xl shadow transition";
  dup.onclick = () => {
    const p = findParent(node.id);
    const copy = cloneNode(node);
    p.list.splice(p.index + 1, 0, copy);
    renderAll();
  };

  const tip = COMPONENTS[node.name]?.desc || "";
  const nameField = createAutoSuggestInput(node.name, (val, isSelect) => {
    node.name = val;
    if (val !== "concat") {
      const meta = COMPONENTS[val];
      const count = meta?.args?.length ?? node.args.length;
      while (node.args.length < count) {
        const argType = meta?.args?.[node.args.length]?.type || "text";
        if (argType === "string" || argType === "number") {
          node.args.push({ id: genId(), type: "text", value: "" });
        } else {
          node.args.push({ id: genId(), type: "component", name: "", args: [] });
        }
      }
      while (node.args.length > count) {
        node.args.pop();
      }
    }
    if (isSelect) renderAll();
  }, tip);

  mainRow.append(dragHandle, dup, del, nameField);

  if (node.name === "concat") {
    const btnTxt = document.createElement("button");
    btnTxt.textContent = "＋文字參數";
    btnTxt.className = "px-3 py-1 bg-[#43b581] hover:bg-[#38996b] text-white rounded-xl shadow transition";
    btnTxt.onclick = () => {
      node.args.push({ id: genId(), type: "text", value: "" });
      renderAll();
    };

    const btnComp = document.createElement("button");
    btnComp.textContent = "＋子組件";
    btnComp.className = "px-3 py-1 bg-[#43b581] hover:bg-[#38996b] text-white rounded-xl shadow transition";
    btnComp.onclick = () => {
      node.args.push({ id: genId(), type: "component", name: "", args: [] });
      renderAll();
    };
    mainRow.append(btnTxt, btnComp);
  }

  // 子節點列表
  const argList = document.createElement("div");
  argList.className = "ml-6 space-y-1 w-full";
  node.args.forEach((child, idx) => {
    const meta = COMPONENTS[node.name];
    let typeHint = "";
    let argType = "string";
    if (meta && meta.args && meta.args[idx]) {
      argType = meta.args[idx].type;
      typeHint = Array.isArray(argType) ? argType.join(" 或 ") : argType;
    }
    if (Array.isArray(argType)) {
      const select = document.createElement("select");
      select.className = "border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
      ["string", "component"].forEach(optType => {
        const opt = document.createElement("option");
        opt.value = optType;
        opt.textContent = optType === "string" ? "文字" : "子組件";
        select.appendChild(opt);
      });
      select.value = child.type === "component" ? "component" : "string";
      select.onchange = () => {
        if (select.value === "component" && child.type !== "component") {
          node.args[idx] = { id: genId(), type: "component", name: "", args: [] };
        } else if (select.value === "string" && child.type !== "text") {
          node.args[idx] = { id: genId(), type: "text", value: "" };
        }
        renderAll();
      };
      const form = child.type === "text" ? createTextForm(child) : createCompForm(child);
      form.title = "參數型別：" + typeHint;
      const dragHandle = form.querySelector('.cursor-move');
      if (dragHandle) dragHandle.insertAdjacentElement('afterend', select);
      const row = document.createElement("div");
      row.className = "flex items-center gap-2 w-full flex-nowrap min-w-0";
      form.classList.add("flex-1", "min-w-0");
      row.append(form);
      argList.appendChild(row);
    } else {
      const form = child.type === "text" ? createTextForm(child) : createCompForm(child);
      if (typeHint) form.title = "參數型別：" + typeHint;
      argList.appendChild(form);
    }
  });

  box.append(mainRow, argList);
  return box;
}

let dragSrc = null;
function addDragHandlers(elem) {
  elem.addEventListener("dragstart", e => {
    dragSrc = e.target.closest("div[data-id]");
    e.dataTransfer.effectAllowed = "move";
    dragSrc.classList.add("opacity-50");

    const preview = dragSrc.cloneNode(true);
    preview.style.position = "absolute";
    preview.style.top = "-1000px";
    preview.style.left = "-1000px";
    preview.style.width = `${dragSrc.offsetWidth}px`;
    preview.style.background = "#23272e";
    preview.style.opacity = "0.9";
    document.body.appendChild(preview);
    e.dataTransfer.setDragImage(preview, 0, 0);

    setTimeout(() => document.body.removeChild(preview), 0);
  });
  elem.addEventListener("dragend", () => dragSrc.classList.remove("opacity-50"));
  elem.addEventListener("dragover", e => {
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
  elem.addEventListener("dragleave", e => {
    const div = e.target.closest("div[data-id]");
    div?.classList.remove("drop-before", "drop-after");
  });
  elem.addEventListener("drop", e => {
    e.preventDefault();
    const tgt = e.target.closest("div[data-id]");
    if (!dragSrc || !tgt || dragSrc === tgt) return;
    const srcId = dragSrc.dataset.id;
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

function addTextNode() {
  tree.push({ id: genId(), type: 'text', value: '' });
  renderAll();
}

function addCompNode() {
  tree.push({ id: genId(), type: 'component', name: '', args: [] });
  renderAll();
}

function renderNode(node, isRoot = true, parentComp = null, argIdx = null) {
  if (node.type === 'text') {
    // 取得父組件參數型別
    let type = "string";
    if (parentComp && argIdx !== null) {
      const meta = COMPONENTS[parentComp];
      if (meta && meta.args && meta.args[argIdx]) {
        type = meta.args[argIdx].type;
      }
    }
    if (isRoot) return node.value;
    // 如果父組件是 concat，且型別為 string，則加上引號
    if (parentComp === "concat") {
      return `"${node.value.replace(/"/g, '\\"')}"`;
    }
    if (type === "string") return `"${node.value.replace(/"/g, '\\"')}"`;
    return node.value;
  }
  const inner = node.args.map((arg, idx) => renderNode(arg, false, node.name, idx)).join('; ');
  if (isRoot) {
    return node.args.length > 0
      ? `{${node.name}(${inner})}`
      : `{${node.name}}`;
  } else {
    return node.args.length > 0
      ? `${node.name}(${inner})`
      : `${node.name}`;
  }
}

function renderAll() {
  const ul = document.getElementById('nodeList');
  ul.innerHTML = '';
  tree.forEach((node, i) => {
    const elem = node.type === 'text' ? createTextForm(node) : createCompForm(node);
    // 設定主節點背景色
    elem.style.background = (i % 2 === 0) ? "#282d36" : "#20232a";
    ul.appendChild(elem);
  });
  document.getElementById('preview').textContent = tree.map(n => renderNode(n)).join('');
}

window.onload = () => {
  document.getElementById('addText').onclick = addTextNode;
  document.getElementById('addComp').onclick = addCompNode;
  renderAll();

  // 複製預覽內容並顯示提示
  const copyBtn = document.getElementById('copy-preview');
  if (copyBtn) {
    copyBtn.onclick = () => {
      const text = document.getElementById('preview').textContent;
      navigator.clipboard.writeText(text).then(() => {
        // 顯示提示
        const tip = document.createElement('div');
        tip.textContent = '已複製到剪貼簿！';
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