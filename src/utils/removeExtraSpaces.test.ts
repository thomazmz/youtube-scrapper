import { removeExtraSpaces } from './removeExtraSpaces'

describe('utils.removeExtraSpaces', () => {
  it('should remove all extra spaces withing the sentence', () => {
    const stringValue = 'this   is  a string full of  duplicated    spaces'
    const expectedResult = 'this is a string full of duplicated spaces'
    const result =  removeExtraSpaces(stringValue);
    expect(result).toBe(expectedResult)
  })

  it('should remove all extra spaces on the edges', () => {
    const stringValue = '  this is a string     '
    const expectedResult = 'this is a string'
    const result = removeExtraSpaces(stringValue)
    expect(result).toBe(expectedResult)
  })
})