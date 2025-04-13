"use client";

import { ScrollArea } from "@base-ui-components/react";
import { forwardRef, useCallback, useRef } from "react";

import { cn } from "@/lib/cn";

import type { HTMLAttributes, ReactNode } from "react";

export type CodeBlockProps = HTMLAttributes<HTMLElement> & {
	/**
	 * Icon of code block
	 *
	 * When passed as a string, it assumes the value is the HTML of icon
	 */
	icon?: ReactNode;

	/**
	 * Allow to copy code with copy button
	 *
	 * @defaultValue true
	 */
	allowCopy?: boolean;

	/**
	 * Keep original background color generated by Shiki or Rehype Code
	 *
	 * @defaultValue false
	 */
	keepBackground?: boolean;

	viewportProps?: React.ComponentProps<typeof ScrollArea.Viewport>;
};

export const Pre = forwardRef<HTMLPreElement, HTMLAttributes<HTMLPreElement>>(
	({ className, ...props }, ref) => {
		return (
			<pre
				ref={ref}
				className={cn("**:text-(--shiki-dark)", className)}
				{...props}
			>
				{props.children}
			</pre>
		);
	},
);
Pre.displayName = "Pre";

export const CodeBlock = forwardRef<HTMLElement, CodeBlockProps>(
	({ title, allowCopy = true, icon, viewportProps, ...props }, ref) => {
		const areaRef = useRef<HTMLDivElement>(null);
		const onCopy = useCallback(() => {
			const pre = areaRef.current?.getElementsByTagName("pre").item(0);

			if (!pre) return;

			const clone = pre.cloneNode(true) as HTMLElement;
			for (const node of clone.querySelectorAll(".nd-copy-ignore")) {
				node.remove();
			}

			void navigator.clipboard.writeText(clone.textContent ?? "");
		}, []);

		return (
			<div>
				<figure
					ref={ref}
					{...props}
					className={cn(
						"not-prose rounded-xl bg-gray-950 in-data-stack:mt-0 in-data-stack:rounded-none in-[figure]:-mx-1 in-[figure]:-mb-1 in-data-stack:[:first-child>&]:rounded-t-xl in-data-stack:[:first-child>&]:*:rounded-t-xl in-data-stack:[:last-child>&]:rounded-b-xl in-data-stack:[:last-child>&]:*:rounded-b-xl",
						props.className,
					)}
				>
					<div className="rounded-xl p-1 text-sm scheme-dark in-data-stack:rounded-none dark:bg-white/5 dark:inset-ring dark:inset-ring-white/10 in-data-stack:dark:inset-ring-0">
						{title && (
							<div className="px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400 dark:text-white/50">
								{title}
							</div>
						)}
						<ScrollArea.Root ref={areaRef} dir="ltr">
							<ScrollArea.Viewport
								{...viewportProps}
								className={cn(
									"*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 *:inset-ring *:inset-ring-white/10 dark:*:bg-white/5! dark:*:inset-ring-white/5 **:[.line]:isolate **:[.line]:not-last:min-h-[1lh]",
									viewportProps?.className,
								)}
							>
								{props.children}
							</ScrollArea.Viewport>
							<ScrollArea.Scrollbar orientation="horizontal" />
						</ScrollArea.Root>
					</div>
				</figure>
			</div>
		);
	},
);
CodeBlock.displayName = "CodeBlock";
