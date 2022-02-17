import { NORMALIZATION } from './settings'

export const ORTHOGRAPHY = [
  'a',
  'â',
  'ch',
  'e',
  'ee',
  'h',
  'k',
  'm',
  'n',
  'ô',
  '8',
  'p',
  'q',
  's',
  'sh',
  't',
  'ty',
  'u',
  'w',
  'y',
]

if (NORMALIZATION) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(NORMALIZATION))
  )
}
