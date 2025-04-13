import { convertTreeToGroups } from "@/app/(docs)/utils";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";

type Params = {
	params: Promise<{
		slug?: string[];
	}>;
};

export default async function DocsTitle(props: Params) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();
	const groups = convertTreeToGroups(source.pageTree);
	const group = groups.find((g) =>
		g.items.some((item) => item.href === page.url),
	);
	if (!group) notFound();

	return (
		<Breadcrumb
			section={group.label}
			title={page.data.slogan ?? page.data.title}
		/>
	);
}
