import { replace } from './replace'
import { process } from './process'

export const removeAccents = (stringValue: string) => {
  return process(stringValue, [
    stringValue => replace(stringValue, ['á', 'à', 'â', 'ä', 'ã'], 'a'),
    stringValue => replace(stringValue, ['ó', 'ò', 'ô', 'ö', 'õ'], 'o'),
    stringValue => replace(stringValue, ['é', 'è', 'ê', 'ë'], 'e'),
    stringValue => replace(stringValue, ['í', 'ì', 'î', 'ï'], 'i'),
    stringValue => replace(stringValue, ['ú', 'ù', 'û', 'ü'], 'u'),
  ])
}