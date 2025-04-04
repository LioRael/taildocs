import { defineCollection, defineConfig } from "@content-collections/core"
import {
  createDocSchema,
  createMetaSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration"
import { z } from "zod"

const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: () => {
    const baseSchema = createDocSchema(z)
    return {
      ...baseSchema,
      slogan: z.string().optional(),
    }
  },
  transform: transformMDX,
})

const metas = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
})

export default defineConfig({
  collections: [docs, metas],
})
