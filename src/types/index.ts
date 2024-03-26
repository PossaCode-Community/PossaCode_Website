export type FrontMatterProps = {
  data: {
    title: string
    description: string
    hero_image: ImageMetadata
    hero_alt: string
    pubDate: Date
    updatedDate?: Date
  }
}

export type MemeberType = {
  id: number
  first_name: string
  last_name: string
  role: string | null
  profession: string
  email: string
  image_url: string
  linkedin_url: string | null
  github_url: string
  createdAt: Date
}
