import { webcrypto as crypto } from 'node:crypto'
globalThis.crypto = crypto

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
