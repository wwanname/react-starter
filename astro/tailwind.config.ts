import starlightPlugin from '@astrojs/starlight-tailwind';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {}
    },
    plugins: [starlightPlugin()],
}