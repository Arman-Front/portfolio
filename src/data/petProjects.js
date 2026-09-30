import checkSplit1 from '../assets/img/check-split-1.jpg'
import checkSplit2 from '../assets/img/check-split-2.jpg'
import checkSplit3 from '../assets/img/check-split-3.jpg'
import checkSplit4 from '../assets/img/check-split-4.jpg'
import raschet1 from '../assets/img/raschet-1.png'
import raschet2 from '../assets/img/raschet-2.png'
import raschet3 from '../assets/img/raschet-3.jpg'

export const petProjects = [
  {
    hash: '#001',
    title: 'Сервис разделения счёта',
    meta: 'pet-проект · разделение счёта в компании',
    link: { href: 'https://check-split.vercel.app/', label: 'check-split.vercel.app' },
    desc: 'Использует ИИ для распознавания позиций в чеке и составления списка для разделения счёта.',
    media: [checkSplit1, checkSplit2, checkSplit3, checkSplit4].map((src) => ({
      src,
      alt: 'Скриншот сервиса разделения счёта',
    })),
  },
  {
    hash: '#002',
    title: 'Ипотечный калькулятор',
    meta: 'pet-проект · расчёт ипотеки и кредита с досрочными погашениями · PWA',
    link: { href: 'https://calc-mortgage.vercel.app/', label: 'calc-mortgage.vercel.app' },
    desc: 'Специализированный онлайн-калькулятор кредитов и ипотеки, предназначенный для точного расчета параметров жилищных и потребительских займов.',
    media: [raschet1, raschet2, raschet3].map((src) => ({
      src,
      alt: 'Скриншот сервиса разделения счёта',
    })),
  },
]
