import { cn } from "@/lib/cn"

import { ThemeToggle } from "../theme-toggle"
import { Divider } from "./divider"
import { Footer } from "./footer"
import { Header } from "./header"
import { PatternBorder } from "./pattern-border"
import { Toc } from "./toc"

import type { TableOfContents } from "fumadocs-core/server"

export function Wrapper({
  children,
  sidebar,
}: React.PropsWithChildren<{
  sidebar?: React.ReactNode
}>) {
  return (
    <div className="isolate">
      <div>
        <Header />
        <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] pt-26.25 lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] lg:pt-14.25 xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]">
          {sidebar}
          <PatternBorder colStart={2} />
          {children}
          <PatternBorder colStart={4} />

          <Divider rowStart={2} />
          <div className="row-start-3 lg:col-start-3">
            <Footer />
          </div>
          <Divider rowStart={4} />
          <div className="row-start-5 grid lg:col-start-3">
            <div className="px-2 pt-10 pb-24">
              <div className="mx-auto flex h-[34px] w-full max-w-2xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:max-w-5xl">
                <ThemeToggle />
                <div className="ml-auto flex flex-col gap-4 text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400">
                  <span>Copyright ©&nbsp;2025&nbsp;Taildocs Labs Inc.</span>
                  <span className="max-sm:hidden">·</span>
                  <a className="hover:underline" href="/brand">
                    Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export type Group = {
  label: string
  items: Array<{ label: string; href: string }>
}
