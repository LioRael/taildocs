import { createMDXSource } from "@fumadocs/content-collections"
import { allDocs, allMetas } from "content-collections"
import { loader } from "fumadocs-core/source"

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(allDocs, allMetas),
  pageTree: {
    attachFile(node, file) {
      if (file?.data.data["slogan" as keyof typeof file.data.data]) {
        node.name = file.data.data[
          "slogan" as keyof typeof file.data.data
        ] as string
      }

      return node
    },
  },
})
