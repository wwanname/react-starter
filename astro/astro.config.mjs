// @ts-check
import { defineConfig, sharpImageService } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import compressor from "astro-compressor"
import mdx from '@astrojs/mdx'
import starlight from '@astrojs/starlight'
import astroExpressiveCode from "astro-expressive-code"

// https://astro.build/config
export default defineConfig({
    // site: '',
    integrations: [sitemap(), react(), astroExpressiveCode(), mdx(),
    starlight({
      title: 'Docs with Tailwind',
      customCss: [
        './src/app.css',
      ],
    }),
    compressor({ gzip: true, brotli: false })
  ],
    image: {
      service: sharpImageService()
    },

    markdown: {}
  })
