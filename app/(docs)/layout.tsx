import { Wrapper } from "@/components/layout/wrapper"

export default function Layout({
  children,
  breadcrumb,
  ...props
}: React.PropsWithChildren<{
  breadcrumb: React.ReactNode
  params: Promise<{ slug?: Array<string> }>
}>) {
  return <Wrapper>{children}</Wrapper>
}
