import * as utils from '../../utils'

export const verifyFullViolation = (term: string, validationTerms: string[]): boolean => {
  const normilizedTerm = normalizeTerm(term)
  return validationTerms.some(validationTerm => {
    const normilizedValidationTerm = normilizeValidationTerm(validationTerm)
    return normilizedTerm.includes(normilizedValidationTerm)
  })
}

const normilizeValidationTerm = (validationTerm: string): string => {
  return utils.process(validationTerm, [
    utils.lowercase,
    utils.replaceDiacritics,
    utils.removeExtraSpaces,
  ])
}

const normalizeTerm = (term: string): string => {
  return utils.process(term, [
    utils.lowercase,
    utils.replaceDiacritics,
    term => utils.replace(term, ['_', '-', '–'], ' '),
    utils.removeExtraSpaces,
  ])
}