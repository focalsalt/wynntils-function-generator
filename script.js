// script.js
let tree = [];
let counter = 0;

const COMPONENT_SUGGESTIONS = {
	concat: '將多個字串組成一串文字',
	string: '將數值轉成文字字串',
	ping: '回傳玩家的延遲數值',
	str: '轉換任意值為字串',
	int: '轉換成整數',
	if_str: '根據條件回傳不同字串',
	mte: '比較數值是否大於等於某數',
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
//wdbyhugjcxtvybguhnijmko,l
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
	const wrapper = document.createElement('div');
	wrapper.className = 'relative flex';

	const input = document.createElement('input');
	input.type = 'text';
	input.value = value;
	input.placeholder = '組件名稱';
	input.className = 'flex-grow border p-1';
	input.title = tooltip;

	const datalist = document.createElement('ul');
	datalist.className =
		'suggestion-list absolute z-10 bg-white border w-full text-sm max-h-40 overflow-y-auto hidden';

	input.oninput = (e) => {
		const val = e.target.value;
		onInput(val, false);
		datalist.innerHTML = '';
		if (val.length === 0) return datalist.classList.add('hidden');
		const hits = Object.keys(COMPONENT_SUGGESTIONS).filter((s) =>
			s.startsWith(val),
		);
		if (hits.length === 0) return datalist.classList.add('hidden');
		hits.forEach((s) => {
			const li = document.createElement('li');
			li.textContent = s;
			li.className = 'p-4 bg-[#2d3340] rounded-xl shadow flex flex-col gap-2';
			li.onclick = () => {
				input.value = s;
				input.title = COMPONENT_SUGGESTIONS[s] || '';
				onInput(s, true);
				datalist.classList.add('hidden');
			};
			datalist.appendChild(li);
		});
		datalist.classList.remove('hidden');
	};

	input.onfocus = input.oninput;
	wrapper.append(input, datalist);
	return wrapper;
}

function createTextForm(node) {
	const li = document.createElement('li');
	li.className = 'p-4 bg-[#2d3340] rounded-xl shadow flex flex-col gap-2';
	li.draggable = true;
	li.dataset.id = node.id;

	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = '輸入文字';
	input.className = 'flex-1 border p-1 mr-2';
	input.value = node.value;
	input.addEventListener('input', () => {
		node.value = input.value;
		document.getElementById('preview').textContent = tree
			.map((n) => renderNode(n))
			.join('');
	});

	const del = document.createElement('button');
	del.textContent = '刪除';
	del.className =
		'px-3 py-1 bg-[#f74040] hover:bg-[#dc2626] text-white rounded-xl shadow transition';
	del.onclick = () => {
		const p = findParent(node.id);
		p.list.splice(p.index, 1);
		renderAll();
	};

	const dup = document.createElement('button');
	dup.textContent = '複製';
	dup.className =
		'px-3 py-1 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-xl shadow transition';
	dup.onclick = () => {
		const p = findParent(node.id);
		const copy = cloneNode(node);
		p.list.splice(p.index + 1, 0, copy);
		renderAll();
	};

	addDragHandlers(li);
	li.append(input, del, dup);
	return li;
}

function createCompForm(node) {
	const li = document.createElement('li');
	li.className = 'p-4 bg-[#2d3340] rounded-xl shadow flex flex-col gap-2';
	li.draggable = true;
	li.dataset.id = node.id;

	const tip = COMPONENT_SUGGESTIONS[node.name] || '';
	const nameField = createAutoSuggestInput(
		node.name,
		(val, isSelect) => {
			node.name = val;
			if (isSelect) renderAll();
		},
		tip,
	);

	const argList = document.createElement('ul');
	argList.className = 'ml-4 space-y-1';
	node.args.forEach((child) => {
		const form =
			child.type === 'text' ? createTextForm(child) : createCompForm(child);
		argList.appendChild(form);
	});

	const btnTxt = document.createElement('button');
	btnTxt.textContent = '＋文字參數';
	btnTxt.className =
		'px-3 py-1 bg-[#43b581] hover:bg-[#38996b] text-white rounded-xl shadow transition';
	btnTxt.onclick = () => {
		node.args.push({ id: genId(), type: 'text', value: '' });
		renderAll();
	};

	const btnComp = document.createElement('button');
	btnComp.textContent = '＋子組件';
	btnComp.className =
		'px-3 py-1 bg-[#43b581] hover:bg-[#38996b] text-white rounded-xl shadow transition';
	btnComp.onclick = () => {
		node.args.push({ id: genId(), type: 'component', name: '', args: [] });
		renderAll();
	};

	const del = document.createElement('button');
	del.textContent = '刪除';
	del.className =
		'px-3 py-1 bg-[#f74040] hover:bg-[#dc2626] text-white rounded-xl shadow transition';
	del.onclick = () => {
		const p = findParent(node.id);
		p.list.splice(p.index, 1);
		renderAll();
	};

	const dup = document.createElement('button');
	dup.textContent = '複製';
	dup.className =
		'px-3 py-1 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-xl shadow transition';
	dup.onclick = () => {
		const p = findParent(node.id);
		const copy = cloneNode(node);
		p.list.splice(p.index + 1, 0, copy);
		renderAll();
	};

	addDragHandlers(li);
	li.append(nameField, argList, btnTxt, btnComp, del, dup);
	return li;
}

let dragSrc = null;
function addDragHandlers(elem) {
	elem.addEventListener('dragstart', (e) => {
		dragSrc = e.target;
		e.dataTransfer.effectAllowed = 'move';
		dragSrc.classList.add('opacity-50');
	});
	elem.addEventListener('dragend', () =>
		dragSrc.classList.remove('opacity-50'),
	);
	elem.addEventListener('dragover', (e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';
		const tgt = e.target.closest('li');
		document
			.querySelectorAll('.drop-target')
			.forEach((el) => el.classList.remove('drop-target'));
		if (tgt) tgt.classList.add('drop-target');
	});
	elem.addEventListener('dragleave', (e) => {
		e.target.closest('li')?.classList.remove('drop-target');
	});
	elem.addEventListener('drop', (e) => {
		e.preventDefault();
		const tgt = e.target.closest('li');
		if (!dragSrc || !tgt || dragSrc === tgt) return;
		const srcId = dragSrc.dataset.id;
		const tgtId = tgt.dataset.id;
		const srcP = findParent(srcId);
		const tgtP = findParent(tgtId);
		const srcNode = srcP.list[srcP.index];
		srcP.list.splice(srcP.index, 1);
		tgtP.list.splice(tgtP.index, 0, srcNode);
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

function renderNode(node, isRoot = true) {
	if (node.type === 'text') return `"${node.value.replace(/"/g, '\\"')}"`;
	const inner = node.args.map((arg) => renderNode(arg, false)).join('; ');
	return isRoot ? `{${node.name}(${inner})}` : `${node.name}(${inner})`;
}

function renderAll() {
	const ul = document.getElementById('nodeList');
	ul.innerHTML = '';
	tree.forEach((node) =>
		ul.appendChild(
			node.type === 'text' ? createTextForm(node) : createCompForm(node),
		),
	);
	document.getElementById('preview').textContent = tree
		.map((n) => renderNode(n))
		.join('');
}

window.onload = () => {
	document.getElementById('addText').onclick = addTextNode;
	document.getElementById('addComp').onclick = addCompNode;
	renderAll();
};
