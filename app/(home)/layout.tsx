import React from "react"

import { Wrapper } from "@/components/layout/wrapper"

export default function Layout({ children }: React.PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>
}
