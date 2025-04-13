"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { Search } from "lucide-react";
import type React from "react";

import { Dialog } from "@base-ui-components/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CornerDecorationButton } from "../ui/corner-decoration-button";
import { IconButton } from "../ui/icon-button";
import { VersionSelect } from "./version-select";

export function Header() {
	const router = useRouter();

	return (
		<div className="bg-white dark:bg-gray-950">
			<div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
				<div className="flex items-center gap-4">
					<Link
						href="/"
						className="shrink-0"
						aria-label="Home"
						onContextMenu={(evt) => {
							evt.preventDefault();
							router.push("/brand");
						}}
					>
						<Logo />
					</Link>
					<VersionSelect />
				</div>
				<div className="flex items-center gap-6 max-md:hidden">
					<SearchButton />
					<Link
						href="/docs"
						className="text-sm/6 text-gray-950 dark:text-white"
					>
						Docs
					</Link>
					<Link
						href="/blog"
						className="text-sm/6 text-gray-950 dark:text-white"
					>
						Blog
					</Link>
					<Link
						href="/showcase"
						className="text-sm/6 text-gray-950 dark:text-white"
					>
						Showcase
					</Link>
					<a
						href="/plus?ref=top"
						className="group relative px-1.5 text-sm/6 text-sky-800 dark:text-sky-300"
					>
						<CornerDecorationButton>Plus</CornerDecorationButton>
					</a>

					<Link
						href="https://github.com/tailwindlabs/tailwindcss"
						aria-label="GitHub repository"
					>
						<SiGithub className="size-5 fill-black/40 dark:fill-gray-400" />
					</Link>
				</div>
				<div className="flex items-center gap-2.5 md:hidden">
					<button
						type="button"
						aria-label="Search"
						className="inline-grid size-7 place-items-center rounded-md"
					>
						<Search className="size-4" />
					</button>

					<Dialog.Root>
						<Dialog.Trigger
							render={
								<IconButton aria-label="Navigation">
									<svg
										viewBox="0 0 16 16"
										fill="currentColor"
										className="size-4"
									>
										<title>Open navigation menu</title>
										<path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
									</svg>
								</IconButton>
							}
						/>
						<Dialog.Portal>
							<Dialog.Popup className="fixed inset-0 bg-white focus:outline-none md:hidden dark:bg-gray-950">
								<div className="size-full overflow-y-auto">
									<div className="flex h-14 items-center justify-between px-4 py-4 sm:px-6">
										<Mark />
										<Dialog.Close
											render={
												<IconButton aria-label="Navigation">
													<svg
														viewBox="0 0 16 16"
														fill="currentColor"
														className="size-4"
													>
														<title>Close navigation menu</title>
														<path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
													</svg>
												</IconButton>
											}
										/>
									</div>
									<div className="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
										<Link
											href="/docs"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Docs
										</Link>
										<a
											href="/plus/?ref=top"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Plus
										</a>
										<Link
											href="/blog"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Blog
										</Link>
										<Link
											href="/showcase"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Showcase
										</Link>
										<Link
											href="https://github.com/liorael/taildocs"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											GitHub
										</Link>
									</div>
								</div>
							</Dialog.Popup>
						</Dialog.Portal>
					</Dialog.Root>
				</div>
			</div>
		</div>
	);
}

function Mark() {
	return (
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
	);
}

function Logo() {
	return (
		<svg
			width="136"
			height="21"
			viewBox="0 0 136 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Taildocs</title>
			<g clipPath="url(#clip0_2_2)">
				<path
					d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873C10.309 4.583 12.313 3.723 14.604 4.296C15.911 4.622 16.846 5.57 17.879 6.62C19.564 8.33 21.514 10.309 25.773 10.309C30.355 10.309 33.218 8.018 34.364 3.437C32.646 5.727 30.641 6.587 28.351 6.013C27.043 5.687 26.108 4.739 25.075 3.689C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182C1.718 14.891 3.723 14.032 6.013 14.605C7.321 14.931 8.256 15.879 9.289 16.929C10.974 18.639 12.924 20.618 17.183 20.618C21.765 20.618 24.628 18.328 25.773 13.746C24.055 16.036 22.051 16.896 19.76 16.323C18.453 15.996 17.518 15.047 16.484 13.998C14.8 12.288 12.849 10.309 8.59 10.309Z"
					className="fill-primary-400"
				/>
				<path
					d="M51.1335 6.60587V8.9965H43.5749V6.60587H51.1335ZM45.6023 3.34806H48.6023V15.6996C48.6023 16.1527 48.696 16.477 48.8835 16.6723C49.0788 16.8676 49.4109 16.9652 49.8796 16.9652C50.0515 16.9652 50.2546 16.9574 50.489 16.9418C50.7312 16.9262 50.9265 16.9106 51.0749 16.8949L51.2976 19.2621C51.032 19.309 50.7273 19.3402 50.3835 19.3559C50.0476 19.3793 49.7195 19.391 49.3992 19.391C48.1335 19.391 47.1843 19.1098 46.5515 18.5473C45.9187 17.9848 45.6023 17.1527 45.6023 16.0512V3.34806ZM57.6241 19.5434C56.796 19.5434 56.0538 19.3988 55.3976 19.1098C54.7491 18.8207 54.2335 18.3949 53.8507 17.8324C53.4757 17.2621 53.2882 16.559 53.2882 15.7231C53.2882 15.0043 53.421 14.4106 53.6866 13.9418C53.9601 13.4731 54.3272 13.0981 54.7882 12.8168C55.2569 12.5356 55.7843 12.3246 56.3702 12.184C56.964 12.0356 57.5772 11.9262 58.2101 11.8559C58.9757 11.7699 59.589 11.6957 60.0499 11.6332C60.5108 11.5707 60.8429 11.4731 61.046 11.3402C61.2569 11.1996 61.3624 10.9848 61.3624 10.6957V10.6254C61.3624 10.2348 61.2726 9.89884 61.0929 9.61759C60.9132 9.32853 60.6554 9.10587 60.3194 8.94962C59.9835 8.79337 59.5733 8.71525 59.089 8.71525C58.5968 8.71525 58.1671 8.79337 57.7999 8.94962C57.4327 9.10587 57.1358 9.31681 56.9093 9.58244C56.6905 9.84025 56.5499 10.1293 56.4874 10.4496L53.6515 10.1918C53.7921 9.39494 54.1046 8.71525 54.589 8.15275C55.0812 7.58244 55.7101 7.14884 56.4757 6.85197C57.2491 6.54728 58.128 6.39494 59.1124 6.39494C59.8312 6.39494 60.5069 6.48478 61.1397 6.66447C61.7726 6.83634 62.3272 7.09806 62.8038 7.44962C63.2882 7.80119 63.6632 8.2504 63.9288 8.79728C64.2022 9.33634 64.339 9.98087 64.339 10.7309V19.309H61.4327V17.5395H61.3507C61.1554 17.9067 60.8937 18.2426 60.5655 18.5473C60.2452 18.852 59.8429 19.0942 59.3585 19.2738C58.8741 19.4535 58.296 19.5434 57.6241 19.5434ZM58.3741 17.3168C59.0069 17.3168 59.546 17.1996 59.9913 16.9652C60.4444 16.7231 60.7882 16.4027 61.0226 16.0043C61.2569 15.5981 61.3741 15.1567 61.3741 14.6801V13.2387C61.2804 13.309 61.1319 13.3754 60.9288 13.4379C60.7257 13.5004 60.4874 13.559 60.214 13.6137C59.9483 13.6606 59.671 13.7074 59.3819 13.7543C59.1007 13.7934 58.8312 13.8324 58.5733 13.8715C58.1358 13.9262 57.7374 14.0238 57.378 14.1645C57.0187 14.3051 56.7335 14.5004 56.5226 14.7504C56.3116 14.9926 56.2062 15.3051 56.2062 15.6879C56.2062 16.0395 56.296 16.3363 56.4757 16.5785C56.6554 16.8207 56.9093 17.0043 57.2374 17.1293C57.5655 17.2543 57.9444 17.3168 58.3741 17.3168ZM67.6538 19.309V6.60587H70.6538V19.309H67.6538ZM69.1538 4.76603C68.6538 4.76603 68.2319 4.60587 67.8882 4.28556C67.5522 3.95744 67.3842 3.559 67.3842 3.09025C67.3842 2.61369 67.5522 2.21525 67.8882 1.89494C68.2319 1.57462 68.6538 1.41447 69.1538 1.41447C69.6538 1.41447 70.0717 1.57462 70.4077 1.89494C70.7514 2.21525 70.9233 2.61369 70.9233 3.09025C70.9233 3.559 70.7514 3.95744 70.4077 4.28556C70.0639 4.60587 69.646 4.76603 69.1538 4.76603ZM76.9686 1.84806V19.309H73.9686V1.84806H76.9686ZM85.0881 19.5551C84.0334 19.5551 83.0998 19.2895 82.2873 18.7582C81.4826 18.2192 80.8498 17.4574 80.3889 16.4731C79.9357 15.4887 79.7092 14.3207 79.7092 12.9692C79.7092 11.6176 79.9397 10.4496 80.4006 9.46525C80.8693 8.48087 81.5061 7.72306 82.3107 7.19181C83.1232 6.66056 84.0451 6.39494 85.0764 6.39494C85.7248 6.39494 86.2873 6.4965 86.7639 6.69962C87.2404 6.89494 87.6467 7.15665 87.9826 7.48478C88.3264 7.80509 88.6037 8.16056 88.8147 8.55119H88.885V1.84806H91.885V19.309H88.9318V17.3402H88.8381C88.6272 17.7465 88.3498 18.1176 88.0061 18.4535C87.6623 18.7895 87.2482 19.059 86.7639 19.2621C86.2873 19.4574 85.7287 19.5551 85.0881 19.5551ZM85.8498 17.0707C86.4982 17.0707 87.0568 16.8988 87.5256 16.5551C88.0022 16.2113 88.3654 15.7309 88.6154 15.1137C88.8732 14.4965 89.0022 13.7777 89.0022 12.9574C89.0022 12.1293 88.8732 11.4106 88.6154 10.8012C88.3654 10.1918 88.0061 9.71915 87.5373 9.38322C87.0686 9.04728 86.5061 8.87931 85.8498 8.87931C85.2092 8.87931 84.6545 9.04728 84.1857 9.38322C83.7248 9.71134 83.3732 10.1801 83.1311 10.7895C82.8889 11.3988 82.7678 12.1215 82.7678 12.9574C82.7678 13.7934 82.8889 14.5199 83.1311 15.1371C83.3811 15.7543 83.7365 16.2309 84.1975 16.5668C84.6584 16.9027 85.2092 17.0707 85.8498 17.0707ZM100.801 19.5785C99.567 19.5785 98.4849 19.3051 97.5552 18.7582C96.6256 18.2035 95.9029 17.434 95.3873 16.4496C94.8795 15.4574 94.6256 14.3051 94.6256 12.9926C94.6256 11.6801 94.8795 10.5277 95.3873 9.53556C95.9029 8.54337 96.6256 7.76994 97.5552 7.21525C98.4849 6.66056 99.567 6.38322 100.801 6.38322C102.044 6.38322 103.126 6.66056 104.047 7.21525C104.977 7.76994 105.696 8.54337 106.204 9.53556C106.719 10.5277 106.977 11.6801 106.977 12.9926C106.977 14.3051 106.719 15.4574 106.204 16.4496C105.696 17.434 104.977 18.2035 104.047 18.7582C103.126 19.3051 102.044 19.5785 100.801 19.5785ZM100.801 17.1059C101.473 17.1059 102.04 16.934 102.501 16.5902C102.969 16.2387 103.325 15.7543 103.567 15.1371C103.817 14.5121 103.942 13.7973 103.942 12.9926C103.942 12.1723 103.817 11.4535 103.567 10.8363C103.325 10.2192 102.969 9.73478 102.501 9.38322C102.04 9.03165 101.473 8.85587 100.801 8.85587C100.137 8.85587 99.5709 9.03165 99.1021 9.38322C98.6334 9.72697 98.2779 10.2113 98.0357 10.8363C97.7935 11.4535 97.6724 12.1723 97.6724 12.9926C97.6724 13.8051 97.7935 14.5199 98.0357 15.1371C98.2779 15.7543 98.6334 16.2387 99.1021 16.5902C99.5709 16.934 100.137 17.1059 100.801 17.1059ZM115.319 19.5785C114.085 19.5785 113.007 19.3012 112.085 18.7465C111.163 18.1918 110.444 17.4223 109.929 16.4379C109.421 15.4457 109.167 14.2973 109.167 12.9926C109.167 11.6879 109.421 10.5395 109.929 9.54728C110.444 8.54728 111.163 7.76994 112.085 7.21525C113.007 6.66056 114.085 6.38322 115.319 6.38322C116.069 6.38322 116.765 6.48869 117.405 6.69962C118.054 6.91056 118.624 7.21134 119.116 7.60197C119.608 7.99259 120.011 8.46134 120.323 9.00822C120.636 9.55509 120.843 10.1606 120.944 10.8246L118.061 11.0942C117.999 10.7582 117.89 10.4535 117.733 10.1801C117.585 9.90665 117.394 9.67228 117.159 9.47697C116.933 9.27384 116.667 9.11759 116.362 9.00822C116.058 8.89884 115.718 8.84415 115.343 8.84415C114.671 8.84415 114.101 9.01994 113.632 9.3715C113.171 9.72306 112.819 10.2113 112.577 10.8363C112.335 11.4535 112.214 12.1723 112.214 12.9926C112.214 13.8051 112.335 14.5199 112.577 15.1371C112.819 15.7543 113.171 16.2387 113.632 16.5902C114.101 16.9418 114.671 17.1176 115.343 17.1176C115.726 17.1176 116.069 17.0629 116.374 16.9535C116.679 16.8442 116.944 16.6918 117.171 16.4965C117.397 16.2934 117.585 16.0512 117.733 15.7699C117.89 15.4809 118.003 15.1645 118.073 14.8207L120.956 15.0902C120.87 15.7543 120.671 16.3637 120.358 16.9184C120.046 17.4652 119.64 17.9379 119.14 18.3363C118.647 18.7348 118.077 19.0434 117.429 19.2621C116.78 19.4731 116.077 19.5785 115.319 19.5785ZM128.56 19.5902C127.552 19.5902 126.654 19.4379 125.865 19.1332C125.083 18.8285 124.447 18.3832 123.954 17.7973C123.47 17.2113 123.173 16.4965 123.064 15.6527L125.958 15.4184C126.076 16.0356 126.353 16.5082 126.79 16.8363C127.228 17.1567 127.814 17.3168 128.548 17.3168C129.283 17.3168 129.861 17.1723 130.283 16.8832C130.704 16.5942 130.915 16.2309 130.915 15.7934C130.915 15.4184 130.767 15.1137 130.47 14.8793C130.173 14.6371 129.747 14.4574 129.193 14.3402L127.025 13.8832C125.822 13.6332 124.911 13.2074 124.294 12.6059C123.685 11.9965 123.38 11.2192 123.38 10.2738C123.38 9.49259 123.591 8.8129 124.013 8.23478C124.443 7.64884 125.04 7.19572 125.806 6.8754C126.579 6.54728 127.478 6.38322 128.501 6.38322C129.501 6.38322 130.368 6.53947 131.103 6.85197C131.845 7.16447 132.435 7.60587 132.872 8.17619C133.31 8.73869 133.576 9.40665 133.669 10.1801L130.915 10.4145C130.845 9.90665 130.607 9.48478 130.201 9.14884C129.794 8.80509 129.247 8.63322 128.56 8.63322C127.911 8.63322 127.384 8.77775 126.978 9.06681C126.579 9.34806 126.38 9.70353 126.38 10.1332C126.38 10.5082 126.525 10.8168 126.814 11.059C127.103 11.3012 127.54 11.4848 128.126 11.6098L130.353 12.0785C131.587 12.3363 132.497 12.7504 133.083 13.3207C133.677 13.8832 133.974 14.6215 133.974 15.5356C133.974 16.3559 133.743 17.0707 133.283 17.6801C132.822 18.2817 132.181 18.7504 131.361 19.0863C130.548 19.4223 129.615 19.5902 128.56 19.5902Z"
					className="fill-black dark:fill-white"
				/>
			</g>
		</svg>
	);
}

function SearchButton() {
	return (
		<>
			<button
				type="button"
				className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1 inset-ring inset-ring-gray-950/8 dark:bg-white/5 dark:inset-ring-white/2"
			>
				<Search className="-ml-0.5 size-4 text-gray-600 dark:text-gray-500" />
				<kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">
					⌘K
				</kbd>
				<kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
					Ctrl&nbsp;K
				</kbd>
			</button>
		</>
	);
}
