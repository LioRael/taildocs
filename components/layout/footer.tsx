import { cn } from "@/lib/cn"

export function Footer({ className }: { className?: string }) {
  return (
    <footer className="bg-white text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white">
      <div className={cn("mx-auto flex gap-4 p-4 md:hidden", className)}>
        <MobileColumn>
          <LearnGroup isMobile />
          <ResourcesGroup isMobile />
        </MobileColumn>
        <MobileColumn>
          <PlusGroup isMobile />
          <CommunityGroup isMobile />
        </MobileColumn>
      </div>
      <div
        className={cn(
          "mx-auto hidden w-full grid-cols-4 justify-between gap-y-0 md:grid md:grid-cols-4 md:gap-6 md:gap-x-4 lg:gap-8",
          className
        )}
      >
        <LearnGroup />
        <PlusGroup />
        <ResourcesGroup />
        <CommunityGroup />
      </div>
    </footer>
  )
}

function Column({
  isLast = false,
  isMobile = false,
  children,
}: React.PropsWithChildren<{ isLast?: boolean; isMobile?: boolean }>) {
  return (
    <div
      className={cn(
        !isMobile &&
          "border-x border-gray-950/5 py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-white/10",
        !isMobile && !isLast && "border-b sm:border-b-0"
      )}
    >
      {children}
    </div>
  )
}

function ColumnTitle({ children }: React.PropsWithChildren) {
  return <h3 className="mb-2 font-semibold">{children}</h3>
}

function ColumnItemList({ children }: React.PropsWithChildren) {
  return <ul className="mt-4 grid gap-4">{children}</ul>
}

function ColumnItem({ children }: React.PropsWithChildren) {
  return <li>{children}</li>
}

function MobileColumn({ children }: React.PropsWithChildren) {
  return <div className="flex flex-1 flex-col gap-10">{children}</div>
}

function LearnGroup({ isMobile }: { isMobile?: boolean }) {
  return (
    <Column isMobile={isMobile}>
      <ColumnTitle>Learn</ColumnTitle>
      <ColumnItemList>
        <ColumnItem>
          <a href="/">Documentation</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Showcase</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Blog</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Playground</a>
        </ColumnItem>
      </ColumnItemList>
    </Column>
  )
}

function PlusGroup({ isMobile }: { isMobile?: boolean }) {
  return (
    <Column isMobile={isMobile}>
      <ColumnTitle>Tailwind Plus</ColumnTitle>
      <ColumnItemList>
        <ColumnItem>
          <a href="/">UI Blocks</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Templates</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">UI Kit</a>
        </ColumnItem>
      </ColumnItemList>
    </Column>
  )
}

function ResourcesGroup({ isMobile }: { isMobile?: boolean }) {
  return (
    <Column isMobile={isMobile}>
      <ColumnTitle>Resources</ColumnTitle>
      <ColumnItemList>
        <ColumnItem>
          <a href="/">Refactoring UI</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Headless UI</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Heroicons</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Hero Patterns</a>
        </ColumnItem>
      </ColumnItemList>
    </Column>
  )
}

function CommunityGroup({ isMobile }: { isMobile?: boolean }) {
  return (
    <Column isMobile={isMobile} isLast>
      <ColumnTitle>Community</ColumnTitle>
      <ColumnItemList>
        <ColumnItem>
          <a href="/">GitHub</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">Discord</a>
        </ColumnItem>
        <ColumnItem>
          <a href="/">X</a>
        </ColumnItem>
      </ColumnItemList>
    </Column>
  )
}
