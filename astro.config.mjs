import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  site: process.env.KIRI_SITE_URL?.trim() || undefined,
  integrations: [react()],
})
