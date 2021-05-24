import { lowercase } from './lowercase'

describe('lowecase', () => {
  it('should lowercase all characters on string', () => {
    const stringValue = 'ABCDEFGHIJKLMNOPQRSTUVXZ'
    expect(lowercase(stringValue)).toBe('abcdefghijklmnopqrstuvxz')
  })
})