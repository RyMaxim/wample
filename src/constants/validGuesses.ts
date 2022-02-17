import { NORMALIZATION } from './settings'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(NORMALIZATION))
  )
}