"use client"

import { Tabs as BaseTabs } from "@base-ui-components/react"
import React, { useState } from "react"

import { cn } from "@/lib/cn"

import type { ReactElement, ReactNode } from "react"

type TabsProps = React.ComponentProps<typeof BaseTabs.Root> & {
  items: Array<string>
}

type TabProps = {
  children: ReactNode
  value?: string
}

export function Tabs({ children, className, items, ...props }: TabsProps) {
  const childrenArray = React.Children.toArray(children)

  const panels = childrenArray.map((child, index) => {
    if (React.isValidElement(child)) {
      const reactChild = child as ReactElement<any>
      const tabValue = reactChild.props.value || items[index]

      return (
        <BaseTabs.Panel key={tabValue} value={tabValue}>
          {reactChild.props.children}
        </BaseTabs.Panel>
      )
    }
    return null
  })

  return (
    <BaseTabs.Root defaultValue={items[0]} {...props}>
      <BaseTabs.List
        render={
          <div className="-mx-4 mb-6 flex sm:-mx-6">
            <div className="min-w-full max-w-full overflow-auto flex-none px-4 sm:px-6">
              <div className="mb-px flex gap-x-6 border-b border-gray-950/5 whitespace-nowrap dark:border-white/10 not-prose">
                {items.map((item) => (
                  <BaseTabs.Tab
                    key={item}
                    value={item}
                    className={(state) =>
                      cn(
                        "-mb-px flex border-b pb-2 text-sm/7 font-medium cursor-pointer transition-colors",
                        state.selected
                          ? "border-current text-gray-950 dark:text-white"
                          : "border-transparent text-gray-700 hover:border-gray-950/25 dark:text-gray-200 dark:hover:border-white/25"
                      )
                    }
                  >
                    {item}
                  </BaseTabs.Tab>
                ))}
              </div>
            </div>
          </div>
        }
      />
      {panels}
    </BaseTabs.Root>
  )
}

export function Tab({ children, value }: TabProps) {
  // Tab组件是容器，但保留value属性以便在Tabs中使用
  return <>{children}</>
}
