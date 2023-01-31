// eslint-disable-next-line import/no-extraneous-dependencies, quotes, semi
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies, quotes, semi
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
// eslint-disable-next-line semi
})
