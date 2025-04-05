import { MDXContent } from "@content-collections/mdx/react"
import { notFound, redirect } from "next/navigation"

import { SectionTitle } from "@/components/docs/section-title"
import TableOfContents from "@/components/docs/table-of-contents"
import { Pagination } from "@/components/layout/pagination"
import { mdxComponents } from "@/components/mdx-components"
import { cn } from "@/lib/cn"
import { source } from "@/lib/source"

import type { Metadata } from "next"

export default async function Page(props: {
  params: Promise<{ slug?: Array<string> }>
}) {
  const params = await props.params
  if (params.slug === undefined) {
    const entry = source.pageTree.children[0]
    throw redirect(`/docs/${entry.$id}`)
  }
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const title = page.data.title
  const description = page.data.description
  const slogan = page.data.slogan
  const full = page.data.full

  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div
        className={cn(
          "mx-auto grid w-full max-w-2xl grid-cols-1 gap-10",
          full
            ? "isolate pt-10 md:pb-24 xl:max-w-5xl"
            : "xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]"
        )}
      >
        <div className="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">
          <SectionTitle url={page.url} slogan={slogan} />
          <h1
            data-title="true"
            className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white"
          >
            {title}
          </h1>
          <p
            data-description="true"
            className="mt-6 text-base/7 text-gray-700 dark:text-gray-400"
          >
            {description}
          </p>

          <div className="prose mt-10" data-content="true">
            <MDXContent components={mdxComponents} code={page.data.body} />
          </div>
          <Pagination page={page} />
        </div>
        {!page.data.full && (
          <div className="max-xl:hidden">
            <div className="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
              <TableOfContents
                tableOfContents={page.data.toc.map((item) => ({
                  level: item.depth,
                  text: item.title,
                  slug: item.url,
                  children: [],
                }))}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: Array<string> }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
