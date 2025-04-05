"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import { tv } from "tailwind-variants"

import type { TableOfContents, TOCItemType } from "fumadocs-core/server"
import type { ReactNode, RefObject } from "react"

// 监听元素变化的Hook
function useOnChange<T>(
  value: T,
  onChange: (newValue: T, oldValue: T | undefined) => void
) {
  const oldValueRef = useRef<T | undefined>(undefined)

  useEffect(() => {
    if (value !== oldValueRef.current) {
      onChange(value, oldValueRef.current)
      oldValueRef.current = value
    }
  }, [value, onChange])
}

// 用于观察锚点可见性的Hook
function useAnchorObserver(
  headings: Array<string>,
  single = true
): Array<string> {
  const [activeAnchors, setActiveAnchors] = useState<Array<string>>([])
  const activeAnchorsRef = useRef<Array<string>>([])

  // 同步ref和state
  useEffect(() => {
    activeAnchorsRef.current = activeAnchors
  }, [activeAnchors])

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || headings.length === 0) {
      return
    }

    const elements = headings
      .map((id) => id && document.getElementById(id))
      .filter(Boolean) as Array<HTMLElement>

    if (elements.length === 0) return

    // 页面滚动位置变化时的处理函数
    const handleScroll = () => {
      const scrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const isNearTop = scrollY < 200
      const isNearBottom = scrollY + windowHeight > documentHeight - 200

      // 没有激活的锚点时尝试基于滚动位置设置一个
      if (activeAnchorsRef.current.length === 0 && headings.length > 0) {
        if (isNearTop) {
          // 接近顶部时激活第一个锚点
          setActiveAnchors([headings[0]])
        } else if (isNearBottom) {
          // 接近底部时激活最后一个锚点
          setActiveAnchors([headings[headings.length - 1]])
        } else {
          // 在页面中间位置时，查找最接近可视区域的元素
          const middleOfViewport = scrollY + windowHeight / 2
          let closestElement = elements[0]
          let minDistance = Infinity

          elements.forEach((element) => {
            const rect = element.getBoundingClientRect()
            const elementMiddle = scrollY + rect.top + rect.height / 2
            const distance = Math.abs(elementMiddle - middleOfViewport)

            if (distance < minDistance) {
              closestElement = element
              minDistance = distance
            }
          })

          setActiveAnchors([closestElement.id])
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // 记录是否有任何标题正在交叉
        let hasVisibleHeading = false
        // 创建一个交叉中的标题ID数组
        const intersectingIds: Array<string> = []

        entries.forEach((entry) => {
          const id = entry.target.id

          if (entry.isIntersecting) {
            hasVisibleHeading = true
            intersectingIds.push(id)

            setActiveAnchors((anchors) => {
              if (single) {
                return [id]
              }

              if (!anchors.includes(id)) {
                return [...anchors, id]
              }

              return anchors
            })
          } else if (activeAnchorsRef.current.includes(id)) {
            setActiveAnchors((anchors) =>
              anchors.filter((anchor) => anchor !== id)
            )
          }
        })

        // 如果没有可见的标题，检查滚动位置
        if (!hasVisibleHeading) {
          handleScroll()
        }
      },
      {
        // 调整观察区域，使其更容易捕获元素
        rootMargin: "-5% 0px -80% 0px",
        threshold: [0, 0.1, 0.5, 1], // 多个阈值提高检测精度
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    // 添加滚动事件监听，但使用节流函数减少调用频率
    let scrollTimeout: NodeJS.Timeout | null = null
    const throttledScrollHandler = () => {
      if (scrollTimeout === null) {
        scrollTimeout = setTimeout(() => {
          handleScroll()
          scrollTimeout = null
        }, 100)
      }
    }

    window.addEventListener("scroll", throttledScrollHandler, { passive: true })

    // 初始检查
    setTimeout(handleScroll, 200)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", throttledScrollHandler)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [headings, single]) // 移除activeAnchors依赖，使用ref代替

  return activeAnchors
}

// 上下文对象
const ActiveAnchorContext = createContext<Array<string>>([])
const ScrollContext = createContext<RefObject<HTMLElement | null>>({
  current: null,
})

// 获取所有可见锚点的ID
function useActiveAnchors(): Array<string> {
  return useContext(ActiveAnchorContext)
}

interface AnchorProviderProps {
  toc: TableOfContents
  single?: boolean
  children?: ReactNode
}

interface ScrollProviderProps {
  containerRef: RefObject<HTMLElement | null>
  children?: ReactNode
}

function ScrollProvider({
  containerRef,
  children,
}: ScrollProviderProps): React.ReactElement {
  return (
    <ScrollContext.Provider value={containerRef}>
      {children}
    </ScrollContext.Provider>
  )
}

function AnchorProvider({
  toc,
  single = true,
  children,
}: AnchorProviderProps): React.ReactElement {
  const headings = useMemo(() => {
    return toc
      .map((item) => {
        // 安全地处理URL，确保有#号
        const parts = item.url.split("#")
        return parts.length > 1 ? parts[1] : null
      })
      .filter(Boolean) as Array<string> // 过滤掉null值
  }, [toc])

  return (
    <ActiveAnchorContext.Provider value={useAnchorObserver(headings, single)}>
      {children}
    </ActiveAnchorContext.Provider>
  )
}

interface TocItemProps {
  item: TOCItemType
  children: React.ReactNode
  minDepth: number
  maxDepth: number
}

function TocItem({ item, children, minDepth }: TocItemProps) {
  const containerRef = useContext(ScrollContext)
  const anchors = useActiveAnchors()
  const anchorRef = useRef<HTMLAnchorElement>(null)

  // 从href中提取id部分，安全处理
  let id: string | undefined
  if (item.url.startsWith("#")) {
    id = item.url.slice(1)
  } else {
    const parts = item.url.split("#")
    id = parts.length > 1 ? parts[1] : undefined
  }

  // 只有当id存在时才检查是否活跃
  const isActive = id ? anchors.includes(id) : false

  useOnChange(isActive, (active) => {
    const element = anchorRef.current
    if (!element) return

    if (active && containerRef.current) {
      scrollIntoView(element, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: containerRef.current,
      })
    }
  })

  const className = tv({
    base: "inline-block border-l border-transparent text-base/8 text-gray-600 hover:border-gray-950/25 hover:text-gray-950 aria-[current]:border-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 sm:text-sm/6 dark:text-gray-300 dark:hover:border-white/25 dark:hover:text-white dark:aria-[current]:border-white dark:aria-[current]:text-white",
    variants: {
      depth: {
        [minDepth]: "pl-5 sm:pl-4",
        [minDepth + 1]: "pl-8 sm:pl-7.5",
        [minDepth + 2]: "pl-11 sm:pl-10",
        [minDepth + 3]: "pl-14 sm:pl-13",
        [minDepth + 4]: "pl-18 sm:pl-17",
      },
    },
    defaultVariants: {
      depth: 2,
    },
  })

  return (
    <li className="-ml-px flex flex-col items-start gap-2">
      <a
        ref={anchorRef}
        className={className({ depth: item.depth })}
        type="button"
        href={item.url}
        data-active={isActive}
        {...(isActive ? { "aria-current": "location" } : {})}
      >
        {item.title}
      </a>
      {children}
    </li>
  )
}

// 将TOC项目分组为嵌套结构
interface TocGroup {
  item: TOCItemType
  children: Array<TocGroup>
}

function buildTocTree(toc: TableOfContents): {
  tree: Array<TocGroup>
  minDepth: number
  maxDepth: number
} {
  if (toc.length === 0) {
    return {
      tree: [],
      minDepth: 0,
      maxDepth: 0,
    }
  }

  const minDepth = Math.min(...toc.map((item) => item.depth))
  const maxDepth = Math.max(...toc.map((item) => item.depth))

  // 使用一个堆栈来跟踪当前的父项
  const stack: Array<{ item: TOCItemType; children: Array<TocGroup> }> = []
  const result: Array<TocGroup> = []

  // 处理每个目录项
  for (const item of toc) {
    const node: TocGroup = { item, children: [] }

    // 弹出所有深度大于或等于当前项的节点
    while (
      stack.length > 0 &&
      stack[stack.length - 1].item.depth >= item.depth
    ) {
      stack.pop()
    }

    if (stack.length === 0) {
      // 顶级项，直接添加到结果中
      result.push(node)
    } else {
      // 子项，添加到当前父项的子节点中
      stack[stack.length - 1].children.push(node)
    }

    // 将当前节点推入堆栈，作为后续更深层级项的父节点
    stack.push(node)
  }

  return {
    tree: result,
    minDepth,
    maxDepth,
  }
}

function TocList({
  items,
  isRoot = false,
  minDepth,
  maxDepth,
}: {
  items: Array<TocGroup>
  isRoot?: boolean
  minDepth: number
  maxDepth: number
}) {
  const className = isRoot
    ? "flex flex-col gap-2 border-l dark:border-[color-mix(in_oklab,_var(--color-gray-950),white_20%)] border-[color-mix(in_oklab,_var(--color-gray-950),white_90%)]"
    : "flex flex-col gap-2 border-l dark:border-[color-mix(in_oklab,_var(--color-gray-950),white_20%)] border-transparent"

  return (
    <ul className={className}>
      {items.map((node, index) => (
        <TocItem
          key={`${node.item.url}-${index}`}
          item={node.item}
          minDepth={minDepth}
          maxDepth={maxDepth}
        >
          {node.children.length > 0 && (
            <TocList
              items={node.children}
              minDepth={minDepth}
              maxDepth={maxDepth}
            />
          )}
        </TocItem>
      ))}
    </ul>
  )
}

export function Toc({ toc }: { toc: TableOfContents }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { tree, minDepth, maxDepth } = useMemo(() => buildTocTree(toc), [toc])

  return (
    <ScrollProvider containerRef={containerRef}>
      <div ref={containerRef} className="flex flex-col gap-3">
        <h3 className="font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6 dark:text-gray-400">
          On this page
        </h3>
        <AnchorProvider toc={toc}>
          <TocList
            items={tree}
            isRoot
            minDepth={minDepth}
            maxDepth={maxDepth}
          />
        </AnchorProvider>
      </div>
    </ScrollProvider>
  )
}
