/**
 * Casts a string to a boolean
 *
 * @param {String|Boolean} input - The input to cast to a boolean
 * @returns {Boolean} The input cast to a boolean
 */
export const castToBool = (input) => {
  if (typeof input === "boolean") return input
  return input === "true" ? true : false
}
