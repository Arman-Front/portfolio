// Скриншоты конвертируются в WebP на этапе сборки (vite-imagetools):
// превью для галереи и полноразмерная версия для лайтбокса.
// Исходники в src/assets/img остаются нетронутыми.
const thumbs = import.meta.glob('../assets/img/*.{jpg,png}', {
  eager: true,
  import: 'default',
  query: '?h=400&format=webp&quality=80&withoutEnlargement&as=metadata',
})

const fulls = import.meta.glob('../assets/img/*.{jpg,png}', {
  eager: true,
  import: 'default',
  query: '?w=1920&format=webp&quality=82&withoutEnlargement',
})

const byNaturalOrder = (a, b) => a.localeCompare(b, undefined, { numeric: true })

// gallery('wola', 'Скриншот WOLA') → все wola-N.{jpg,png} по порядку номеров
export function gallery(prefix, alt) {
  const pattern = new RegExp(`/${prefix}-\\d+\\.(jpg|png)$`)
  return Object.keys(thumbs)
    .filter((path) => pattern.test(path))
    .sort(byNaturalOrder)
    .map((path) => ({
      src: thumbs[path].src,
      width: thumbs[path].width,
      height: thumbs[path].height,
      full: fulls[path],
      alt,
    }))
}
