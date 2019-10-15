export const capitalize = (string) => {
  let start = string[0].toUpperCase();
  let rest = string.slice(1).split("").map( char => char.toLowerCase() ).join("");
  return start + rest;
}

export const unCapitalize = (string) => {
  return string.split("").map( char => char.toLowerCase() ).join("");
}
