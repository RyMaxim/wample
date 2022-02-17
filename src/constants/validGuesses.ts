import { NORMALIZATION } from './settings'

export const VALID_GUESSES = [
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
  VALID_GUESSES.forEach(
    (val, i) => (VALID_GUESSES[i] = val.normalize(NORMALIZATION))
  )
}
