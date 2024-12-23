import type { Config } from 'tailwindcss'
// import fluid, { extract } from 'fluid-tailwind'  -> Wait fluid-tailwind update to Tailwind 4.0

export default {
  content: {
    files: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      '../../packages/ui/*.{js,ts,jsx,tsx}'
    ],
    // extract,
  },
  theme: {
    container: {},
    screens: {},
    fontSize: {},
    extend: {
      animation: {
        infinite: 'xPercent 4s linear infinite'
      },
      keyframes: {
        xPercent: {
          to: {
            transform: 'translateX(-100%)'
          }
        }
      }
    }
  },
  plugins: [
    // fluid({ checkSC144: true })
  ]
} satisfies Config
