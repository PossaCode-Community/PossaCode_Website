import { defineCollection, z } from 'astro:content'

export const collections = {
  blog: defineCollection({
    type: 'content',

    schema: ({ image }) =>
      z.object({
        title: z
          .string()
          .min(6, {
            message:
              'Please provide a very descriptif title at least 5 characters',
          })
          .max(100),
        description: z
          .string()
          .min(10, {
            message:
              'Please provide a very descriptif description at least 12 characters',
          })
          .max(170),
        hero_image: image().refine((image) => image.format === 'png' || 'jpg'),
        hero_alt: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
      }),
  }),
}
