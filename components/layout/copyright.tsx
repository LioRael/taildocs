import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/cn"

export function Copyright({ className }: { className?: string }) {
  return (
    <div className="px-2 pt-10 pb-24">
      <div
        className={cn(
          "mx-auto flex h-[34px] w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          className
        )}
      >
        <ThemeToggle />
        <div className="sm:ml-auto flex flex-col gap-4 text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400">
          <span>Copyright ©&nbsp;2025&nbsp;Taildocs Labs Inc.</span>
          <span className="max-sm:hidden">·</span>
          <a className="hover:underline" href="/brand">
            Policy
          </a>
        </div>
      </div>
    </div>
  )
}
