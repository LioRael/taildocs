import { cn } from "@/lib/cn"

import { Header } from "./header"
import { Toc } from "./toc"

import type { TableOfContents } from "fumadocs-core/server"

export function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="isolate">
      <div>
        <Header />
        {children}
      </div>
    </div>
  )
}

export function ProseWrapper({
  children,
  toc,
}: {
  children: React.ReactNode
  toc?: TableOfContents
}) {
  return (
    <div className="relative row-start-1 grid grid-cols-subgrid lg:col-start-3">
      <div
        className={cn(
          "mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl",
          {
            "isolate w-full": !toc,
            "xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]": toc,
          }
        )}
      >
        <div className="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">{children}</div>
        <div className="max-xl:hidden">
          <div className="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
            {toc && <Toc toc={toc} />}
            <div className="group relative"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type GroupItem = {
  label: string
  href: string
  items?: Array<GroupItem>
}

export type Group = {
  label: string
  items: Array<GroupItem>
}
