import { NORMALIZATION } from './settings'

export const WORDS = [
  'pawâw',
  'wunôk',
  'mônâk',
  'tyâqas',
  'kunâm',
  'muhtuq',
  'munah',
  'peetôk',
  'nôkôp',
  'qusuq',
  'wânah',
  'ushqôt',
  'ap8ôk',
  'ahsun',
  'takôk',
  'ch8kun',
  'ahtôp',
  'kôkôty',
  'neetôp',
  'nukees',
]

if (NORMALIZATION) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(NORMALIZATION)))
}