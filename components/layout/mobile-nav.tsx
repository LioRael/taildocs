"use client";

import { Dialog } from "@base-ui-components/react";
import { X } from "lucide-react";
import Link from "next/link";

function HeaderNavMobileItem(props: React.ComponentProps<typeof Link>) {
	return (
		<Link
			{...props}
			className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
		/>
	);
}

export function MobileNav({
	trigger,
}: {
	trigger: React.ComponentProps<typeof Dialog.Trigger>["render"];
}) {
	return (
		<Dialog.Root>
			<Dialog.Trigger render={trigger} />
			<Dialog.Portal>
				<Dialog.Popup className="fixed inset-0 bg-white focus:outline-none md:hidden dark:bg-gray-950">
					<Dialog.Title />
					<div className="size-full overflow-y-auto">
						<div className="flex h-14 items-center justify-between px-4 py-4 sm:px-6">
							<svg
								width="87"
								height="21"
								viewBox="0 0 87 21"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Taildocs</title>
								<path
									className="fill-primary-400"
									d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873C10.309 4.583 12.313 3.723 14.604 4.296C15.911 4.622 16.846 5.57 17.879 6.62C19.564 8.33 21.514 10.309 25.773 10.309C30.355 10.309 33.218 8.018 34.364 3.437C32.646 5.727 30.641 6.587 28.351 6.013C27.043 5.687 26.108 4.739 25.075 3.689C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182C1.718 14.891 3.723 14.032 6.013 14.605C7.321 14.931 8.256 15.879 9.289 16.929C10.974 18.639 12.924 20.618 17.183 20.618C21.765 20.618 24.628 18.328 25.773 13.746C24.055 16.036 22.051 16.896 19.76 16.323C18.453 15.996 17.518 15.047 16.484 13.998C14.8 12.288 12.849 10.309 8.59 10.309Z"
								/>
							</svg>
							<Dialog.Close className="relative inline-grid size-7 place-items-center rounded-md text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10">
								<X className="size-4" />
							</Dialog.Close>
						</div>
						<div className="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
							<HeaderNavMobileItem href="/docs">Docs</HeaderNavMobileItem>
							<HeaderNavMobileItem href="/plus">Plus</HeaderNavMobileItem>
							<HeaderNavMobileItem href="/blog">Blog</HeaderNavMobileItem>
							<HeaderNavMobileItem href="/showcase">
								Showcase
							</HeaderNavMobileItem>
							<HeaderNavMobileItem
								href="https://github.com/liorael/taildocs"
								target="_blank"
							>
								GitHub
							</HeaderNavMobileItem>
						</div>
					</div>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
