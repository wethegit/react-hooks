/**
 * Casts a string to a boolean
 */
export const castToBool = (input: string): boolean => {
  if (typeof input === "boolean") return input
  return input === "true" ? true : false
}
