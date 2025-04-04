import { cn } from "@/lib/cn"

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  rowStart?: number
}

export function Divider({ rowStart = 0, className, ...props }: DividerProps) {
  return (
    <div
      style={{ "--start": rowStart }}
      className={cn(
        "col-span-full col-start-2 row-start-(--start) h-px bg-gray-950/5 dark:bg-white/10",
        className
      )}
      {...props}
    />
  )
}
