export function readBoolean(value: "true" | "false") {
  return value === "true"
}

// "false" -> true ❌
// export function readBoolean(value: "true" | "false") {
//   return Boolean(value)
// }
