type MetaData = {
  title: string
  description: string
  openGraph: {
    title: string
    type: string
    image: {
      src: string
      alt: string
    }
  }

  twitter: string
  site: string
}

export const MetaData: MetaData = {
  title: 'PossaCode Community',
  description:
    "PossaCode is a community of developers who share their knowledge and experience. We are here to help each other. Join us and let's build something great together!",

  openGraph: {
    title: 'PossaCode Community',
    type: 'website',
    image: {
      src: 'og-image.jpg',
      alt: `PossaCode OG Image`,
    },
  },

  twitter: 'bryan_6243',
  site: 'https://possacode.netlify.app/',
}
