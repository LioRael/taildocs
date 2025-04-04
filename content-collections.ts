import { defineCollection, defineConfig } from "@content-collections/core"
import {
  createDocSchema,
  createMetaSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration"
import { rehypeCode } from "fumadocs-core/mdx-plugins"
import { z } from "zod"

import theme from "@/components/syntax-highlighter/theme.json"

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
  transform: (document, context) =>
    transformMDX(document, context, {
      rehypePlugins: [
        [
          rehypeCode,
          {
            themes: {
              light: theme,
              dark: theme,
            },
          },
        ],
      ],
    }),
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
