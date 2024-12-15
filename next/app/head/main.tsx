// Better SEO, better UX
// Wait next-seo update to React-19
import { NextSeo } from 'next-seo'

export function MainHeader() {
  return (
    <NextSeo
      title="React | Next"
      description="React | Next"
      openGraph={{
        url: 'https://www.localhost:3000/',
        title: 'Create Next App',
        description: 'React | Next',
        images: [
          {
            url: 'https://www.localhost:3000/images/og-homepage.jpg',
            alt: "Homepage's image",
          },
        ],
      }}
    />
  )
}