export const replace = (stringValue: string, targets: string[], replacer: string) => {
  const matchStr = targets.join('|');
  if (!matchStr) return stringValue;
  const regexp = new RegExp(matchStr, 'g');
  return stringValue.replace(regexp, replacer);
}