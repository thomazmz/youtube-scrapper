import { process } from './process'
import { replace } from './replace'

export const replaceDiacritics = (stringValue: string) => {
  return process(stringValue, [
    stringValue => replace(stringValue, ['ç'], 'c'),
    stringValue => replace(stringValue, ['á', 'à', 'â', 'ä', 'ã'], 'a'),
    stringValue => replace(stringValue, ['ó', 'ò', 'ô', 'ö', 'õ'], 'o'),
    stringValue => replace(stringValue, ['ú', 'ù', 'û', 'ü'], 'u'),
    stringValue => replace(stringValue, ['é', 'è', 'ê', 'ë'], 'e'),
    stringValue => replace(stringValue, ['í', 'ì', 'î', 'ï'], 'i'),
  ])
}