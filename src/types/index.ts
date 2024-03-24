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
