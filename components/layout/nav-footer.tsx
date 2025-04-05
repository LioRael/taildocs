import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

interface NavItem {
  label: string
  href: string
  slogan?: string
}

interface NavFooterProps {
  previousPage: NavItem | null
  nextPage: NavItem | null
}

export function NavFooter({ previousPage, nextPage }: NavFooterProps) {
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
