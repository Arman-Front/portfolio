// Генерирует public/og-image.png (1200×630) — превью ссылки в Telegram, HH, соцсетях.
// Запуск: npm run og-image
import sharp from 'sharp'

const W = 1200
const H = 630
const mono = "'JetBrains Mono', Consolas, 'Courier New', monospace"

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0a0e14"/>
  <rect x="0" y="0" width="${W}" height="64" fill="#10151f"/>
  <rect x="0" y="63" width="${W}" height="1" fill="#1e2836"/>
  <text x="48" y="41" font-family="${mono}" font-size="22" fill="#e0a750">●<tspan fill="#eef2f7" dx="10">about.md</tspan></text>
  <rect x="48" y="62" width="150" height="2" fill="#5fd9a0"/>

  <text x="96" y="230" font-family="${mono}" font-size="28" fill="#5f6b7a">~/portfolio $ whoami</text>
  <text x="96" y="320" font-family="${mono}" font-size="72" font-weight="700" fill="#eef2f7">Арман Хачатрян</text>
  <text x="96" y="392" font-family="${mono}" font-size="34" fill="#5fd9a0">Frontend-разработчик — Vue.js / Nuxt.js</text>

  <text x="96" y="530" font-family="${mono}" font-size="24" fill="#6ea8fe">holy-howard.ru</text>
  <g font-family="${mono}" font-size="22" fill="#3a4452" text-anchor="end">
    <text x="64" y="230">1</text><text x="64" y="320">2</text><text x="64" y="392">3</text><text x="64" y="530">4</text>
  </g>
</svg>`

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-image.png')
console.log('public/og-image.png готов')
