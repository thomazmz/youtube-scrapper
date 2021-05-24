export const removeExtraSpaces = (stringValue: string) => {
  return stringValue.replace(/\s\s+/g, ' ').trim();
}