import { clearString } from './clearString'

describe('clearString', () => {

  it('should remove newline characters', () => {
    const someStringToBeCleaned = ' this\n is a \n\nstring \nto be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = clearString(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
  })

  it('should remove tab characters', () => {
    const someStringToBeCleaned = ' this\t is a string to be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = clearString(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
  })

  it('should remove extra space characters', () => {
    const someStringToBeCleaned = ' this is a string to be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = clearString(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
  })
})