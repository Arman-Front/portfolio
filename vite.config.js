import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), imagetools()],
  // IPv4 явно: по умолчанию localhost резолвится в ::1, а IPv6-loopback
  // может быть недоступен (например, под VPN-туннелем) → ERR_CONNECTION_REFUSED
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
  // Шрифты не встраиваем в CSS как base64: браузер скачает только нужные по unicode-range
  build: {
    assetsInlineLimit: (file) => (/\.(woff2?|ttf)$/.test(file) ? false : undefined),
  },
})
