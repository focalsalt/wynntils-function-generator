export const FUNCTIONS = {
  at_cap: {
    description: "Is the capped value at maximum?",
    args: [
      { name: "capped", description: "Capped value", type: "CappedValue", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Boolean"
  },
  cap: {
    description: "The maximum value from this capped value",
    args: [
      { name: "capped", description: "Capped value", type: "CappedValue", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Integer"
  },
  capped: {
    description: "A capped value from current value and cap",
    args: [
      { name: "current", description: "Current value", type: "Number", required: true, defaultvalue: null },
      { name: "cap", description: "Cap (max value)", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CappedValue"
  },
  current: {
    description: "The current value from this capped value",
    args: [
      { name: "capped", description: "Capped value", type: "CappedValue", required: true, defaultvalue: null }
    ],
    aliases: ["curr"],
    return: "Integer"
  },
  percentage: {
    description: "The percentage (0-100) of this capped value",
    args: [
      { name: "capped", description: "Capped value", type: "CappedValue", required: true, defaultvalue: null }
    ],
    aliases: ["pct"],
    return: "Double"
  },
  remaining: {
    description: "The difference between cap and current value",
    args: [
      { name: "capped", description: "Capped value", type: "CappedValue", required: true, defaultvalue: null }
    ],
    aliases: ["rem"],
    return: "Integer"
  },
  blink_shader: {
    description: "Returns color value that triggers Wynncraft's blink text shader",
    args: [],
    aliases: [],
    return: "CustomColor"
  },
  brightness_shift: {
    description: "Shifts the brightness of provided color",
    args: [
      { name: "color", description: "Color to change", type: "CustomColor", required: true, defaultvalue: null },
      { name: "degree", description: "Amount of degrees to shift, from -1 to 1", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CustomColor"
  },
  fade_shader: {
    description: "Returns color value that triggers Wynncraft's fade text shader",
    args: [],
    aliases: [],
    return: "CustomColor"
  },
  from_hex: {
    description: "Returns a color value based on provided hex argument",
    args: [
      { name: "hex", description: "The hex code representing the desired color. The leading # can be omitted", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CustomColor"
  },
  from_rgb: {
    description: "Returns a color value based on provided RGB arguments",
    args: [
      { name: "r", description: "Red value between 0 and 255", type: "Integer", required: true, defaultvalue: null },
      { name: "g", description: "Green value between 0 and 255", type: "Integer", required: true, defaultvalue: null },
      { name: "b", description: "Blue value between 0 and 255", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CustomColor"
  },
  from_rgb_percent: {
    description: "Returns a color value based on provided RGB arguments",
    args: [
      { name: "r", description: "Red value between 0 and 1", type: "Number", required: true, defaultvalue: null },
      { name: "g", description: "Green value between 0 and 1", type: "Number", required: true, defaultvalue: null },
      { name: "b", description: "Blue value between 0 and 1", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CustomColor"
  },
  gradient_shader: {
    description: "Returns color value that triggers Wynncraft's gradient text shader",
    args: [],
    aliases: [],
    return: "CustomColor"
  },
  hue_shift: {
    description: "Shifts the hue of provided color",
    args: [
      { name: "color", description: "Color to change", type: "CustomColor", required: true, defaultvalue: null },
      { name: "degree", description: "Amount of degrees to shift, from -1 to 1", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CustomColor"
  },
  rainbow_shader: {
    description: "Returns color value that triggers Wynncraft's rainbow text shader",
    args: [],
    aliases: [],
    return: "CustomColor"
  },
  saturation_shift: {
    description: "Shifts the saturation of provided color",
    args: [
      { name: "color", description: "Color to change", type: "CustomColor", required: true, defaultvalue: null },
      { name: "degree", description: "Amount of degrees to shift, from -1 to 1", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CustomColor"
  },
  to_hex_string: {
    description: "Returns a hex string representation of provided color",
    args: [
      { name: "color", description: "Color", type: "CustomColor", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  if_capped_value: {
    description: "If the condition is true, the first value is returned, otherwise the second value is returned",
    args: [
      { name: "condition", description: "Condition", type: "Boolean", required: true, defaultvalue: null },
      { name: "ifTrue", description: "True value", type: "CappedValue", required: true, defaultvalue: null },
      { name: "ifFalse", description: "False value", type: "CappedValue", required: true, defaultvalue: null }
    ],
    aliases: ["if_capped","if_cap"],
    return: "CappedValue"
  },
  if_custom_color: {
    description: "If the condition is true, the first value is returned, otherwise the second value is returned",
    args: [
      { name: "condition", description: "Condition", type: "Boolean", required: true, defaultvalue: null },
      { name: "ifTrue", description: "True value", type: "CustomColor", required: true, defaultvalue: null },
      { name: "ifFalse", description: "False value", type: "CustomColor", required: true, defaultvalue: null }
    ],
    aliases: ["if_color","if_customcolor"],
    return: "CustomColor"
  },
  if_number: {
    description: "If the condition is true, the first value is returned, otherwise the second value is returned",
    args: [
      { name: "condition", description: "Condition", type: "Boolean", required: true, defaultvalue: null },
      { name: "ifTrue", description: "True value", type: "Number", required: true, defaultvalue: null },
      { name: "ifFalse", description: "False value", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["if_num"],
    return: "Number"
  },
  if_string: {
    description: "If the condition is true, the first value is returned, otherwise the second value is returned",
    args: [
      { name: "condition", description: "Condition", type: "Boolean", required: true, defaultvalue: null },
      { name: "ifTrue", description: "True value", type: "String", required: true, defaultvalue: null },
      { name: "ifFalse", description: "False value", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["if_str"],
    return: "String"
  },
  distance: {
    description: "Distance between two locations (in meters)",
    args: [
      { name: "first", description: "First location", type: "Location", required: true, defaultvalue: null },
      { name: "second", description: "Second location", type: "Location", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Double"
  },
  location: {
    description: "Creates a location from three coordinates",
    args: [
      { name: "x", description: "X coordinate", type: "Number", required: true, defaultvalue: null },
      { name: "y", description: "Y coordinate", type: "Number", required: true, defaultvalue: null },
      { name: "z", description: "Z coordinate", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["loc"],
    return: "Location"
  },
  x: {
    description: "Extracts the X coordinate from a location",
    args: [
      { name: "location", description: "The location to extract the coordinate from", type: "Location", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Integer"
  },
  y: {
    description: "Extracts the Y coordinate from a location",
    args: [
      { name: "location", description: "The location to extract the coordinate from", type: "Location", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Integer"
  },
  z: {
    description: "Extracts the Z coordinate from a location",
    args: [
      { name: "location", description: "The location to extract the coordinate from", type: "Location", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Integer"
  },
  and: {
    description: "Checks if all conditions are true",
    args: [
      { name: "values", description: "Booleans to \"and\" together, separated by semicolons", type: "Boolean", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Boolean"
  },
  equals: {
    description: "Checks if two numbers are equal",
    args: [
      { name: "first", description: "First boolean", type: "Number", required: true, defaultvalue: null },
      { name: "second", description: "Second boolean", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["eq"],
    return: "Boolean"
  },
  less_than: {
    description: "Checks if the first value is less than the second",
    args: [
      { name: "first", description: "First number", type: "Number", required: true, defaultvalue: null },
      { name: "second", description: "Second number", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["lt"],
    return: "Boolean"
  },
  less_than_or_equals: {
    description: "Checks if the first value is less than or equal to the second",
    args: [
      { name: "first", description: "First number", type: "Number", required: true, defaultvalue: null },
      { name: "second", description: "Second number", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["lte","less_than_equals","leq"],
    return: "Boolean"
  },
  greater_than: {
    description: "Checks if the first value is greater than the second",
    args: [
      { name: "first", description: "First number", type: "Number", required: true, defaultvalue: null },
      { name: "second", description: "Second number", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["mt","more_than","gt"],
    return: "Boolean"
  },
  greater_than_or_equals: {
    description: "Checks if the first value is greater than or equal to the second",
    args: [
      { name: "first", description: "First number", type: "Number", required: true, defaultvalue: null },
      { name: "second", description: "Second number", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["mte","more_than_equals","greater_than_equals","gte","geq"],
    return: "Boolean"
  },
  not_equals: {
    description: "Checks if two values are not equal",
    args: [
      { name: "first", description: "First boolean", type: "Number", required: true, defaultvalue: null },
      { name: "second", description: "Second boolean", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["neq"],
    return: "Boolean"
  },
  not: {
    description: "Negates a boolean",
    args: [
      { name: "value", description: "Boolean", type: "Boolean", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Boolean"
  },
  or: {
    description: "Checks if any condition is true",
    args: [
      { name: "values", description: "Booleans to \"or\" together, separated by semicolons", type: "Boolean", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Boolean"
  },
  add: {
    description: "Adds any amount of numbers together",
    args: [
      { name: "values", description: "Numbers to add together, separated by semicolons", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Double"
  },
  divide: {
    description: "Divides two numbers",
    args: [
      { name: "dividend", description: "Dividend", type: "Number", required: true, defaultvalue: null },
      { name: "divisor", description: "Divisor", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["div"],
    return: "Double"
  },
  integer: {
    description: "Converts any number type to an integer",
    args: [
      { name: "value", description: "Value", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["int"],
    return: "Integer"
  },
  long: {
    description: "Converts any number type to a long",
    args: [
      { name: "value", description: "Value", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Long"
  },
  max: {
    description: "The largest of all numbers provided",
    args: [
      { name: "values", description: "Numbers to find the maximum of, separated by semicolons", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Double"
  },
  min: {
    description: "The smallest of all numbers provided",
    args: [
      { name: "values", description: "Numbers to find the minimum of, separated by semicolons", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Double"
  },
  modulo: {
    description: "Returns the modulo (remainder of division) of two numbers",
    args: [
      { name: "dividend", description: "Dividend", type: "Number", required: true, defaultvalue: null },
      { name: "divisor", description: "Divisor", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["mod"],
    return: "Double"
  },
  multiply: {
    description: "Multiplies any amount of numbers",
    args: [
      { name: "values", description: "Numbers to multiply together, separated by semicolons", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["mul"],
    return: "Double"
  },
  power: {
    description: "Returns the first number raised to the power of the second number",
    args: [
      { name: "base", description: "Base", type: "Number", required: true, defaultvalue: null },
      { name: "exponent", description: "Exponent", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["pow"],
    return: "Double"
  },
  random: {
    description: "Random number between minimum and maximum (excludes max)",
    args: [
      { name: "min", description: "Minimum value (inclusive)", type: "Number", required: true, defaultvalue: null },
      { name: "max", description: "Maximum value (exclusive)", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["rand"],
    return: "Double"
  },
  round: {
    description: "Rounds a number to the specified number of decimals",
    args: [
      { name: "value", description: "Value", type: "Number", required: true, defaultvalue: null },
      { name: "decimals", description: "Decimals", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Double"
  },
  square_root: {
    description: "Returns the square root of a number",
    args: [
      { name: "value", description: "Value", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["sqrt"],
    return: "Double"
  },
  subtract: {
    description: "Subtracts the second number from the first number",
    args: [
      { name: "first", description: "First number", type: "Number", required: true, defaultvalue: null },
      { name: "second", description: "Second number", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["sub"],
    return: "Double"
  },
  name: {
    description: "The name of this named value",
    args: [
      { name: "named", description: "Named value", type: "NamedValue", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  named_value: {
    description: "A named value from a name and a value",
    args: [
      { name: "name", description: "Name", type: "String", required: true, defaultvalue: null },
      { name: "value", description: "Value", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["named"],
    return: "NamedValue"
  },
  value: {
    description: "The value of this named value",
    args: [
      { name: "named", description: "Named value", type: "NamedValue", required: true, defaultvalue: null }
    ],
    aliases: ["val"],
    return: "Integer"
  },
  capped_string: {
    description: "Returns formatted Capped Value with delimiter in between",
    args: [
      { name: "value", description: "Capped Value", type: "CappedValue", required: true, defaultvalue: null },
      { name: "delimiter", description: "Delimiter between current and max value", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["cap_str","str_cap"],
    return: "String"
  },
  concat: {
    description: "Concatenates any amount of strings together",
    args: [
      { name: "values", description: "Strings to concatenate, separated by semicolons", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  format_capped: {
    description: "Formats a capped value to a shorter version.",
    args: [
      { name: "value", description: "Capped value to format", type: "CappedValue", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  format_duration: {
    description: "Formats seconds to a shorter version.",
    args: [
      { name: "seconds", description: "Seconds to format", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  format_date: {
    description: "Formats a timestamp to a string version.",
    args: [
      { name: "timestamp", description: "Timestamp to format", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  format: {
    description: "Formats a number to a shorter version.",
    args: [
      { name: "value", description: "Value to format", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  format_ranged: {
    description: "Formats a ranged value to a shorter version.",
    args: [
      { name: "value", description: "Ranged value to format", type: "RangedValue", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  leading_zeros: {
    description: "Adds leading zeros to a number",
    args: [
      { name: "value", description: "The number to add leading zeros to", type: "Integer", required: true, defaultvalue: null },
      { name: "length", description: "The length of the number after adding leading zeros", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  parse_double: {
    description: "Parses a string to a double",
    args: [
      { name: "value", description: "String to parse", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Double"
  },
  parse_integer: {
    description: "Parses a string to an integer",
    args: [
      { name: "value", description: "String to parse", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["parse_int"],
    return: "Integer"
  },
  regex_find: {
    description: "Checks if the given regex finds the given string",
    args: [
      { name: "source", description: "String to check", type: "String", required: true, defaultvalue: null },
      { name: "regex", description: "Regex pattern", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Boolean"
  },
  regex_match: {
    description: "Checks if the given regex matches the given string",
    args: [
      { name: "source", description: "String to check", type: "String", required: true, defaultvalue: null },
      { name: "regex", description: "Regex pattern", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Boolean"
  },
  regex_replace: {
    description: "Replaces all matches of the given regex with the given replacement",
    args: [
      { name: "source", description: "String to replace", type: "String", required: true, defaultvalue: null },
      { name: "regex", description: "Regex pattern", type: "String", required: true, defaultvalue: null },
      { name: "replacement", description: "Replacement string", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  repeat: {
    description: "Repeats the given string the specified amount of times",
    args: [
      { name: "value", description: "The string to repeat", type: "String", required: true, defaultvalue: null },
      { name: "count", description: "The number of times to repeat the string", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  string_contains: {
    description: "Checks if a string contains another string",
    args: [
      { name: "source", description: "String to search in", type: "String", required: true, defaultvalue: null },
      { name: "substring", description: "String to check for", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["contains_str"],
    return: "Boolean"
  },
  string_equals: {
    description: "Checks if two strings are equal",
    args: [
      { name: "first", description: "First string", type: "String", required: true, defaultvalue: null },
      { name: "second", description: "Second string", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["eq_str"],
    return: "Boolean"
  },
  string: {
    description: "Convert a number to a string",
    args: [
      { name: "value", description: "Value to convert", type: "Number", required: true, defaultvalue: null }
    ],
    aliases: ["str"],
    return: "String"
  },
  current_territory: {
    description: "The territory you are currently in",
    args: [],
    aliases: ["territory"],
    return: "String"
  },
  current_territory_owner: {
    description: "The name or prefix of the guild that owns the territory you are currently in",
    args: [
      { name: "prefixOnly", description: "Should only the guild prefix be shown?", type: "Boolean", required: false, defaultvalue: false }
    ],
    aliases: ["territory_owner"],
    return: "String"
  },
  current_world: {
    description: "Get the name of the current world, such as \"WC32\", may be <unknown> or <not on world>",
    args: [],
    aliases: ["world"],
    return: "String"
  },
  in_mapped_area: {
    description: "Are you currently inside a mapped area?",
    args: [
      { name: "width", description: "Width of the area to check", type: "Number", required: false, defaultvalue: 130 },
      { name: "height", description: "Height of the area to check", type: "Number", required: false, defaultvalue: 130 },
      { name: "scale", description: "Zoom level of the area to check", type: "Number", required: false, defaultvalue: 1 }
    ],
    aliases: [],
    return: "Boolean"
  },
  in_stream: {
    description: "Are you currently in streamer mode?",
    args: [],
    aliases: ["streamer"],
    return: "Boolean"
  },
  mob_totem_count: {
    description: "The number of mob totems around you",
    args: [],
    aliases: [],
    return: "Integer"
  },
  mob_totem_distance: {
    description: "The distance to the mob totem",
    args: [
      { name: "totemNumber", description: "The number of the mob totem to get the distance to", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Double"
  },
  mob_totem: {
    description: "The location of the mob totem",
    args: [
      { name: "totemNumber", description: "The number of the mob totem to get the location of", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "Location"
  },
  mob_totem_owner: {
    description: "The name of the player who placed the mob totem",
    args: [
      { name: "totemNumber", description: "The number of the mob totem to get the owner of", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  mob_totem_time_left: {
    description: "The time left on the mob totem",
    args: [
      { name: "totemNumber", description: "The number of the mob totem to get the time left of", type: "Integer", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  newest_world: {
    description: "The newest world there is on Wynncraft",
    args: [],
    aliases: [],
    return: "String"
  },
  ping: {
    description: "Your ping to the Wynncraft server",
    args: [],
    aliases: [],
    return: "Integer"
  },
  token_gatekeeper_count: {
    description: "The number of tokens gatekeepers present",
    args: [],
    aliases: ["token_count"],
    return: "Integer"
  },
  token_gatekeeper_deposited: {
    description: "The number of tokens deposited to a gatekeeper",
    args: [
      { name: "gatekeeperNumber", description: "The Gatekeeper Number", type: "Integer", required: false, defaultvalue: 0 }
    ],
    aliases: ["token_dep"],
    return: "CappedValue"
  },
  token_gatekeeper: {
    description: "The number of tokens collected to get past a gatekeeper",
    args: [
      { name: "gatekeeperNumber", description: "The Gatekeeper Number", type: "Integer", required: false, defaultvalue: 0 }
    ],
    aliases: ["token"],
    return: "CappedValue"
  },
  token_gatekeeper_type: {
    description: "The type of tokens needed to get past a gatekeeper",
    args: [
      { name: "gatekeeperNumber", description: "The Gatekeeper Number", type: "Integer", required: false, defaultvalue: 0 }
    ],
    aliases: ["token_type"],
    return: "String"
  },
  world_state: {
    description: "The current world state. One of NOT_CONNECTED, CONNECTING, INTERIM, HUB, CHARACTER_SELECTION, WORLD",
    args: [],
    aliases: [],
    return: "String"
  },
  world_uptime: {
    description: "The time the world has been up for",
    args: [
      { name: "worldName", description: "The name of the world you want the uptime of. This is by default the world you are in.", type: "String", required: false, defaultvalue: "" }
    ],
    aliases: ["uptime","current_world_uptime"],
    return: "String"
  },
  bps: {
    description: "Player speed in blocks per second",
    args: [],
    aliases: [],
    return: "Double"
  },
  bps_xz: {
    description: "Player speed in blocks per second excluding vertical movement",
    args: [],
    aliases: [],
    return: "Double"
  },
  capped_awakened_progress: {
    description: "Your Awakened Progress",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_blood_pool: {
    description: "Your Blood Pool",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_corrupted: {
    description: "Your Corruption",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_focus: {
    description: "Your Focus",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_health: {
    description: "Your health",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_holy_power: {
    description: "Your Holy Power",
    args: [],
    aliases: ["capped_sacred_surge"],
    return: "CappedValue"
  },
  capped_mana_bank: {
    description: "Your Mana Bank",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_mana: {
    description: "Your mana",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_ophanim: {
    description: "Your Ophanim",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_level: {
    description: "Your combat level",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_xp: {
    description: "Your combat XP",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  level: {
    description: "Your current combat level",
    args: [],
    aliases: ["lvl"],
    return: "Integer"
  },
  xp: {
    description: "Your current XP in this level expressed as points (formatted)",
    args: [],
    aliases: [],
    return: "String"
  },
  xp_pct: {
    description: "Your current XP in this level expressed percentage of level up requirement",
    args: [],
    aliases: [],
    return: "Double"
  },
  xp_per_minute: {
    description: "The amount of experience you gain per minute, formatted.",
    args: [],
    aliases: ["xpm"],
    return: "String"
  },
  xp_per_minute_raw: {
    description: "The amount of experience you gain per minute, raw amount.",
    args: [],
    aliases: ["xpm_raw"],
    return: "Integer"
  },
  xp_percentage_per_minute: {
    description: "The amount of experience you gain per minute, percentage.",
    args: [],
    aliases: ["xppm"],
    return: "Double"
  },
  xp_raw: {
    description: "Your current XP in this level expressed as points (raw number)",
    args: [],
    aliases: [],
    return: "Integer"
  },
  xp_req: {
    description: "XP points needed to level up (formatted)",
    args: [],
    aliases: [],
    return: "String"
  },
  xp_req_raw: {
    description: "XP points needed to level up (raw number)",
    args: [],
    aliases: [],
    return: "Integer"
  },
  capped_mem: {
    description: "Memory usage of the JVM",
    args: [],
    aliases: ["capped_memory"],
    return: "CappedValue"
  },
  clock: {
    description: "The current time, formatted in the current locale style",
    args: [],
    aliases: [],
    return: "String"
  },
  clockm: {
    description: "The current time, formatted to 24h format",
    args: [],
    aliases: [],
    return: "String"
  },
  stopwatch_zero: {
    description: "Checks if the stopwatch is currently at zero",
    args: [],
    aliases: ["stopwatch_is_zero"],
    return: "Boolean"
  },
  stopwatch_running: {
    description: "Checks if the stopwatch is currently running",
    args: [],
    aliases: [],
    return: "Boolean"
  },
  stopwatch_hours: {
    description: "The number in the hours position on the stopwatch",
    args: [],
    aliases: [],
    return: "Integer"
  },
  stopwatch_minutes: {
    description: "The number in the minutes position on the stopwatch",
    args: [],
    aliases: [],
    return: "Integer"
  },
  stopwatch_seconds: {
    description: "The number in the seconds position on the stopwatch",
    args: [],
    aliases: [],
    return: "Integer"
  },
  stopwatch_milliseconds: {
    description: "The number in the milliseconds position on the stopwatch",
    args: [],
    aliases: [],
    return: "Integer"
  },
  mem_max: {
    description: "Maximum amount of memory available to the JVM",
    args: [],
    aliases: ["memorymax","memmax"],
    return: "Integer"
  },
  mem_pct: {
    description: "Percentage of available memory that is currently being used",
    args: [],
    aliases: ["memorypct","mempct"],
    return: "Integer"
  },
  mem_used: {
    description: "Current amount of memory used by the JVM",
    args: [],
    aliases: ["memoryused","memused"],
    return: "Integer"
  },
  accessory_durability: {
    description: "Durability of the specified accessory",
    args: [
      { name: "accessory", description: "The accessory you want the durability of. One of Ring_1, Ring_2, Bracelet, Necklace", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CappedValue"
  },
  all_shiny_stats: {
    description: "Shows a list of all shiny stats",
    args: [],
    aliases: [],
    return: "String"
  },
  armor_durability: {
    description: "Durability of the specified armor",
    args: [
      { name: "armor", description: "The armor you want the durability of", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "CappedValue"
  },
  capped_held_item_durability: {
    description: "Durability of the item held in your main hand",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  held_item_current_durability: {
    description: "Current durability of the item in your hand",
    args: [],
    aliases: ["current_held_durability"],
    return: "Integer"
  },
  held_item_max_durability: {
    description: "Max durability of the item in your hand",
    args: [],
    aliases: ["max_held_durability"],
    return: "Integer"
  },
  held_item_name: {
    description: "Name of the item in your hand",
    args: [],
    aliases: ["held_item","held_name"],
    return: "String"
  },
  held_item_shiny_stat: {
    description: "Shows the shiny stat of the item held in your main hand",
    args: [],
    aliases: [],
    return: "NamedValue"
  },
  held_item_type: {
    description: "Type of the item in your hand",
    args: [],
    aliases: ["held_type"],
    return: "String"
  },
  ingredient_pouch_open_slots: {
    description: "How many slots are currently open in your ingredient pouch.",
    args: [],
    aliases: ["pouch_open","pouch_free"],
    return: "Integer"
  },
  ingredient_pouch_used_slots: {
    description: "How many slots are currently used in your ingredient pouch.",
    args: [],
    aliases: ["pouch_used"],
    return: "Integer"
  },
  inventory_free: {
    description: "Number of free slots in inventory",
    args: [],
    aliases: ["inv_free"],
    return: "Integer"
  },
  inventory_used: {
    description: "Number of used slots in inventory",
    args: [],
    aliases: ["inv_used"],
    return: "Integer"
  },
  item_count: {
    description: "Returns the total number of all items in inventory",
    args: [],
    aliases: ["item_amount"],
    return: "Integer"
  },
  liquid_emerald: {
    description: "Amount of money liquid emeralds in inventory",
    args: [],
    aliases: ["le"],
    return: "Integer"
  },
  money: {
    description: "Total amount of money in inventory",
    args: [],
    aliases: [],
    return: "Integer"
  },
  capped_guild_level_progress: {
    description: "The XP progress of your guild",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_guild_objectives_progress: {
    description: "Progress towards next objectives completed milestone",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  guild_level: {
    description: "The Level of the Guild you are in",
    args: [],
    aliases: [],
    return: "Integer"
  },
  guild_name: {
    description: "The name of the Guild you are currently in",
    args: [],
    aliases: [],
    return: "String"
  },
  guild_rank: {
    description: "Your Rank in the Guild you are currently in",
    args: [],
    aliases: [],
    return: "String"
  },
  is_allied_guild: {
    description: "Whether or not the provided guild is an ally of your guild",
    args: [
      { name: "guild", description: "The name of the guild to be checked", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["is_allied","is_ally"],
    return: "Boolean"
  },
  objective_streak: {
    description: "How much consecutive guild objectives you have completed",
    args: [],
    aliases: [],
    return: "Integer"
  },
  capped_horse_level: {
    description: "Your horse's level",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  capped_horse_total_level_time: {
    description: "Your horse's time until max level in seconds",
    args: [],
    aliases: ["h_tot_lvl_time"],
    return: "CappedValue"
  },
  capped_horse_xp: {
    description: "Your horse's XP",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  horse_level: {
    description: "Your horse's current level",
    args: [],
    aliases: ["h_lvl"],
    return: "Integer"
  },
  horse_level_max: {
    description: "Your horse's maximum level",
    args: [],
    aliases: ["h_mlvl"],
    return: "Integer"
  },
  horse_level_time: {
    description: "Your horse's time until level up in seconds",
    args: [],
    aliases: ["h_lvl_time"],
    return: "Integer"
  },
  horse_name: {
    description: "Your horse's name",
    args: [],
    aliases: ["h_name"],
    return: "String"
  },
  horse_tier: {
    description: "Your horse's tier",
    args: [],
    aliases: ["h_tier"],
    return: "Integer"
  },
  horse_xp: {
    description: "Your horse's current XP",
    args: [],
    aliases: ["h_xp"],
    return: "Integer"
  },
  chest_opened: {
    description: "Get the number of loot chests opened",
    args: [],
    aliases: ["chest_count"],
    return: "Integer"
  },
  dry_boxes: {
    description: "Get the number of found gear boxes that has not been a mythic",
    args: [],
    aliases: ["dry_b","dry_boxes_count"],
    return: "Integer"
  },
  dry_pulls: {
    description: "Get the number of pulls that has not contained a mythic",
    args: [],
    aliases: ["dry_p","dry_pulls_count"],
    return: "Integer"
  },
  dry_streak: {
    description: "Get the number of loot chests opened that has not contained a mythic",
    args: [],
    aliases: ["dry_s"],
    return: "Integer"
  },
  highest_dry_streak: {
    description: "The highest dry streak that you had.",
    args: [],
    aliases: [],
    return: "Integer"
  },
  last_dry_streak: {
    description: "The last dry streak that you had.",
    args: [],
    aliases: [],
    return: "Integer"
  },
  last_mythic: {
    description: "The last mythic that you found in a loot chest.",
    args: [],
    aliases: [],
    return: "String"
  },
  lootrun_beacon_count: {
    description: "The number of beacons you have selected in your lootrun",
    args: [],
    aliases: [],
    return: "Integer"
  },
  lootrun_challenges: {
    description: "The number of challenges",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  lootrun_last_selected_beacon_color: {
    description: "The color of the beacon you have last selected in your lootrun",
    args: [],
    aliases: [],
    return: "String"
  },
  lootrun_last_selected_beacon_vibrant: {
    description: "If the last selected beacon in your lootrun was vibrant or not",
    args: [],
    aliases: [],
    return: "Boolean"
  },
  lootrun_mission: {
    description: "The name of the Lootrun Mission at the given Index",
    args: [],
    aliases: [],
    return: "String"
  },
  lootrun_red_beacon_challenge_count: {
    description: "The number of red beacon challenges you have remaining in your lootrun",
    args: [],
    aliases: [],
    return: "Integer"
  },
  lootrun_orange_beacon_count: {
    description: "The number of orange beacon effects currently active",
    args: [],
    aliases: [],
    return: "Integer"
  },
  lootrun_next_orange_expire: {
    description: "How many more challenges until the next orange beacon effect expires",
    args: [],
    aliases: [],
    return: "Integer"
  },
  lootrun_rainbow_beacon_count: {
    description: "How many more challenges until the rainbow beacon effect expires",
    args: [],
    aliases: [],
    return: "Integer"
  },
  lootrun_state: {
    description: "The current state of the lootrun you are in. One of NOT_RUNNING, CHOOSING_BEACON, IN_TASK",
    args: [],
    aliases: [],
    return: "String"
  },
  lootrun_task_location: {
    description: "The location of the task the beacon is pointing to",
    args: [],
    aliases: [],
    return: "Location"
  },
  lootrun_task_name: {
    description: "The name of the task the beacon is pointing to",
    args: [],
    aliases: [],
    return: "String"
  },
  lootrun_task_type: {
    description: "The type of the task the beacon is pointing to. One of LOOT, SLAY, TARGET, DESTROY, DEFEND, UNKNOWN",
    args: [],
    aliases: [],
    return: "String"
  },
  lootrun_time: {
    description: "The time left of current lootrun in seconds",
    args: [],
    aliases: [],
    return: "Integer"
  },
  lootrun_beacon_vibrant: {
    description: "If the lootrun beacon is vibrant",
    args: [],
    aliases: [],
    return: "Boolean"
  },
  lootrun_sacrifices: {
    description: "The number of sacrifices you have in your current lootrun",
    args: [],
    aliases: [],
    return: "Integer"
  },
  lootrun_rerolls: {
    description: "The number of rerolls you have in your current lootrun",
    args: [],
    aliases: [],
    return: "Integer"
  },
  dir: {
    description: "Your current direction (heading)",
    args: [],
    aliases: [],
    return: "Double"
  },
  fps: {
    description: "The current FPS (frames per second)",
    args: [],
    aliases: [],
    return: "Integer"
  },
  key_pressed: {
    description: "Returns true if the specified key is currently pressed, false otherwise",
    args: [],
    aliases: [],
    return: "Boolean"
  },
  minecraft_effect_duration: {
    description: "Returns the duration left of the specified Minecraft effect if it is currently active, -1 otherwise",
    args: [],
    aliases: [],
    return: "Integer"
  },
  my_location: {
    description: "Your current location",
    args: [],
    aliases: ["my_loc"],
    return: "Location"
  },
  ticks: {
    description: "The number of ticks since world start",
    args: [],
    aliases: [],
    return: "Long"
  },
  last_harvest_material_level: {
    description: "The level of the material you last harvested",
    args: [],
    aliases: [],
    return: "Integer"
  },
  last_harvest_material_name: {
    description: "The name of the material you last harvested",
    args: [],
    aliases: [],
    return: "String"
  },
  last_harvest_material_tier: {
    description: "The tier of the material you last harvested",
    args: [],
    aliases: [],
    return: "Integer"
  },
  last_harvest_material_type: {
    description: "The type of material you last harvested",
    args: [],
    aliases: [],
    return: "String"
  },
  last_harvest_resource_type: {
    description: "The type of resource you last harvested",
    args: [],
    aliases: [],
    return: "String"
  },
  material_dry_streak: {
    description: "Returns the number of times a material was not a T3 in a row.",
    args: [],
    aliases: ["mat_dry"],
    return: "Integer"
  },
  profession_level: {
    description: "The level of the specified profession",
    args: [
      { name: "profession", description: "The profession to check", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["prof_lvl"],
    return: "Integer"
  },
  profession_percentage: {
    description: "Your current percentage for the profession specified",
    args: [
      { name: "profession", description: "The profession to check", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["prof_pct"],
    return: "Double"
  },
  profession_xp: {
    description: "The XP of specified profession",
    args: [
      { name: "profession", description: "The profession to check", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["prof_xp"],
    return: "CappedValue"
  },
  profession_xp_per_minute: {
    description: "The amount of XP you gained for the specified profession in the last minute",
    args: [
      { name: "profession", description: "The profession to check", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["prof_xpm"],
    return: "String"
  },
  profession_xp_per_minute_raw: {
    description: "The raw amount of XP you gained for the specified profession in the last minute",
    args: [
      { name: "profession", description: "The profession to check", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["prof_xpm_raw"],
    return: "Integer"
  },
  current_raid: {
    description: "The name of the raid you are currently in",
    args: [],
    aliases: ["raid"],
    return: "String"
  },
  current_raid_boss_count: {
    description: "How many bosses does the current raid have",
    args: [],
    aliases: [],
    return: "Integer"
  },
  current_raid_challenge_count: {
    description: "How many challenges does the current raid have",
    args: [],
    aliases: [],
    return: "Integer"
  },
  current_raid_room_name: {
    description: "The name of the challenge raid room you are currently in",
    args: [],
    aliases: [],
    return: "String"
  },
  current_raid_room_time: {
    description: "How long you have been in the current raid room for in milliseconds",
    args: [],
    aliases: [],
    return: "Long"
  },
  current_raid_room_damage: {
    description: "How much damage have you dealt in the current raid room",
    args: [],
    aliases: [],
    return: "Long"
  },
  current_raid_time: {
    description: "How long you have been in the current raid for in milliseconds",
    args: [],
    aliases: ["raid_time"],
    return: "Long"
  },
  current_raid_damage: {
    description: "How much damage have you dealt in the current raid",
    args: [],
    aliases: ["raid_damage"],
    return: "Long"
  },
  dry_aspects: {
    description: "Dry Aspects",
    args: [],
    aliases: [],
    return: "Integer"
  },
  dry_raid_reward_pulls: {
    description: "Dry Raid Reward Pulls",
    args: [],
    aliases: [],
    return: "Integer"
  },
  dry_raids_tomes: {
    description: "Dry Raids Tomes",
    args: [],
    aliases: [],
    return: "Integer"
  },
  dry_raids_aspects: {
    description: "Dry Raids Aspects",
    args: [],
    aliases: [],
    return: "Integer"
  },
  raid_challenges: {
    description: "The number of challenges in the raid",
    args: [],
    aliases: [],
    return: "CappedValue"
  },
  raid_has_room: {
    description: "Has the current raid got a room for the given room number?",
    args: [],
    aliases: [],
    return: "Boolean"
  },
  raid_intermission_time: {
    description: "How long you have been outside of a challenge/boss room in milliseconds",
    args: [],
    aliases: [],
    return: "Long"
  },
  raid_is_boss_room: {
    description: "Is the given room number a boss room in the current raid?",
    args: [],
    aliases: [],
    return: "Boolean"
  },
  raid_room_damage: {
    description: "How much damage did you deal in the specified raid room",
    args: [],
    aliases: [],
    return: "Long"
  },
  raid_room_name: {
    description: "The name of the specified raid room",
    args: [],
    aliases: [],
    return: "String"
  },
  raid_room_time: {
    description: "How long it took to complete the specified raid room in milliseconds",
    args: [],
    aliases: [],
    return: "Long"
  },
  raid_personal_best_time: {
    description: "The fastest time taken to beat the specified raid in milliseconds",
    args: [],
    aliases: ["raid_pb"],
    return: "Long"
  },
  raid_time_remaining: {
    description: "How much time is left to complete the raid in seconds",
    args: [],
    aliases: [],
    return: "Integer"
  },
  range_high: {
    description: "The high value of the range",
    args: [],
    aliases: ["high"],
    return: "Integer"
  },
  range_low: {
    description: "The low value of the range",
    args: [],
    aliases: ["low"],
    return: "Integer"
  },
  ranged: {
    description: "Creates a range from two values",
    args: [],
    aliases: [],
    return: "RangedValue"
  },
  arrow_shield_count: {
    description: "The number of arrow shield charges you have",
    args: [],
    aliases: ["arrow_shield"],
    return: "Integer"
  },
  guardian_angels_count: {
    description: "The number of guardian angel charges you have",
    args: [],
    aliases: ["guardian_angels"],
    return: "Integer"
  },
  mantle_shield_count: {
    description: "The number of mantle shield charges you have",
    args: [],
    aliases: ["mantle_shield"],
    return: "Integer"
  },
  shaman_mask: {
    description: "What shaman mask you are currently wearing",
    args: [],
    aliases: [],
    return: "String"
  },
  shaman_totem_distance: {
    description: "The distance between you and the shaman totem",
    args: [],
    aliases: [],
    return: "Double"
  },
  shaman_totem_location: {
    description: "The location of the shaman totem",
    args: [],
    aliases: [],
    return: "String"
  },
  shaman_totem_state: {
    description: "The state of the shaman totem. One of SUMMONED, ACTIVE",
    args: [],
    aliases: [],
    return: "String"
  },
  shaman_totem_time_left: {
    description: "The time left on the shaman totem",
    args: [],
    aliases: [],
    return: "Integer"
  },
  shield_type_name: {
    description: "The name of the current active shield type, currently one of \"Arrow\", \"Guardian Angels\" or \"Mantle\"",
    args: [],
    aliases: ["shield_type"],
    return: "String"
  },
  friends: {
    description: "Number of friends online",
    args: [],
    aliases: [],
    return: "Integer"
  },
  party_members: {
    description: "Number of party members",
    args: [],
    aliases: [],
    return: "Integer"
  },
  party_leader: {
    description: "The name of the party leader",
    args: [],
    aliases: [],
    return: "String"
  },
  statistics_total: {
    description: "Total of all statistical entries",
    args: [],
    aliases: [],
    return: "Long"
  },
  statistics_count: {
    description: "Count of statistical entries",
    args: [],
    aliases: [],
    return: "Long"
  },
  statistics_min: {
    description: "Minimum value among the statistical entries",
    args: [],
    aliases: [],
    return: "Long"
  },
  statistics_max: {
    description: "Maximum value among the statistical entries",
    args: [],
    aliases: [],
    return: "Long"
  },
  statistics_average: {
    description: "Average value of the statistical entries",
    args: [],
    aliases: [],
    return: "Long"
  },
  statistics_first_modified: {
    description: "First modification date among the statistical entries",
    args: [],
    aliases: [],
    return: "Long"
  },
  statistics_last_modified: {
    description: "Last modification date among the statistical entries",
    args: [],
    aliases: [],
    return: "Long"
  },
  statistics_formatted: {
    description: "Format numbers the way the statistic kind does",
    args: [],
    aliases: [],
    return: "String"
  },
  aura_timer: {
    description: "The time left before aura strikes",
    args: [],
    aliases: [],
    return: "Double"
  },
  current_tower_attack_speed: {
    description: "The attack speed of the current tower you are attacking",
    args: [],
    aliases: [],
    return: "Double"
  },
  current_tower_damage: {
    description: "The damage of the current tower you are attacking",
    args: [],
    aliases: [],
    return: "RangedValue"
  },
  current_tower_defense: {
    description: "The defense of the current tower you are attacking",
    args: [],
    aliases: [],
    return: "Double"
  },
  current_tower_health: {
    description: "The health of the current tower you are attacking",
    args: [],
    aliases: [],
    return: "Long"
  },
  estimated_time_to_finish_war: {
    description: "The estimated time to finish the war you are currently in",
    args: [],
    aliases: [],
    return: "Long"
  },
  initial_tower_attack_speed: {
    description: "The attack speed of the initial tower you are attacking",
    args: [],
    aliases: [],
    return: "Double"
  },
  initial_tower_damage: {
    description: "The damage of the initial tower you are attacking",
    args: [],
    aliases: [],
    return: "RangedValue"
  },
  initial_tower_defense: {
    description: "The defense of the initial tower you are attacking",
    args: [],
    aliases: [],
    return: "Double"
  },
  initial_tower_health: {
    description: "The health of the initial tower you are attacking",
    args: [],
    aliases: [],
    return: "Long"
  },
  is_territory_queued: {
    description: "Is the specified territory queued for an attack?",
    args: [],
    aliases: ["is_queued"],
    return: "Boolean"
  },
  team_dps: {
    description: "The DPS of your team in the war you are currently in",
    args: [],
    aliases: [],
    return: "Long"
  },
  time_in_war: {
    description: "The time you have been in the war you are currently in",
    args: [],
    aliases: [],
    return: "Long"
  },
  tower_dps: {
    description: "The DPS of the tower you are currently attacking",
    args: [],
    aliases: [],
    return: "RangedValue"
  },
  tower_effective_hp: {
    description: "The effective HP of the tower you are currently attacking",
    args: [],
    aliases: [],
    return: "Long"
  },
  tower_owner: {
    description: "The owner of the tower you are attacking",
    args: [],
    aliases: [],
    return: "String"
  },
  tower_territory: {
    description: "The territory of the tower you are attacking",
    args: [],
    aliases: [],
    return: "String"
  },
  volley_timer: {
    description: "The time left before volley strikes",
    args: [],
    aliases: [],
    return: "Double"
  },
  wars_since: {
    description: "The number of wars in the specified time period",
    args: [],
    aliases: [],
    return: "Long"
  },
  annihilation_sun_progress: {
    description: "The progress towards a new sun being created during the Annihilation battle",
    args: [],
    aliases: ["sun_progress"],
    return: "CappedValue"
  },
  transcribe_gavellian: {
    description: "Transcribe your given input into Gavellian.",
    args: [
      { name: "gavellian", description: "The text you want to transcribe into Gavellian.", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["gavellian"],
    return: "String"
  },
  transcribe_wynnic: {
    description: "Transcribe your given input into Wynnic.",
    args: [
      { name: "wynnic", description: "The text you want to transcribe into Wynnic.", type: "String", required: true, defaultvalue: null }
    ],
    aliases: ["wynnic"],
    return: "String"
  },
  to_background_text: {
    description: "Converts the text to use Wynncraft background style.",
    args: [
      { name: "text", description: "Text to convert. Unsupported characters will be omitted", type: "String", required: true, defaultvalue: null },
      { name: "textColor", description: "Color of the text", type: "CustomColor", required: true, defaultvalue: null },
      { name: "backgroundColor", description: "Color of the background", type: "CustomColor", required: true, defaultvalue: null },
      { name: "leftEdge", description: "Style of the left edge. NONE or PILL", type: "String", required: true, defaultvalue: null },
      { name: "rightEdge", description: "Style of the right edge. NONE or PILL", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  },
  to_fancy_text: {
    description: "Converts the text to use Wynncraft Fancy style.",
    args: [
      { name: "text", description: "Text to convert. Unsupported characters will be omitted", type: "String", required: true, defaultvalue: null }
    ],
    aliases: [],
    return: "String"
  }
};