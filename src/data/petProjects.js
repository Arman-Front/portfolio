import { gallery } from './media.js'

export const petProjects = [
  {
    hash: '#001',
    title: 'Сервис разделения счёта',
    meta: 'pet-проект · разделение счёта в компании',
    link: { href: 'https://check-split.vercel.app/', label: 'check-split.vercel.app' },
    desc: 'Использует ИИ для распознавания позиций в чеке и составления списка для разделения счёта.',
    media: gallery('check-split', 'Скриншот сервиса разделения счёта'),
  },
  {
    hash: '#002',
    title: 'Ипотечный калькулятор',
    meta: 'pet-проект · расчёт ипотеки и кредита с досрочными погашениями · PWA',
    link: { href: 'https://calc-mortgage.vercel.app/', label: 'calc-mortgage.vercel.app' },
    desc: 'Специализированный онлайн-калькулятор кредитов и ипотеки, предназначенный для точного расчета параметров жилищных и потребительских займов.',
    media: gallery('raschet', 'Скриншот ипотечного калькулятора'),
  },
]
