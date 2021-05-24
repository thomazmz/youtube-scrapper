import { process, lowercase, replace, replaceDiacritics, removeExtraSpaces } from '../../utils'

export const verifyPartialViolation = (term: string, validationTerms: string[]): boolean => {
  const normilizedTerm = normalizeTerm(term)
  const normilizedTermSubStrings = normilizedTerm.split(' ');

  return validationTerms.some(validationTerm => {
    const normilizedValidationTerm = normilizeValidationTerm(validationTerm)
    const normilizedValidationTermSubStrings = normilizedValidationTerm.split(' ')
    return normilizedTermSubStrings.some(subString => normilizedValidationTermSubStrings.includes(subString))
  })
}

const normilizeValidationTerm = (validationTerm: string): string => {
  return process(validationTerm, [
    lowercase,
    replaceDiacritics,
    removeExtraSpaces,
  ])
}

const normalizeTerm = (term: string): string => {
  return process(term, [
    lowercase,
    replaceDiacritics,
    replaeceSpaceLikeCharacters,
    removeExtraSpaces,
  ])
}

const replaeceSpaceLikeCharacters = (stringValue: string) => {
  return replace(stringValue, ['_', '-', '–'], ' ')
}