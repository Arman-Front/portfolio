// key — ключ в contact.json, name — подпись чипа в hero
export const contacts = [
  { key: 'telegram', name: 'Telegram', href: 'https://t.me/holy_howard', label: '@holy_howard' },
  { key: 'email', name: 'Email', href: 'mailto:armanauts@gmail.com', label: 'armanauts@gmail.com' },
  {
    key: 'whatsapp',
    name: 'WhatsApp',
    href: 'https://wa.me/79307997060',
    label: '+7 930 799-70-60',
  },
  {
    key: 'hh',
    name: 'hh.ru',
    href: 'https://hh.ru/resume/add09c47ff03fc91dd0039ed1f4b6468664565',
    label: 'hh.ru/resume/holy_howard',
  },
  {
    key: 'habr_career',
    name: 'Хабр Карьера',
    href: 'https://career.habr.com/holy_howard',
    label: 'career.habr.com/holy_howard',
  },
]

export const contactByKey = Object.fromEntries(contacts.map((c) => [c.key, c]))

// Внешние ссылки открываются в новой вкладке, mailto — как есть
export function linkAttrs(href) {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
