import { defineConfig } from 'vite'
import {fileURLToPath, URL} from "url";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      {find: '@app', replacement: fileURLToPath(new URL('./src/app', import.meta.url))},
      {find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url))},
      {find: '@widgets', replacement: fileURLToPath(new URL('./src/widgets', import.meta.url))},
      {find: '@features', replacement: fileURLToPath(new URL('./src/features', import.meta.url))},
      {find: '@entities', replacement: fileURLToPath(new URL('./src/entities', import.meta.url))},
      {find: '@shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url))},
    ],
  },
  plugins: [react()],
})
