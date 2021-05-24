import { verifyFullViolation } from './verifyFullViolation'
import { verifyPartialViolation } from './verifyPartialViolation'
import { TermStatus } from '../types'

export const verify = (term: string): TermStatus => {
  // if(verifyOwned(term)) return 'owned'
  // if(verifyLicensed(term)) return 'licensed'
  if(verifyFullViolation(term, ['Músicas Para Bebê Dormir'])) return 'full violation'
  if(verifyPartialViolation(term, ['Músicas Para Bebê Dormir'])) return 'partial violation'
  return 'uncategorized'
}