let tree = [];
let counter = 0;

const COMPONENTS = {
    accessory_durability: {desc: "work in progress...", args: [], returns: "string"},
    all_shiny_stats: {desc: "work in progress...", args: [], returns: "string"},
    annihilation_sun_progress: {desc: "work in progress...", args: [], returns: "string"},
    area_damage_average: {desc: "work in progress...", args: [], returns: "string"},
    area_damage_per_second: {desc: "work in progress...", args: [], returns: "string"},
    armor_durability: {desc: "work in progress...", args: [], returns: "string"},
    arrow_shield_count: {desc: "work in progress...", args: [], returns: "string"},
    aura_timer: {desc: "work in progress...", args: [], returns: "string"},
    blink_shader: {desc: "work in progress...", args: [], returns: "string"},
    blocks_above_ground: {desc: "work in progress...", args: [], returns: "string"},
    bps: {desc: "work in progress...", args: [], returns: "string"},
    bps_xz: {desc: "work in progress...", args: [], returns: "string"},
    capped_awakened_progress: {desc: "work in progress...", args: [], returns: "string"},
    capped_blood_pool: {desc: "work in progress...", args: [], returns: "string"},
    capped_corrupted: {desc: "work in progress...", args: [], returns: "string"},
    capped_focus: {desc: "work in progress...", args: [], returns: "string"},
    capped_guild_level_progress: {desc: "work in progress...", args: [], returns: "string"},
    capped_guild_objectives_progress: {desc: "work in progress...", args: [], returns: "string"},
    capped_health: {desc: "work in progress...", args: [], returns: "string"},
    capped_held_item_durability: {desc: "work in progress...", args: [], returns: "string"},
    capped_holy_power: {desc: "work in progress...", args: [], returns: "string"},
    capped_horse_level: {desc: "work in progress...", args: [], returns: "string"},
    capped_horse_total_level_time: {desc: "work in progress...", args: [], returns: "string"},
    capped_horse_xp: {desc: "work in progress...", args: [], returns: "string"},
    capped_ingredient_pouch_slots: {desc: "work in progress...", args: [], returns: "string"},
    capped_inventory_slots: {desc: "work in progress...", args: [], returns: "string"},
    capped_level: {desc: "work in progress...", args: [], returns: "string"},
    capped_mana: {desc: "work in progress...", args: [], returns: "string"},
    capped_mana_bank: {desc: "work in progress...", args: [], returns: "string"},
    capped_mem: {desc: "work in progress...", args: [], returns: "string"},
    capped_ophanim: {desc: "work in progress...", args: [], returns: "string"},
    capped_xp: {desc: "work in progress...", args: [], returns: "string"},
    chest_opened: {desc: "work in progress...", args: [], returns: "string"},
    class: {desc: "work in progress...", args: [], returns: "string"},
    clock: {desc: "work in progress...", args: [], returns: "string"},
    clockm: {desc: "work in progress...", args: [], returns: "string"},
    commander_activated: {desc: "work in progress...", args: [], returns: "string"},
    commander_duration: {desc: "work in progress...", args: [], returns: "string"},
    current_raid: {desc: "work in progress...", args: [], returns: "string"},
    current_raid_boss_count: {desc: "work in progress...", args: [], returns: "string"},
    current_raid_challenge_count: {desc: "work in progress...", args: [], returns: "string"},
    current_raid_damage: {desc: "work in progress...", args: [], returns: "string"},
    current_raid_room_damage: {desc: "work in progress...", args: [], returns: "string"},
    current_raid_room_name: {desc: "work in progress...", args: [], returns: "string"},
    current_raid_room_time: {desc: "work in progress...", args: [], returns: "string"},
    current_raid_time: {desc: "work in progress...", args: [], returns: "string"},
    current_territory: {desc: "work in progress...", args: [], returns: "string"},
    current_territory_owner: {desc: "work in progress...", args: [], returns: "string"},
    current_tower_attack_speed: {desc: "work in progress...", args: [], returns: "string"},
    current_tower_damage: {desc: "work in progress...", args: [], returns: "string"},
    current_tower_defense: {desc: "work in progress...", args: [], returns: "string"},
    current_tower_health: {desc: "work in progress...", args: [], returns: "string"},
    current_world: {desc: "work in progress...", args: [], returns: "string"},
    dir: {desc: "work in progress...", args: [], returns: "string"},
    dry_aspects: {desc: "work in progress...", args: [], returns: "string"},
    dry_boxes: {desc: "work in progress...", args: [], returns: "string"},
    dry_pulls: {desc: "work in progress...", args: [], returns: "string"},
    dry_raid_reward_pulls: {desc: "work in progress...", args: [], returns: "string"},
    dry_raids_aspects: {desc: "work in progress...", args: [], returns: "string"},
    dry_raids_tomes: {desc: "work in progress...", args: [], returns: "string"},
    dry_streak: {desc: "work in progress...", args: [], returns: "string"},
    emerald_block: {desc: "work in progress...", args: [], returns: "string"},
    emerald_string: {desc: "work in progress...", args: [], returns: "string"},
    emeralds: {desc: "work in progress...", args: [], returns: "string"},
    estimated_time_to_finish_war: {desc: "work in progress...", args: [], returns: "string"},
    fade_shader: {desc: "work in progress...", args: [], returns: "string"},
    focused_mob_health: {desc: "work in progress...", args: [], returns: "string"},
    focused_mob_health_percent: {desc: "work in progress...", args: [], returns: "string"},
    focused_mob_name: {desc: "work in progress...", args: [], returns: "string"},
    fps: {desc: "work in progress...", args: [], returns: "string"},
    friends: {desc: "work in progress...", args: [], returns: "string"},
    gradient_shader: {desc: "work in progress...", args: [], returns: "string"},
    guardian_angels_count: {desc: "work in progress...", args: [], returns: "string"},
    guild_level: {desc: "work in progress...", args: [], returns: "string"},
    guild_name: {desc: "work in progress...", args: [], returns: "string"},
    guild_rank: {desc: "work in progress...", args: [], returns: "string"},
    health: {desc: "work in progress...", args: [], returns: "string"},
    health_max: {desc: "work in progress...", args: [], returns: "string"},
    health_pct: {desc: "work in progress...", args: [], returns: "string"},
    held_item_cooldown: {desc: "work in progress...", args: [], returns: "string"},
    held_item_current_durability: {desc: "work in progress...", args: [], returns: "string"},
    held_item_max_durability: {desc: "work in progress...", args: [], returns: "string"},
    held_item_name: {desc: "work in progress...", args: [], returns: "string"},
    held_item_shiny_stat: {desc: "work in progress...", args: [], returns: "string"},
    held_item_type: {desc: "work in progress...", args: [], returns: "string"},
    highest_dry_streak: {desc: "work in progress...", args: [], returns: "string"},
    horse_level: {desc: "work in progress...", args: [], returns: "string"},
    horse_level_max: {desc: "work in progress...", args: [], returns: "string"},
    horse_level_time: {desc: "work in progress...", args: [], returns: "string"},
    horse_name: {desc: "work in progress...", args: [], returns: "string"},
    horse_tier: {desc: "work in progress...", args: [], returns: "string"},
    horse_xp: {desc: "work in progress...", args: [], returns: "string"},
    id: {desc: "work in progress...", args: [], returns: "string"},
    in_mapped_area: {desc: "work in progress...", args: [], returns: "string"},
    in_stream: {desc: "work in progress...", args: [], returns: "string"},
    ingredient_pouch_open_slots: {desc: "work in progress...", args: [], returns: "string"},
    ingredient_pouch_used_slots: {desc: "work in progress...", args: [], returns: "string"},
    initial_tower_attack_speed: {desc: "work in progress...", args: [], returns: "string"},
    initial_tower_damage: {desc: "work in progress...", args: [], returns: "string"},
    initial_tower_defense: {desc: "work in progress...", args: [], returns: "string"},
    initial_tower_health: {desc: "work in progress...", args: [], returns: "string"},
    inventory_free: {desc: "work in progress...", args: [], returns: "string"},
    inventory_used: {desc: "work in progress...", args: [], returns: "string"},
    is_allied_guild: {desc: "work in progress...", args: [], returns: "string"},
    is_territory_queued: {desc: "work in progress...", args: [], returns: "string"},
    item_count: {desc: "work in progress...", args: [], returns: "string"},
    key_pressed: {desc: "work in progress...", args: [], returns: "string"},
    kills_per_minute: {desc: "work in progress...", args: [], returns: "string"},
    last_dry_streak: {desc: "work in progress...", args: [], returns: "string"},
    last_harvest_material_level: {desc: "work in progress...", args: [], returns: "string"},
    last_harvest_material_name: {desc: "work in progress...", args: [], returns: "string"},
    last_harvest_material_tier: {desc: "work in progress...", args: [], returns: "string"},
    last_harvest_material_type: {desc: "work in progress...", args: [], returns: "string"},
    last_harvest_resource_type: {desc: "work in progress...", args: [], returns: "string"},
    last_mythic: {desc: "work in progress...", args: [], returns: "string"},
    last_spell_name: {desc: "work in progress...", args: [], returns: "string"},
    last_spell_repeat_count: {desc: "work in progress...", args: [], returns: "string"},
    level: {desc: "work in progress...", args: [], returns: "string"},
    liquid_emerald: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_beacon_count: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_beacon_vibrant: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_challenges: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_last_selected_beacon_color: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_last_selected_beacon_vibrant: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_mission: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_next_orange_expire: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_orange_beacon_count: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_rainbow_beacon_count: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_red_beacon_challenge_count: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_state: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_task_location: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_task_name: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_task_type: {desc: "work in progress...", args: [], returns: "string"},
    lootrun_time: {desc: "work in progress...", args: [], returns: "string"},
    mana: {desc: "work in progress...", args: [], returns: "string"},
    mana_max: {desc: "work in progress...", args: [], returns: "string"},
    mana_pct: {desc: "work in progress...", args: [], returns: "string"},
    mantle_shield_count: {desc: "work in progress...", args: [], returns: "string"},
    material_dry_streak: {desc: "work in progress...", args: [], returns: "string"},
    mem_max: {desc: "work in progress...", args: [], returns: "string"},
    mem_pct: {desc: "work in progress...", args: [], returns: "string"},
    mem_used: {desc: "work in progress...", args: [], returns: "string"},
    minecraft_effect_duration: {desc: "work in progress...", args: [], returns: "string"},
    mob_totem: {desc: "work in progress...", args: [], returns: "string"},
    mob_totem_count: {desc: "work in progress...", args: [], returns: "string"},
    mob_totem_distance: {desc: "work in progress...", args: [], returns: "string"},
    mob_totem_owner: {desc: "work in progress...", args: [], returns: "string"},
    mob_totem_time_left: {desc: "work in progress...", args: [], returns: "string"},
    money: {desc: "work in progress...", args: [], returns: "string"},
    my_location: {desc: "work in progress...", args: [], returns: "string"},
    newest_world: {desc: "work in progress...", args: [], returns: "string"},
    objective_streak: {desc: "work in progress...", args: [], returns: "string"},
    ophanim_active: {desc: "work in progress...", args: [], returns: "string"},
    ophanim_orb: {desc: "work in progress...", args: [], returns: "string"},
    party_leader: {desc: "work in progress...", args: [], returns: "string"},
    party_members: {desc: "work in progress...", args: [], returns: "string"},
    ping: { desc: "取得延遲", args: [], returns: "number" },
    profession_level: {desc: "work in progress...", args: [], returns: "string"},
    profession_percentage: {desc: "work in progress...", args: [], returns: "string"},
    profession_xp: {desc: "work in progress...", args: [], returns: "string"},
    profession_xp_per_minute: {desc: "work in progress...", args: [], returns: "string"},
    profession_xp_per_minute_raw: {desc: "work in progress...", args: [], returns: "string"},
    raid_challenges: {desc: "work in progress...", args: [], returns: "string"},
    raid_has_room: {desc: "work in progress...", args: [], returns: "string"},
    raid_intermission_time: {desc: "work in progress...", args: [], returns: "string"},
    raid_is_boss_room: {desc: "work in progress...", args: [], returns: "string"},
    raid_personal_best_time: {desc: "work in progress...", args: [], returns: "string"},
    raid_room_damage: {desc: "work in progress...", args: [], returns: "string"},
    raid_room_name: {desc: "work in progress...", args: [], returns: "string"},
    raid_room_time: {desc: "work in progress...", args: [], returns: "string"},
    raid_time_remaining: {desc: "work in progress...", args: [], returns: "string"},
    rainbow_shader: {desc: "work in progress...", args: [], returns: "string"},
    shaman_mask: {desc: "work in progress...", args: [], returns: "string"},
    shaman_totem_distance: {desc: "work in progress...", args: [], returns: "string"},
    shaman_totem_location: {desc: "work in progress...", args: [], returns: "string"},
    shaman_totem_state: {desc: "work in progress...", args: [], returns: "string"},
    shaman_totem_time_left: {desc: "work in progress...", args: [], returns: "string"},
    shield_type_name: {desc: "work in progress...", args: [], returns: "string"},
    sprint: {desc: "work in progress...", args: [], returns: "string"},
    statistics_average: {desc: "work in progress...", args: [], returns: "string"},
    statistics_count: {desc: "work in progress...", args: [], returns: "string"},
    statistics_first_modified: {desc: "work in progress...", args: [], returns: "string"},
    statistics_formatted: {desc: "work in progress...", args: [], returns: "string"},
    statistics_last_modified: {desc: "work in progress...", args: [], returns: "string"},
    statistics_max: {desc: "work in progress...", args: [], returns: "string"},
    statistics_min: {desc: "work in progress...", args: [], returns: "string"},
    statistics_total: {desc: "work in progress...", args: [], returns: "string"},
    status_effect_active: {desc: "work in progress...", args: [], returns: "string"},
    status_effects: {desc: "work in progress...", args: [], returns: "string"},
    stopwatch_hours: {desc: "work in progress...", args: [], returns: "string"},
    stopwatch_milliseconds: {desc: "work in progress...", args: [], returns: "string"},
    stopwatch_minutes: {desc: "work in progress...", args: [], returns: "string"},
    stopwatch_running: {desc: "work in progress...", args: [], returns: "string"},
    stopwatch_seconds: {desc: "work in progress...", args: [], returns: "string"},
    stopwatch_zero: {desc: "work in progress...", args: [], returns: "string"},
    team_dps: {desc: "work in progress...", args: [], returns: "string"},
    ticks: {desc: "work in progress...", args: [], returns: "string"},
    ticks_since_last_spell: {desc: "work in progress...", args: [], returns: "string"},
    time_in_war: {desc: "work in progress...", args: [], returns: "string"},
    time_since_last_damage_dealt: {desc: "work in progress...", args: [], returns: "string"},
    time_since_last_kill: {desc: "work in progress...", args: [], returns: "string"},
    token_gatekeeper: {desc: "work in progress...", args: [], returns: "string"},
    token_gatekeeper_count: {desc: "work in progress...", args: [], returns: "string"},
    token_gatekeeper_deposited: {desc: "work in progress...", args: [], returns: "string"},
    token_gatekeeper_type: {desc: "work in progress...", args: [], returns: "string"},
    total_area_damage: {desc: "work in progress...", args: [], returns: "string"},
    tower_dps: {desc: "work in progress...", args: [], returns: "string"},
    tower_effective_hp: {desc: "work in progress...", args: [], returns: "string"},
    tower_owner: {desc: "work in progress...", args: [], returns: "string"},
    tower_territory: {desc: "work in progress...", args: [], returns: "string"},
    transcribe_gavellian: {desc: "work in progress...", args: [], returns: "string"},
    transcribe_wynnic: {desc: "work in progress...", args: [], returns: "string"},
    volley_timer: {desc: "work in progress...", args: [], returns: "string"},
    wars_since: {desc: "work in progress...", args: [], returns: "string"},
    world_state: {desc: "work in progress...", args: [], returns: "string"},
    world_uptime: {desc: "work in progress...", args: [], returns: "string"},
    xp: {desc: "work in progress...", args: [], returns: "string"},
    xp_pct: {desc: "work in progress...", args: [], returns: "string"},
    xp_per_minute: {desc: "work in progress...", args: [], returns: "string"},
    xp_per_minute_raw: {desc: "work in progress...", args: [], returns: "string"},
    xp_percentage_per_minute: {desc: "work in progress...", args: [], returns: "string"},
    xp_raw: {desc: "work in progress...", args: [], returns: "string"},
    xp_req: {desc: "work in progress...", args: [], returns: "string"},
    xp_req_raw: {desc: "work in progress...", args: [], returns: "string"},
    add: {desc: "work in progress...", args: [], returns: "string"},
    and: {desc: "work in progress...", args: [], returns: "string"},
    at_cap: {desc: "work in progress...", args: [], returns: "string"},
    brightness_shift: {desc: "work in progress...", args: [], returns: "string"},
    cap: {desc: "work in progress...", args: [], returns: "string"},
    capped: {desc: "work in progress...", args: [], returns: "string"},
    capped_string: {desc: "work in progress...", args: [], returns: "string"},
    concat: { desc: "多個字串合併", args: [{ type: "any[]" }], returns: "string" },
    current: {desc: "work in progress...", args: [], returns: "string"},
    distance: {desc: "work in progress...", args: [], returns: "string"},
    divide: {desc: "work in progress...", args: [], returns: "string"},
    equals: {desc: "work in progress...", args: [], returns: "string"},
    format: {desc: "work in progress...", args: [], returns: "string"},
    format_capped: {desc: "work in progress...", args: [], returns: "string"},
    format_date: {desc: "work in progress...", args: [], returns: "string"},
    format_duration: {desc: "work in progress...", args: [], returns: "string"},
    format_ranged: {desc: "work in progress...", args: [], returns: "string"},
    from_hex: {desc: "work in progress...", args: [], returns: "string"},
    from_rgb: {desc: "work in progress...", args: [], returns: "string"},
    from_rgb_percent: {desc: "work in progress...", args: [], returns: "string"},
    greater_than: {desc: "work in progress...", args: [], returns: "string"},
    greater_than_or_equals: {desc: "work in progress...", args: [], returns: "string"},
    hue_shift: {desc: "work in progress...", args: [], returns: "string"},
    if_capped_value: {desc: "work in progress...", args: [], returns: "string"},
    if_custom_color: {desc: "work in progress...", args: [], returns: "string"},
    if_number: {desc: "work in progress...", args: [], returns: "string"},
    if_string: { desc: "設定條件，顯示不同字串", args: [{ type: "boolean" }, { type: "string" }, { type: "string" }], returns: "string" },
    integer: {desc: "轉換成整數", args: [], returns: "number"},
    leading_zeros: {desc: "work in progress...", args: [], returns: "string"},
    less_than: {desc: "work in progress...", args: [], returns: "string"},
    less_than_or_equals: {desc: "work in progress...", args: [], returns: "string"},
    location: {desc: "work in progress...", args: [], returns: "string"},
    long: {desc: "work in progress...", args: [], returns: "string"},
    max: {desc: "work in progress...", args: [], returns: "string"},
    min: {desc: "work in progress...", args: [], returns: "string"},
    modulo: {desc: "work in progress...", args: [], returns: "string"},
    multiply: {desc: "work in progress...", args: [], returns: "string"},
    name: {desc: "work in progress...", args: [], returns: "string"},
    named_value: {desc: "work in progress...", args: [], returns: "string"},
    not: {desc: "work in progress...", args: [], returns: "string"},
    not_equals: {desc: "work in progress...", args: [], returns: "string"},
    or: {desc: "work in progress...", args: [], returns: "string"},
    parse_double: {desc: "work in progress...", args: [], returns: "string"},
    parse_integer: {desc: "work in progress...", args: [], returns: "string"},
    percentage: {desc: "work in progress...", args: [], returns: "string"},
    power: {desc: "work in progress...", args: [], returns: "string"},
    random: {desc: "work in progress...", args: [], returns: "string"},
    range_high: {desc: "work in progress...", args: [], returns: "string"},
    range_low: {desc: "work in progress...", args: [], returns: "string"},
    ranged: {desc: "work in progress...", args: [], returns: "string"},
    regex_find: {desc: "work in progress...", args: [], returns: "string"},
    regex_match: {desc: "work in progress...", args: [], returns: "string"},
    regex_replace: {desc: "work in progress...", args: [], returns: "string"},
    remaining: {desc: "work in progress...", args: [], returns: "string"},
    repeat: {desc: "work in progress...", args: [], returns: "string"},
    round: {desc: "work in progress...", args: [], returns: "string"},
    saturation_shift: {desc: "work in progress...", args: [], returns: "string"},
    square_root: {desc: "work in progress...", args: [], returns: "string"},
    string: { desc: "將整數轉換成字串", args: [{ type: ["number", "component"] }], returns: "string" },
    string_contains: {desc: "work in progress...", args: [], returns: "string"},
    string_equals: {desc: "work in progress...", args: [], returns: "string"},
    subtract: {desc: "work in progress...", args: [], returns: "string"},
    to_hex_string: {desc: "work in progress...", args: [], returns: "string"},
    value: {desc: "work in progress...", args: [], returns: "string"},
    x: {desc: "work in progress...", args: [], returns: "string"},
    y: {desc: "work in progress...", args: [], returns: "string"},
    z: {desc: "work in progress...", args: [], returns: "string"}
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
  input.placeholder = "Function Name";
  input.className = "w-full border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
  input.title = tooltip;

  const datalist = document.createElement("ul");
  datalist.className = "suggestion-list absolute top-full w-full z-10 bg-[#181c23] border text-sm max-h-80 overflow-y-auto hidden";

  input.oninput = (e) => {
    const val = e.target.value;
    onInput(val, false);
    datalist.innerHTML = "";
    if (val.length === 0) return datalist.classList.add("hidden");
    const hits = Object.keys(COMPONENTS).filter(s => s.startsWith(val));
    if (hits.length === 0) return datalist.classList.add("hidden");
    hits.forEach(s => {
      const option = document.createElement("div");
      option.className = "bg-opacity-50 hover:bg-opacity-100 p-4 bg-[#2d3340] rounded-xl shadow flex flex-col cursor-pointer transition-all";
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
  dragHandle.title = "Drag";
  dragHandle.innerHTML = "&#9776;";
  dragHandle.draggable = true;
  dragHandle.dataset.id = node.id;
  addDragHandlers(dragHandle);

  // 新增 input 外層
  const inputWrapper = document.createElement("div");
  inputWrapper.className = "flex-1 max-w-[420px]";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter String";
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
  del.textContent = "Delete";
  del.className = "bg-opacity-50 hover:bg-opacity-100 px-3 py-1 bg-[#f74040] text-white rounded-xl shadow transition";
  del.onclick = () => {
    const p = findParent(node.id);
    p.list.splice(p.index, 1);
    renderAll();
  };

  const dup = document.createElement("button");
  dup.textContent = "Copy";
  dup.className = "bg-opacity-50 hover:bg-opacity-100 px-3 py-1 bg-[#5865f2] text-white rounded-xl shadow transition";
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
  box.className = "flex flex-col py-1 flex-grow w-full min-w-0";
  box.dataset.id = node.id;

  // 主行
  const mainRow = document.createElement("div");
  mainRow.className = "flex items-center gap-2";

  const dragHandle = document.createElement("span");
  dragHandle.className = "cursor-move select-none px-2 text-gray-400";
  dragHandle.title = "Drag";
  dragHandle.innerHTML = "&#9776;";
  dragHandle.draggable = true;
  dragHandle.dataset.id = node.id;
  addDragHandlers(dragHandle);

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "bg-opacity-50 hover:bg-opacity-100 px-3 py-1 bg-[#f74040] text-white rounded-xl shadow transition";
  del.onclick = () => {
    const p = findParent(node.id);
    p.list.splice(p.index, 1);
    renderAll();
  };

  const dup = document.createElement("button");
  dup.textContent = "Copy";
  dup.className = "bg-opacity-50 hover:bg-opacity-100 px-3 py-1 bg-[#5865f2] text-white rounded-xl shadow transition";
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
    btnTxt.textContent = "+ String";
    btnTxt.className = "bg-opacity-50 hover:bg-opacity-100 px-3 py-1 bg-[#43b581] text-white rounded-xl shadow transition";
    btnTxt.onclick = () => {
      node.args.push({ id: genId(), type: "text", value: "" });
      renderAll();
    };

    const btnComp = document.createElement("button");
    btnComp.textContent = "+ Function";
    btnComp.className = "bg-opacity-50 hover:bg-opacity-100 px-3 py-1 bg-[#43b581] text-white rounded-xl shadow transition";
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
      typeHint = Array.isArray(argType) ? argType.join(" or ") : argType;
    }
    if (Array.isArray(argType)) {
      const select = document.createElement("select");
      select.className = "border rounded-xl bg-[#23272f] text-white px-3 py-1 shadow focus:outline-none focus:ring-2 focus:ring-[#5865f2] transition";
      ["string", "component"].forEach(optType => {
        const opt = document.createElement("option");
        opt.value = optType;
        opt.textContent = optType === "string" ? "String" : "Function";
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
      form.title = "Type: " + typeHint;
      const dragHandle = form.querySelector('.cursor-move');
      if (dragHandle) dragHandle.insertAdjacentElement('afterend', select);
      const row = document.createElement("div");
      row.className = "flex items-center gap-2 w-full flex-nowrap min-w-0";
      form.classList.add("flex-1", "min-w-0");
      row.append(form);
      argList.appendChild(row);
    } else {
      const form = child.type === "text" ? createTextForm(child) : createCompForm(child);
      if (typeHint) form.title = "Type: " + typeHint;
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