import { align } from './align'

describe('align', () => {

  it('should remove newline characters', () => {
    const someStringToBeCleaned = ' this\n is a \n\nstring \nto be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = align(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
  })

  it('should remove tab characters', () => {
    const someStringToBeCleaned = ' this\t is a string to be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = align(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
  })

  it('should remove extra space characters', () => {
    const someStringToBeCleaned = ' this is a string to be cleaned   '
    const expectedString = 'this is a string to be cleaned'
    const clearedString = align(someStringToBeCleaned)
    expect(clearedString).toBe(expectedString)
  })
})