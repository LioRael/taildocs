import { createMDXSource } from "@fumadocs/content-collections";
import { allBlogMetas, allBlogs, allDocs, allMetas } from "content-collections";
import { loader } from "fumadocs-core/source";
import { convertPageTreeToSection } from "./section";

export const source = loader({
	baseUrl: "/docs",
	source: createMDXSource(allDocs, allMetas),
	pageTree: {
		attachFile(node, file) {
			if (file?.data.data["slogan" as keyof typeof file.data.data]) {
				node.name = file.data.data[
					"slogan" as keyof typeof file.data.data
				] as string;
			}

			return node;
		},
	},
});

export const sections = convertPageTreeToSection(source.pageTree);

export const blogSource = loader({
	baseUrl: "/blog",
	source: createMDXSource(allBlogs, allBlogMetas),
});
