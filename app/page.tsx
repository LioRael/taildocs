import { FooterMeta, FooterSitemap } from "@/components/docs/footer";
import { Header } from "@/components/docs/header";
import GridContainer from "@/components/home/grid-container";
import Hero from "@/components/home/hero";

export default function Home() {
	return (
		<div className="max-w-screen overflow-x-hidden">
			<div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
				<Header />
			</div>
			<div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)] lg:mx-0">
				{/* Candy cane */}
				<div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10" />

				{/* Main content area */}
				<div className="grid gap-24 pb-24 text-gray-950 sm:gap-40 md:pb-40 dark:text-white">
					<Hero />
				</div>

				{/* Candy cane */}
				<div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10" />

				<GridContainer className="col-start-1 row-start-3 md:col-start-2">
					<FooterSitemap className="*:first:border-l-0 *:last:border-r-0" />
				</GridContainer>

				<div className="col-start-1 row-start-5 grid md:col-start-2">
					<FooterMeta className="px-4 md:px-6 lg:px-8" />
				</div>
			</div>
			<div className="fixed!" aria-hidden="true">
				<input type="text" tabIndex={-1} />
			</div>
		</div>
	);
}
