export const clearString = (string: string) => {
  return string.replace(/\r?\n|\r/g, '').trim()
}
