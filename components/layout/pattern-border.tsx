import { cn } from "@/lib/cn"

interface PatternBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  colStart?: number
  rowStart?: number
  rowSpan?: number
}

export function PatternBorder({
  colStart = 2,
  rowStart = 1,
  rowSpan = 5,
  className,
  ...props
}: PatternBorderProps) {
  return (
    <div
      style={{
        "--col-start": colStart,
        "--row-start": rowStart,
        "--row-span": rowSpan,
      }}
      className={cn(
        "col-start-(--col-start) row-span-(--row-span) row-start-(--row-start) border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10",
        className
      )}
      {...props}
    />
  )
}
