import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    projekty: defineCollection({
      type: 'page',
      source: 'projekty/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        created: z.date()
      })
    }),
    grants: defineCollection({
      type: 'page',
      source: 'granty-na-web/*.md',
      schema: z.object({
        description: z.string().optional(),
        created: z.date().optional()
      })
    })
  }
})
