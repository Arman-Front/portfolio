import { gallery } from './media.js'

export const experience = [
  {
    hash: '#001',
    title: 'Docrooms',
    meta: 'SaaS · медицинский сервис · ~1 год',
    link: { href: 'https://docrooms.ru', label: 'docrooms.ru' },
    desc: 'Ответственность за frontend-разработку и архитектуру продукта на Nuxt 4.',
    stack: 'Nuxt 4 · Vue 3 · TypeScript · Pinia · LiveKit · CloudPayments',
    media: gallery('docrooms', 'Скриншот Docrooms'),
  },
  {
    hash: '#002',
    title: 'Localit.io',
    meta: 'SaaS / TMS · платформа локализации · ~2 года',
    link: { href: 'https://localit.io', label: 'localit.io' },
    desc: 'Платформа для локализации веб-сайтов и приложений. Разработка ключевых пользовательских сценариев продукта.',
    stack: 'Nuxt 3 · Vue 3 · TypeScript · Pinia · Centrifuge.js · CloudPayments',
    media: gallery('localit-io', 'Скриншот Localit.io'),
  },
  {
    hash: '#003',
    title: 'WOLA',
    meta: 'SaaS · языковое сообщество · ~4 года',
    link: { href: 'https://wola.io/ru/about', label: 'wola.io' },
    desc: 'Сложная бизнес-логика с большим количеством взаимосвязанных сущностей и пользовательских сценариев. Реализация real-time функциональности и клиентского чата.',
    stack: 'Vue 2 · Vuex · Centrifuge.js · WebSocket · CloudPayments · Stripe · PWA',
    media: gallery('wola', 'Скриншот WOLA'),
  },
  {
    hash: '#004',
    title: 'Сервис помощи принятия клинических решений',
    badge: 'под NDA',
    meta: 'Заказная разработка · медицинский сервис · код-ревью',
    stack: 'Nuxt 3 · Vue 3 · Vuex',
    media: [{ nda: true }, { nda: true }],
  },
  {
    hash: '#005',
    title: 'NFC «Hippo»',
    badge: 'отключён',
    metaHtml:
      'Заказная разработка · для <a href="https://www.youtube.com/c/hardcorefightingchampionship" target="_blank" rel="noopener noreferrer">Hardcore Fighting Championship</a>',
    desc: 'Лендинг для продажи NFC-продукции компании.',
    stack: 'Vue 3',
    media: [{ nda: true }, { nda: true }],
  },
  {
    hash: '#006',
    title: 'Онлайн-игры',
    badge: 'под NDA',
    meta: 'Vigrom · вёрстка',
    desc: 'Вёрстка и доработки нескольких онлайн-игр.',
    stack: 'HTML/CSS · JavaScript · jQuery',
    media: [{ nda: true }, { nda: true }],
  },
]
