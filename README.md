# Портфолио — Vue 3 + Vite SSG

Портфолио-сайт на Vue 3 (без Nuxt). На этапе сборки [vite-ssg](https://github.com/antfu-collective/vite-ssg) пререндерит страницу в статический HTML, потом клиент гидрирует её. Прод: https://holy-howard.ru/ (Vercel).

## Структура

- `src/App.vue` — сборка секций, мета-теги (title, Open Graph, canonical) и JSON-LD `Person` через `@unhead/vue`
- `src/components/` — компоненты (TabBar, ThemeToggle, секции, InfoGrid, MediaRow, ImageLightbox)
- `src/composables/` — тема, scroll-spy табов, состояние лайтбокса, `prefers-reduced-motion`
- `src/data/` — весь контент:
  - `experience.js`, `petProjects.js` — карточки опыта и pet-проектов
  - `contacts.js` — контакты (используются в hero, contact.json и футере)
  - `services.js` — услуги и интеграции
  - `site.js` — домен, title, description
  - `media.js` — галереи скриншотов
- `src/assets/img/` — исходные скриншоты проектов
- `src/style.css` — все стили
- `public/` — favicon, manifest, `robots.txt`, `sitemap.xml`, `og-image.png`
- `scripts/og-image.mjs` — генерация OG-картинки

## Скриншоты

Исходники лежат в `src/assets/img/` как есть (PNG/JPG). При сборке [vite-imagetools](https://github.com/JonasKruckenberg/imagetools) делает из каждого:

- превью для галереи: WebP, высота 400px;
- полноразмерную версию для лайтбокса: WebP, ширина до 1920px.

Чтобы добавить скриншоты, положите файлы `<префикс>-1.png`, `<префикс>-2.jpg`, … и подключите их в данных через `gallery('<префикс>', 'alt-текст')`.

## Запуск

Нужен Node.js ≥ 22.12 (см. `.nvmrc`).

```bash
npm install
npm run dev           # локальный сервер разработки
npm run build         # SSG-сборка в dist/
npm run preview       # предпросмотр собранной версии
npm run lint          # ESLint
npm run format        # Prettier
npm run og-image      # перегенерировать public/og-image.png
```

При смене домена поправьте `src/data/site.js`, `public/robots.txt` и `public/sitemap.xml`.

## CI

`.github/workflows/ci.yml` на каждый push и PR запускает lint, проверку форматирования и сборку, затем Lighthouse CI по `dist/` (пороги в `lighthouserc.json`, отчёты сохраняются как артефакт).

## Возможности

- Светлая и тёмная тема. Выбор запоминается в `localStorage`, без выбора берётся системная тема. Тема выставляется до первой отрисовки, без вспышки.
- Scroll-spy для таббара с центрированием активного таба.
- Построчная нумерация в about.md (считается по реальным строкам текста через Range API).
- Галереи с fade-затенением краёв при скролле.
- Лайтбокс: свайпы, стрелки, точки пагинации, Esc, удержание фокуса и возврат фокуса после закрытия.
- Учёт `prefers-reduced-motion`.
- Шрифты Inter и JetBrains Mono хранятся локально (`@fontsource`), без запросов к Google Fonts.
