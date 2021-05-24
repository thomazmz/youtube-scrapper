import { replace } from './replace'

describe('utils.replace', () => {
  it('should replace target strings', () => {
    const stringValue = 'abc'
    expect(replace(stringValue, ['b', 'c'], 'a')).toBe('aaa')
  })
})