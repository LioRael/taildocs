import { MDXContent } from "@content-collections/mdx/react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { notFound, redirect } from "next/navigation"

import { NavFooter } from "@/components/layout/nav-footer"
import { ProseWrapper } from "@/components/layout/wrapper"
import { mdxComponents } from "@/components/mdx-components"
import { source } from "@/lib/source"

import { convertTreeToGroups } from "../utils"

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

  const groups = convertTreeToGroups(source.pageTree)

  const allPages = groups.flatMap((group) => group.items)
  const currentIndex = allPages.findIndex((item) => item.href === page.url)

  const previousPage = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const nextPage =
    currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  return (
    <ProseWrapper toc={!page.data.full ? page.data.toc : undefined}>
      <p className="flex items-center gap-2 font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400">
        {page.data.slogan ??
          groups.find((group) =>
            group.items.some((item) => item.href === page.url)
          )?.label}
      </p>
      <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
        {page.data.title}
      </h1>
      <p className="mt-6 text-base/7 whitespace-pre-line text-gray-700 dark:text-gray-400">
        {page.data.description}
      </p>
      <div className="prose mt-10">
        <MDXContent components={mdxComponents} code={page.data.body} />
      </div>
      <NavFooter previousPage={previousPage} nextPage={nextPage} />
    </ProseWrapper>
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
