import { NORMALIZATION } from './settings'

export const WORDS = [
  'pawâw',
  'wunôk',
  'mônâk',
  'tyâqas',
  'kunâm',
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
  'chupap',
  'nutup',
  'nut8n',
  'neesôk',
  'kunam',
  'keesuq',
  'keenôw',
  't8hkee',
  'm8hchee',
  'mutây',
  'qushkee',
  'n8tam',
  'ak8ôk',
  'n8taw',
  'peetaw',
  'ahtaw',
  'musun',
  'sôtyum',
  'nôkan',
  'weekan',
  'qeeqôn',
  'pôqây',
  'qunây',
  'sôqây',
  'm8sây',
  'keenây',
  'achâôk',
  'âhânu ',
  'anâhs',
  'meeqan',
  'manut',
  'kum8t',
  'kun8n',
  'kunun',
  'kupat',
  'machut',
  'mâhchee',
  'masôn',
  'mônâee',
  'môtyâq',
  'utay8',
  'môwun',
  'mukay',
  'nahak',
  'nahun',
  'namâq',
  'nuqut',
  'nanwee',
  'nashpee',
  'nôwat',
]

if (NORMALIZATION) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(NORMALIZATION)))
}
