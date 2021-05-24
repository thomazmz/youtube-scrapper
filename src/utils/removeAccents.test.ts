import { removeAccents } from './removeAccents'

describe('utils.removeAccents', () => {
  it('should remove accute', () => {
    const accutes = 'áéíóú'
    const result = removeAccents(accutes)
    expect(result).toBe('aeiou')
  })

  it('should remove circunflex', () => {
    const accutes = 'âêîôû'
    const result = removeAccents(accutes)
    expect(result).toBe('aeiou')
  })

  it('should remove grave', () => {
    const graves = 'àèìòù'
    const result = removeAccents(graves)
    expect(result).toBe('aeiou')
  })

  it('should remove diaresis', () => {
    const diaresises = 'äëïöü'
    const result = removeAccents(diaresises)
    expect(result).toBe('aeiou')
  })

  it('should remove tilde', () => {
    const tildes = 'ãõ'
    const result = removeAccents(tildes)
    expect(result).toBe('ao')
  })
})