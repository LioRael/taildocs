import { Search } from "lucide-react"
import Link from "next/link"

import { FooterMeta, FooterSitemap } from "@/components/layout/footer"
import { PatternBorder } from "@/components/layout/pattern-border"

export default function HomePage() {
  return (
    <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
      <PatternBorder className="col-start-1 row-span-full row-start-1 hidden md:block" />
      <div className="grid gap-24 pb-24 text-gray-950 sm:gap-40 md:pb-40 dark:text-white">
        <div>
          <div className="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25">
            <span className="hidden max-sm:inline">text-4xl </span>
            <span className="hidden sm:max-md:inline">text-5xl </span>
            <span className="hidden lg:max-xl:inline">text-6xl </span>
            <span className="hidden xl:inline">text-8xl </span>
            <span className="inline dark:hidden">text-gray-950 </span>
            <span className="hidden dark:inline">text-white </span>
            tracking-tighter
            <span className="max-sm:hidden"> text-balance</span>
          </div>
          <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
              Rapidly build modern documentation sites with Next.js.
            </h1>
          </div>
          <div
            aria-hidden="true"
            className="flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25"
          >
            text-lg <span className="inline dark:hidden">text-gray-950</span>
            <span className="hidden dark:inline">text-white</span> font-medium
          </div>
          <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
              A documentation framework designed for developers, featuring{" "}
              <span className="font-mono text-[1.0625rem] text-primary-500 dark:text-primary-400">
                MDX support
              </span>
              ,{" "}
              <span className="font-mono text-[1.0625rem] text-primary-500 dark:text-primary-400">
                code highlighting
              </span>
              ,{" "}
              <span className="font-mono text-[1.0625rem] text-primary-500 dark:text-primary-400">
                TOC
              </span>{" "}
              and{" "}
              <span className="font-mono text-[1.0625rem] text-primary-500 dark:text-primary-400">
                dark mode
              </span>{" "}
              to help you build beautiful and functional technical documentation
              sites quickly.
            </p>
          </div>
          <div className="mt-10 px-4 sm:hidden relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <a
              className="z-1 w-full text-center inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
              href="docs/installation"
            >
              Get started
            </a>
          </div>
          <div className="mt-4 sm:mt-10 sm:px-2 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <div className="flex gap-4 max-sm:px-4">
              <Link
                className="z-1 max-sm:hidden inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                href="docs/getting-started"
              >
                Get started
              </Link>
              <button
                type="button"
                className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-80 dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15"
              >
                <Search className="-ml-0.5 size-4 text-gray-600 dark:text-gray-500" />
                Quick search
                <kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&amp;]:block">
                  <span className="opacity-60">⌘</span>K
                </kbd>
                <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&amp;]:block dark:text-gray-400">
                  <span className="opacity-60">Ctrl</span>&nbsp;K
                </kbd>
              </button>
            </div>
          </div>
          <div className="mt-24 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-gray-950/5 p-2 lg:col-span-2 lg:-mx-px dark:bg-white/10">
                <div className="rounded-xl bg-gray-950">
                  <div className="rounded-xl p-1 text-sm scheme-dark dark:inset-ring dark:inset-ring-white/10 h-96"></div>
                </div>
              </div>
              <div className="relative border-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 max-lg:h-66 max-lg:border-t lg:border-l dark:[--pattern-fg:var(--color-white)]/10"></div>
            </div>
          </div>
        </div>
      </div>
      <PatternBorder className="row-span-full row-start-1 hidden md:col-start-3 md:block" />
      <div className="col-start-1 row-start-3 md:col-start-2 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
        <FooterSitemap className="*:first:border-l-0 *:last:border-r-0" />
      </div>
      <div className="col-start-1 row-start-5 grid md:col-start-2">
        <FooterMeta className="sm:gap-8 px-4 md:px-6 lg:px-8" />
      </div>
    </div>
  )
}
