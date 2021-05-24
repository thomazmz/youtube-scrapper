import { process } from './process'

describe('utils.process', () => {
  it('should  apply all functions on the initial value', () => {
    const initialValue = 10
    const someFunction = (int: number) => int+2
    const anotherFunction = (int: number) => int/2
    expect(process(initialValue, [someFunction, anotherFunction])).toBe(6)
  })
})