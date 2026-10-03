import docrooms1 from '../assets/img/docrooms-1.jpg'
import docrooms2 from '../assets/img/docrooms-2.jpg'
import docrooms3 from '../assets/img/docrooms-3.jpg'
import docrooms4 from '../assets/img/docrooms-4.jpg'
import docrooms5 from '../assets/img/docrooms-5.jpg'
import docrooms6 from '../assets/img/docrooms-6.jpg'

import localit1 from '../assets/img/localit-io-1.jpg'
import localit2 from '../assets/img/localit-io-2.jpg'
import localit3 from '../assets/img/localit-io-3.jpg'
import localit4 from '../assets/img/localit-io-4.jpg'
import localit5 from '../assets/img/localit-io-5.jpg'
import localit6 from '../assets/img/localit-io-6.jpg'

import wola1 from '../assets/img/wola-1.png'
import wola2 from '../assets/img/wola-2.png'
import wola3 from '../assets/img/wola-3.png'
import wola4 from '../assets/img/wola-4.png'
import wola5 from '../assets/img/wola-5.jpg'
import wola6 from '../assets/img/wola-6.jpg'
import wola7 from '../assets/img/wola-7.jpg'
import wola8 from '../assets/img/wola-8.jpg'

export const experience = [
  {
    hash: '#001',
    title: 'Docrooms',
    meta: 'SaaS · медицинский сервис · ~1 год',
    link: { href: 'https://docrooms.ru', label: 'docrooms.ru' },
    desc: 'Ответственность за frontend-разработку и архитектуру продукта на Nuxt 4.',
    stack: 'Nuxt 4 · Vue 3 · TypeScript · Pinia · LiveKit · CloudPayments',
    media: [docrooms1, docrooms2, docrooms3, docrooms4, docrooms5, docrooms6].map((src) => ({
      src,
      alt: 'Скриншот Docrooms',
    })),
  },
  {
    hash: '#002',
    title: 'Localit.io',
    meta: 'SaaS / TMS · платформа локализации · ~2 года',
    link: { href: 'https://localit.io', label: 'localit.io' },
    desc: 'Платформа для локализации веб-сайтов и приложений. Разработка ключевых пользовательских сценариев продукта.',
    stack: 'Nuxt 3 · Vue 3 · TypeScript · Pinia · Centrifuge.js · CloudPayments',
    media: [localit1, localit2, localit3, localit4, localit5, localit6].map((src) => ({
      src,
      alt: 'Скриншот Localit.io',
    })),
  },
  {
    hash: '#003',
    title: 'WOLA',
    meta: 'SaaS · языковое сообщество · ~4 года',
    link: { href: 'https://wola.io', label: 'wola.io' },
    desc: 'Сложная бизнес-логика с большим количеством взаимосвязанных сущностей и пользовательских сценариев. Реализация real-time функциональности и клиентского чата.',
    stack: 'Vue 2 · Vuex · Centrifuge.js · WebSocket · CloudPayments · Stripe · PWA',
    media: [wola1, wola2, wola3, wola4, wola5, wola6, wola7, wola8].map((src) => ({
      src,
      alt: 'Скриншот WOLA',
    })),
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
      'Заказная разработка · для <a href="https://www.youtube.com/c/hardcorefightingchampionship">Hardcore Fighting Championship</a>',
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
