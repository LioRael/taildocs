import Link from "next/link"

import { CornerDecorationButton } from "../ui/corner-decoration-button"

import type { Group } from "./wrapper"

export function Sidebar({ groups }: { groups: Array<Group> }) {
  return (
    <SidebarWrapper>
      <SidebarLinks>
        <SidebarLink href="/docs">
          <DocumentIcon />
          Documentation
        </SidebarLink>
        <SidebarLink href="#">
          <ComponentsIcon />
          Components
        </SidebarLink>
        <SidebarLink href="#">
          <TemplatesIcon />
          Templates
        </SidebarLink>
        <SidebarLink href="#">
          <UIKitIcon />
          UI Kit
        </SidebarLink>
        <SidebarLink href="#">
          <PlayIcon />
          Playground
        </SidebarLink>
        <SidebarLink href="#">
          <CourseIcon />
          Course
          <CornerDecorationButton className="font-mono text-[0.625rem]/[1.125rem] font-medium tracking-widest">
            New
          </CornerDecorationButton>
        </SidebarLink>
      </SidebarLinks>
      {groups.map((group) => (
        <SidebarItemGroup key={group.label}>
          <SidebarItemGroupLabel>{group.label}</SidebarItemGroupLabel>
          <SidebarItemGroupList>
            {group.items.map((item) => (
              <SidebarItemGroupItem key={item.href} href={item.href}>
                {item.label}
              </SidebarItemGroupItem>
            ))}
          </SidebarItemGroupList>
        </SidebarItemGroup>
      ))}
    </SidebarWrapper>
  )
}

export function SidebarWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="relative col-start-1 row-span-full row-start-1 max-lg:hidden">
      <div className="absolute inset-0">
        <div className="sticky top-14.25 bottom-0 left-0 h-full max-h-[calc(100dvh-(var(--spacing)*14.25))] w-2xs overflow-y-auto p-6">
          <div>
            <nav className="flex flex-col gap-8">{children}</nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SidebarLinks({ children }: React.PropsWithChildren) {
  return <ul className="flex flex-col gap-2">{children}</ul>
}

export function SidebarLink({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <li>
      <Link
        className="group inline-flex items-center gap-3 text-base/8 text-gray-600 **:transition-colors hover:text-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 hover:**:data-highlight:fill-gray-300 aria-[current]:**:data-highlight:fill-gray-300 **:data-outline:stroke-gray-400 hover:**:data-outline:stroke-gray-950 aria-[current]:**:data-outline:stroke-gray-950 sm:text-sm/7 dark:text-gray-300 dark:hover:text-white dark:aria-[current]:text-white dark:hover:**:data-highlight:fill-gray-600 dark:aria-[current]:**:data-highlight:fill-gray-600 dark:**:data-outline:stroke-gray-500 dark:hover:**:data-outline:stroke-white dark:aria-[current]:**:data-outline:stroke-white **:[svg]:first:size-5 **:[svg]:first:sm:size-4"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export function SidebarItemGroup({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col gap-3">{children}</div>
}

export function SidebarItemGroupLabel({ children }: React.PropsWithChildren) {
  return (
    <h3 className="font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6 dark:text-gray-400">
      {children}
    </h3>
  )
}

export function SidebarItemGroupList({ children }: React.PropsWithChildren) {
  return (
    <ul className="flex flex-col gap-2 border-l border-[color-mix(in_oklab,_var(--color-gray-950),white_90%)] dark:border-[color-mix(in_oklab,_var(--color-gray-950),white_20%)]">
      {children}
    </ul>
  )
}

export function SidebarItemGroupItem({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <li className="-ml-px flex flex-col items-start gap-2">
      <Link
        type="button"
        href={href}
        className="inline-block border-l border-transparent pl-5 text-base/8 text-gray-600 transition-colors hover:border-gray-950/25 hover:text-gray-950 aria-[current]:border-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 sm:pl-4 sm:text-sm/6 dark:text-gray-300 dark:hover:border-white/25 dark:hover:text-white dark:aria-[current]:border-white dark:aria-[current]:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        data-highlight="true"
        d="M3.5 1.5C2.4264 1.5 1.40926 1.74169 0.5 2.17363V13.1736C1.40926 12.7417 2.4264 12.5 3.5 12.5C5.21352 12.5 6.78323 13.1157 8 14.1379V3.13789C6.78323 2.11568 5.21352 1.5 3.5 1.5Z"
      ></path>
      <path
        data-outline="true"
        d="M8 14.1379C9.21677 13.1157 10.7865 12.5 12.5 12.5C13.5736 12.5 14.5907 12.7417 15.5 13.1736V2.17363C14.5907 1.74169 13.5736 1.5 12.5 1.5C10.7865 1.5 9.21677 2.11568 8 3.13789M8 14.1379C6.78323 13.1157 5.21352 12.5 3.5 12.5C2.4264 12.5 1.40926 12.7417 0.5 13.1736V2.17363C1.40926 1.74169 2.4264 1.5 3.5 1.5C5.21352 1.5 6.78323 2.11568 8 3.13789M8 14.1379V3.13789"
      ></path>
    </svg>
  )
}

function ComponentsIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        data-outline="true"
        d="m11 8 .5.25L15 10.5 8 15l-7-4.5 3.5-2.25L5 8"
      ></path>
      <path data-highlight="true" d="M8 1 1 5.5 8 10l7-4.5L8 1Z"></path>
      <path data-outline="true" d="M8 1 1 5.5 8 10l7-4.5L8 1Z"></path>
    </svg>
  )
}

function UIKitIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        data-highlight="true"
        d="M15.5 11.5V4.5L8 8.5L0.5 4.5V11.5L8 15.5L15.5 11.5Z"
      ></path>
      <path
        data-outline="true"
        d="M0.5 4.5V11.5L8 15.5M0.5 4.5L8 0.5L15.5 4.5M0.5 4.5L8 8.5M15.5 4.5V11.5L8 15.5M15.5 4.5L8 8.5M8 15.5V8.5"
      ></path>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <rect
        data-highlight="true"
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        rx="2"
      ></rect>
      <rect
        data-outline="true"
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        rx="2"
      ></rect>
      <path
        data-outline="true"
        d="M6.5 6L4.5 8L6.5 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        data-outline="true"
        d="M9.5 6L11.5 8L9.5 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

function TemplatesIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        data-highlight="true"
        d="M12.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V4.5V12.5C1.5 13.6046 2.39543 14.5 3.5 14.5H5.5V4.5H14.5V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5Z"
      ></path>
      <path
        data-outline="true"
        d="M5.5 4.5H14.5M5.5 4.5H1.5M5.5 4.5V14.5M14.5 4.5V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V4.5M14.5 4.5V12.5C14.5 13.6046 13.6046 14.5 12.5 14.5H5.5M1.5 4.5V12.5C1.5 13.6046 2.39543 14.5 3.5 14.5H5.5"
      ></path>
    </svg>
  )
}

function CourseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path data-highlight="true" d="M8 2 1 6l7 4 7-4-7-4Z"></path>
      <path
        data-outline="true"
        strokeLinecap="round"
        d="M3.5 7.429V13A7.466 7.466 0 0 0 8 14.5a7.466 7.466 0 0 0 4.5-1.5V7.43m-9 0L8 10l4.5-2.571m-9 0-2-1.143m11 1.143L15 6 8 2 1 6l.5.286m0 5.214V6.286"
      ></path>
    </svg>
  )
}
