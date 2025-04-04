"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SidebarItemGroupItem({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <li className="-ml-px flex flex-col items-start gap-2">
      <Link
        aria-current={isActive ? "page" : undefined}
        type="button"
        href={href}
        className="inline-block border-l border-transparent pl-5 text-base/8 text-gray-600 transition-colors hover:border-gray-950/25 hover:text-gray-950 aria-[current]:border-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 sm:pl-4 sm:text-sm/6 dark:text-gray-300 dark:hover:border-white/25 dark:hover:text-white dark:aria-[current]:border-white dark:aria-[current]:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export function SidebarLink({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)

  return (
    <li>
      <Link
        aria-current={isActive ? "page" : undefined}
        className="group inline-flex items-center gap-3 text-base/8 text-gray-600 **:transition-colors hover:text-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 hover:**:data-highlight:fill-gray-300 aria-[current]:**:data-highlight:fill-gray-300 **:data-outline:stroke-gray-400 hover:**:data-outline:stroke-gray-950 aria-[current]:**:data-outline:stroke-gray-950 sm:text-sm/7 dark:text-gray-300 dark:hover:text-white dark:aria-[current]:text-white dark:hover:**:data-highlight:fill-gray-600 dark:aria-[current]:**:data-highlight:fill-gray-600 dark:**:data-outline:stroke-gray-500 dark:hover:**:data-outline:stroke-white dark:aria-[current]:**:data-outline:stroke-white **:[svg]:first:size-5 **:[svg]:first:sm:size-4"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
