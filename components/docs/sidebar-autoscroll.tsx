"use client"

import { useLayoutEffect, useRef } from "react"

export function DocsSidebarAutoscroll({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const activeLink = element.querySelector(
      "[data-autoscroll] [aria-current=page]"
    )
    if (!activeLink) return

    if ("scrollIntoViewIfNeeded" in activeLink) {
      ;(activeLink as any).scrollIntoViewIfNeeded()
    } else {
      activeLink.scrollIntoView()
    }
  }, [])

  return <div ref={ref}>{children}</div>
}
