export const process = <T>(initialValue: T, modifiers: ((value: T) => T)[]): T => {
  return modifiers.reduce((value, f) => {
    return f(value)
  }, initialValue)
}