import { Sidebar } from "@/components/layout/sidebar"
import { Wrapper } from "@/components/layout/wrapper"
import { source } from "@/lib/source"

import { convertTreeToGroups } from "./utils"

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Wrapper
      sidebar={<Sidebar groups={convertTreeToGroups(source.pageTree)} />}
    >
      {children}
    </Wrapper>
  )
}
