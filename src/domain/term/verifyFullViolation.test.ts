import { verifyFullViolation } from './verifyFullViolation'

describe('term.verifyFullViolation', () => {

  it('should return false when there is no string from validationTerms included on term', () => {
    const term = 'foo'
    const validationTerms = ['bar', 'baz']
    expect(verifyFullViolation(term, validationTerms)).toBe(false)
  })

  it('should return true when there is some string from validationTerms included on term', () => {
    const term = 'fiz  foo   bar'
    const validationTerms = ['bar', 'foo']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should not consider uppercase characters on term and on validationTerms', () => {
    const term = 'aAbB'
    const validationTerms = ['AaBb']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should not consider accents from term to compare against validationTerms', () => {
    const term = 'áàâäéèêëíìîïóòôöúùûü'
    const validationTerms = ['aaaaeeeeiiiioooouuuu']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should not consider cedills from term to compare againt validationTerms', () => {
    const term = 'cçc'
    const validationTerms = ['ccc']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should not consider accents from validationTerms to compare against term', () => {
    const term = 'aaaaeeeeiiiioooouuuu'
    const validationTerms = ['áàâäéèêëíìîïóòôöúùûü']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should not considr cedills from validationTerms to compare agains term', () => {
    const term = 'ccc'
    const validationTerms = ['cçc']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should validate agains all valued on validationTerms array', () => {
    const term = 'foo'
    const validationTerms = ['bar', 'foo']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should return true when term is included in any of the validationTerms', () => {
    const term = 'baz foo'
    const validationTerms = ['bar', 'foo']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should replace term hyfens with space', () => {
    const term = 'foo-bar-baz'
    const validationTerms = ['foo bar baz']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should replace term dashes with space', () => {
    const term = 'foo–bar–baz'
    const validationTerms = ['foo bar baz']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should replace term underscores with space', () => {
    const term = 'foo_bar_baz'
    const validationTerms = ['foo bar baz']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })

  it('should remove double spaces', () => {
    const term = 'foo  bar  baz'
    const validationTerms = ['bar']
    expect(verifyFullViolation(term, validationTerms)).toBe(true)
  })
})