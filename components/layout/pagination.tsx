"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { useGroups } from "../docs/groups-provider"

import type { Page } from "fumadocs-core/source"

export function Pagination({ page }: { page: Page }) {
  const groups = useGroups()

  const allPages = groups.flatMap((group) => group.items)
  const currentIndex = allPages.findIndex((item) => item.href === page.url)

  const previousPage = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const nextPage =
    currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  return (
    <footer className="mt-16 text-sm leading-6">
      <div className="flex items-center justify-between gap-2 text-gray-700 dark:text-gray-200">
        {previousPage && (
          <a
            href={previousPage.href || "#"}
            className="group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"
          >
            <ChevronLeftIcon className="size-4" />
            <span>{previousPage.label}</span>
          </a>
        )}
        {nextPage && (
          <a
            href={nextPage.href || "#"}
            className="ml-auto group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"
          >
            <span>{nextPage.label}</span>
            <ChevronRightIcon className="size-4" />
          </a>
        )}
      </div>
    </footer>
  )
}
