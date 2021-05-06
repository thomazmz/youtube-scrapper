import { clearString } from './clearString'

describe('clearString', () => {

  it('should remove newline characters', () => {
    const someStringToBeCleaned = ' this is a \nstring \nto be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = clearString(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
    
  })

  it('should remove space characters', () => {
    const someStringToBeCleaned = ' this is a string to be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = clearString(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
  })
})