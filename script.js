// script.js
let tree = [];
let counter = 0;

const COMPONENT_SUGGESTIONS = {
    "accessory_durability": "Description",
    "all_shiny_stats": "Description",
    "annihilation_sun_progress": "Description",
    "area_damage_average": "Description",
    "area_damage_per_second": "Description",
    "armor_durability": "Description",
    "arrow_shield_count": "Description",
    "aura_timer": "Description",
    "blink_shader": "Description",
    "blocks_above_ground": "Description",
    "bps": "Description",
    "bps_xz": "Description",
    "capped_awakened_progress": "Description",
    "capped_blood_pool": "Description",
    "capped_corrupted": "Description",
    "capped_focus": "Description",
    "capped_guild_level_progress": "Description",
    "capped_guild_objectives_progress": "Description",
    "capped_health": "Description",
    "capped_held_item_durability": "Description",
    "capped_holy_power": "Description",
    "capped_horse_level": "Description",
    "capped_horse_total_level_time": "Description",
    "capped_horse_xp": "Description",
    "capped_ingredient_pouch_slots": "Description",
    "capped_inventory_slots": "Description",
    "capped_level": "Description",
    "capped_mana": "Description",
    "capped_mana_bank": "Description",
    "capped_mem": "Description",
    "capped_ophanim": "Description",
    "capped_xp": "Description",
    "chest_opened": "Description",
    "class": "Description",
    "clock": "Description",
    "clockm": "Description",
    "commander_activated": "Description",
    "commander_duration": "Description",
    "current_raid": "Description",
    "current_raid_boss_count": "Description",
    "current_raid_challenge_count": "Description",
    "current_raid_damage": "Description",
    "current_raid_room_damage": "Description",
    "current_raid_room_name": "Description",
    "current_raid_room_time": "Description",
    "current_raid_time": "Description",
    "current_territory": "Description",
    "current_territory_owner": "Description",
    "current_tower_attack_speed": "Description",
    "current_tower_damage": "Description",
    "current_tower_defense": "Description",
    "current_tower_health": "Description",
    "current_world": "Description",
    "dir": "Description",
    "dry_aspects": "Description",
    "dry_boxes": "Description",
    "dry_pulls": "Description",
    "dry_raid_reward_pulls": "Description",
    "dry_raids_aspects": "Description",
    "dry_raids_tomes": "Description",
    "dry_streak": "Description",
    "emerald_block": "Description",
    "emerald_string": "Description",
    "emeralds": "Description",
    "estimated_time_to_finish_war": "Description",
    "fade_shader": "Description",
    "focused_mob_health": "Description",
    "focused_mob_health_percent": "Description",
    "focused_mob_name": "Description",
    "fps": "Description",
    "friends": "Description",
    "gradient_shader": "Description",
    "guardian_angels_count": "Description",
    "guild_level": "Description",
    "guild_name": "Description",
    "guild_rank": "Description",
    "health": "Description",
    "health_max": "Description",
    "health_pct": "Description",
    "held_item_cooldown": "Description",
    "held_item_current_durability": "Description",
    "held_item_max_durability": "Description",
    "held_item_name": "Description",
    "held_item_shiny_stat": "Description",
    "held_item_type": "Description",
    "highest_dry_streak": "Description",
    "horse_level": "Description",
    "horse_level_max": "Description",
    "horse_level_time": "Description",
    "horse_name": "Description",
    "horse_tier": "Description",
    "horse_xp": "Description",
    "id": "Description",
    "in_mapped_area": "Description",
    "in_stream": "Description",
    "ingredient_pouch_open_slots": "Description",
    "ingredient_pouch_used_slots": "Description",
    "initial_tower_attack_speed": "Description",
    "initial_tower_damage": "Description",
    "initial_tower_defense": "Description",
    "initial_tower_health": "Description",
    "inventory_free": "Description",
    "inventory_used": "Description",
    "is_allied_guild": "Description",
    "is_territory_queued": "Description",
    "item_count": "Description",
    "key_pressed": "Description",
    "kills_per_minute": "Description",
    "last_dry_streak": "Description",
    "last_harvest_material_level": "Description",
    "last_harvest_material_name": "Description",
    "last_harvest_material_tier": "Description",
    "last_harvest_material_type": "Description",
    "last_harvest_resource_type": "Description",
    "last_mythic": "Description",
    "last_spell_name": "Description",
    "last_spell_repeat_count": "Description",
    "level": "Description",
    "liquid_emerald": "Description",
    "lootrun_beacon_count": "Description",
    "lootrun_beacon_vibrant": "Description",
    "lootrun_challenges": "Description",
    "lootrun_last_selected_beacon_color": "Description",
    "lootrun_last_selected_beacon_vibrant": "Description",
    "lootrun_mission": "Description",
    "lootrun_next_orange_expire": "Description",
    "lootrun_orange_beacon_count": "Description",
    "lootrun_rainbow_beacon_count": "Description",
    "lootrun_red_beacon_challenge_count": "Description",
    "lootrun_state": "Description",
    "lootrun_task_location": "Description",
    "lootrun_task_name": "Description",
    "lootrun_task_type": "Description",
    "lootrun_time": "Description",
    "mana": "Description",
    "mana_max": "Description",
    "mana_pct": "Description",
    "mantle_shield_count": "Description",
    "material_dry_streak": "Description",
    "mem_max": "Description",
    "mem_pct": "Description",
    "mem_used": "Description",
    "minecraft_effect_duration": "Description",
    "mob_totem": "Description",
    "mob_totem_count": "Description",
    "mob_totem_distance": "Description",
    "mob_totem_owner": "Description",
    "mob_totem_time_left": "Description",
    "money": "Description",
    "my_location": "Description",
    "newest_world": "Description",
    "objective_streak": "Description",
    "ophanim_active": "Description",
    "ophanim_orb": "Description",
    "party_leader": "Description",
    "party_members": "Description",
    "ping": "Description",
    "profession_level": "Description",
    "profession_percentage": "Description",
    "profession_xp": "Description",
    "profession_xp_per_minute": "Description",
    "profession_xp_per_minute_raw": "Description",
    "raid_challenges": "Description",
    "raid_has_room": "Description",
    "raid_intermission_time": "Description",
    "raid_is_boss_room": "Description",
    "raid_personal_best_time": "Description",
    "raid_room_damage": "Description",
    "raid_room_name": "Description",
    "raid_room_time": "Description",
    "raid_time_remaining": "Description",
    "rainbow_shader": "Description",
    "shaman_mask": "Description",
    "shaman_totem_distance": "Description",
    "shaman_totem_location": "Description",
    "shaman_totem_state": "Description",
    "shaman_totem_time_left": "Description",
    "shield_type_name": "Description",
    "sprint": "Description",
    "statistics_average": "Description",
    "statistics_count": "Description",
    "statistics_first_modified": "Description",
    "statistics_formatted": "Description",
    "statistics_last_modified": "Description",
    "statistics_max": "Description",
    "statistics_min": "Description",
    "statistics_total": "Description",
    "status_effect_active": "Description",
    "status_effects": "Description",
    "stopwatch_hours": "Description",
    "stopwatch_milliseconds": "Description",
    "stopwatch_minutes": "Description",
    "stopwatch_running": "Description",
    "stopwatch_seconds": "Description",
    "stopwatch_zero": "Description",
    "team_dps": "Description",
    "ticks": "Description",
    "ticks_since_last_spell": "Description",
    "time_in_war": "Description",
    "time_since_last_damage_dealt": "Description",
    "time_since_last_kill": "Description",
    "token_gatekeeper": "Description",
    "token_gatekeeper_count": "Description",
    "token_gatekeeper_deposited": "Description",
    "token_gatekeeper_type": "Description",
    "total_area_damage": "Description",
    "tower_dps": "Description",
    "tower_effective_hp": "Description",
    "tower_owner": "Description",
    "tower_territory": "Description",
    "transcribe_gavellian": "Description",
    "transcribe_wynnic": "Description",
    "volley_timer": "Description",
    "wars_since": "Description",
    "world_state": "Description",
    "world_uptime": "Description",
    "xp": "Description",
    "xp_pct": "Description",
    "xp_per_minute": "Description",
    "xp_per_minute_raw": "Description",
    "xp_percentage_per_minute": "Description",
    "xp_raw": "Description",
    "xp_req": "Description",
    "xp_req_raw": "Description",
    "add": "Description",
    "and": "Description",
    "at_cap": "Description",
    "brightness_shift": "Description",
    "cap": "Description",
    "capped": "Description",
    "capped_string": "Description",
    "concat": "Description",
    "current": "Description",
    "distance": "Description",
    "divide": "Description",
    "equals": "Description",
    "format": "Description",
    "format_capped": "Description",
    "format_date": "Description",
    "format_duration": "Description",
    "format_ranged": "Description",
    "from_hex": "Description",
    "from_rgb": "Description",
    "from_rgb_percent": "Description",
    "greater_than": "Description",
    "greater_than_or_equals": "Description",
    "hue_shift": "Description",
    "if_capped_value": "Description",
    "if_custom_color": "Description",
    "if_number": "Description",
    "if_string": "Description",
    "integer": "Description",
    "leading_zeros": "Description",
    "less_than": "Description",
    "less_than_or_equals": "Description",
    "location": "Description",
    "long": "Description",
    "max": "Description",
    "min": "Description",
    "modulo": "Description",
    "multiply": "Description",
    "name": "Description",
    "named_value": "Description",
    "not": "Description",
    "not_equals": "Description",
    "or": "Description",
    "parse_double": "Description",
    "parse_integer": "Description",
    "percentage": "Description",
    "power": "Description",
    "random": "Description",
    "range_high": "Description",
    "range_low": "Description",
    "ranged": "Description",
    "regex_find": "Description",
    "regex_match": "Description",
    "regex_replace": "Description",
    "remaining": "Description",
    "repeat": "Description",
    "round": "Description",
    "saturation_shift": "Description",
    "square_root": "Description",
    "string": "Description",
    "string_contains": "Description",
    "string_equals": "Description",
    "subtract": "Description",
    "to_hex_string": "Description",
    "value": "Description",
    "x": "Description",
    "y": "Description",
    "z": "Description"
};

const COMPONENT_ARG_COUNTS = {
  string: 1,
  ping: 0,
  str: 1,
  int: 1,
  if_str: 3,
  mte: 2,
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
  wrapper.className = "relative flex";

  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.placeholder = "組件名稱";
  input.className = "flex-grow border p-1 mr-2";
  input.title = tooltip;

  const datalist = document.createElement("ul");
  datalist.className = "suggestion-list absolute top-full w-full z-10 bg-[#181c23] border text-sm max-h-40 overflow-y-auto hidden";

  input.oninput = (e) => {
    const val = e.target.value;
    onInput(val, false);
    datalist.innerHTML = "";
    if (val.length === 0) return datalist.classList.add("hidden");
    const hits = Object.keys(COMPONENT_SUGGESTIONS).filter(s => s.startsWith(val));
    if (hits.length === 0) return datalist.classList.add("hidden");
    hits.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      li.className = "p-4 bg-[#2d3340] rounded-xl shadow flex flex-col gap-2";
      li.onclick = () => {
        input.value = s;
        input.title = COMPONENT_SUGGESTIONS[s] || "";
        onInput(s, true);
        datalist.classList.add("hidden");
      };
      datalist.appendChild(li);
    });
    datalist.classList.remove("hidden");
  };

  input.onfocus = input.oninput;
  wrapper.append(input, datalist);
  return wrapper;
}

function createTextForm(node) {
  const li = document.createElement("li");
  li.className = "flex items-center gap-2 py-1";
  li.draggable = true;
  li.dataset.id = node.id;

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "輸入文字";
  input.className = "flex-grow border p-1 mr-2";
  input.value = node.value;
  input.addEventListener('mousedown', e => e.stopPropagation());
  input.addEventListener('touchstart', e => e.stopPropagation());
  input.addEventListener('input', () => {
    node.value = input.value;
  });
  input.addEventListener('blur', () => {
    renderAll();
  });

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

  addDragHandlers(li);
  li.append(dup, del, input);
  return li;
}

function createCompForm(node) {
  const li = document.createElement("li");
  li.className = "flex flex-col gap-1 py-1 flex-grow";

  li.draggable = true;
  li.dataset.id = node.id;

  const tip = COMPONENT_SUGGESTIONS[node.name] || "";
  const nameField = createAutoSuggestInput(node.name, (val, isSelect) => {
    node.name = val;
    if (val !== "concat") {
      const count = COMPONENT_ARG_COUNTS[val] ?? node.args.length;
      while (node.args.length < count) {
        node.args.push({ id: genId(), type: "component", value: "", args: [] });
      }
      while (node.args.length > count) {
        node.args.pop();
      }
    }
    if (isSelect) renderAll();
  }, tip);

  const mainRow = document.createElement("div");
  mainRow.className = "flex items-center gap-2";

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

  mainRow.append(dup, del);
  mainRow.append(nameField);
  if (node.name === "concat") {
  mainRow.append(btnTxt, btnComp);
  }

  // 子節點列表
  const argList = document.createElement("ul");
  argList.className = "ml-6 space-y-1"; // 縮排顯示
  node.args.forEach(child => {
    const form = child.type === "text" ? createTextForm(child) : createCompForm(child);
    argList.appendChild(form);
  });

  addDragHandlers(li);
  li.append(mainRow, argList);
  return li;
}

let dragSrc = null;
function addDragHandlers(elem) {
  elem.addEventListener("dragstart", e => {
    dragSrc = e.target;
    e.dataTransfer.effectAllowed = "move";
    dragSrc.classList.add("opacity-50");
  });
  elem.addEventListener("dragend", () => dragSrc.classList.remove("opacity-50"));
  elem.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const tgt = e.target.closest("li");
    document.querySelectorAll(".drop-target").forEach(el => el.classList.remove("drop-target"));
    if (tgt) tgt.classList.add("drop-target");
  });
  elem.addEventListener("dragleave", e => {
    e.target.closest("li")?.classList.remove("drop-target");
  });
  elem.addEventListener("drop", e => {
    e.preventDefault();
    const tgt = e.target.closest("li");
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
  if (node.type === 'text') return isRoot ? node.value : `"${node.value.replace(/"/g, '\\"')}"`;
  const inner = node.args.map(arg => renderNode(arg, false)).join('; ');
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
  tree.forEach(node => ul.appendChild(node.type === 'text' ? createTextForm(node) : createCompForm(node)));
  document.getElementById('preview').textContent = tree.map(n => renderNode(n)).join('');
}

window.onload = () => {
  document.getElementById('addText').onclick = addTextNode;
  document.getElementById('addComp').onclick = addCompNode;
  renderAll();
};
