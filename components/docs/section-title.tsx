"use client"

import { useGroups } from "./groups-provider"

export function SectionTitle({
  url,
  slogan,
}: {
  url: string
  slogan?: string
}) {
  const groups = useGroups()
  const group = groups.find((g) => g.items.some((item) => item.href === url))

  return (
    <p
      className="flex items-center gap-2 font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
      data-section="true"
    >
      {slogan ?? group?.label}
    </p>
  )
}
