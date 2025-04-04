import { Sidebar } from "@/components/layout/sidebar"
import { Wrapper } from "@/components/layout/wrapper"
import { source } from "@/lib/source"

import type { Group } from "@/components/layout/wrapper"
import type { PageTree } from "fumadocs-core/server"

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Wrapper
      sidebar={<Sidebar groups={convertTreeToGroups(source.pageTree)} />}
    >
      {children}
    </Wrapper>
  )
}

export function convertTreeToGroups(tree: PageTree.Root) {
  const groups: Array<Group> = []

  const processNode = (node: PageTree.Node | PageTree.Root) => {
    if ("type" in node && node.type === "folder") {
      const group: Group = {
        label: String(node.name || ""),
        items: [] as Array<{ label: string; href: string; slogan?: string }>,
      }

      // 处理文件夹的index页面
      if ("index" in node && node.index) {
        group.items.push({
          label: String(node.index.name || ""),
          href: String(node.index.url || ""),
        })
      }

      // 处理文件夹的子页面
      if ("children" in node && Array.isArray(node.children)) {
        node.children.forEach((child) => {
          if ("type" in child && child.type === "page") {
            group.items.push({
              label: String(child.name || ""),
              href: String(child.url || ""),
            })
          } else {
            processNode(child)
          }
        })
      }

      if (group.items.length > 0) {
        groups.push(group)
      }
    } else if ("children" in node && Array.isArray(node.children)) {
      node.children.forEach((child) => {
        processNode(child)
      })
    }
  }

  processNode(tree)
  return groups
}
