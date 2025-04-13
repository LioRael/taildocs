"use client";

import { Select } from "@base-ui-components/react";
import { Check, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export function VersionSelect() {
	const [version, setVersion] = React.useState(1.0);
	const [open, setOpen] = React.useState(false);
	const versions = [1.0, 0.1];

	return (
		<Select.Root
			value={version}
			onValueChange={setVersion}
			open={open}
			onOpenChange={setOpen}
		>
			<Select.Trigger
				aria-label="Version"
				className="flex items-center gap-0.5 transition-colors rounded-2xl bg-gray-950/5 py-0.5 pr-1.5 pl-2.5 text-xs/5 font-medium text-gray-950 tabular-nums outline-none select-none hover:bg-gray-950/7.5 data-active:bg-gray-950/7.5 dark:bg-white/10 dark:text-white dark:hover:bg-white/12.5 dark:data-active:bg-white/12.5"
			>
				v{version.toFixed(1)}
				<Select.Icon>
					<ChevronDown className="size-4 text-gray-400" />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner align="start">
					<Select.Popup
						render={
							<motion.div
								initial={false}
								animate={{
									opacity: open ? 1 : 0,
									scale: open ? 1 : 0.8,
								}}
								transition={{
									duration: open ? 0.2 : 0.1,
								}}
								className="mt-2 w-28 rounded-xl bg-white p-1 py-1 text-xs/7 font-medium text-gray-950 tabular-nums shadow-sm ring ring-gray-950/5 outline-none dark:bg-gray-950 dark:text-white dark:ring-white/10"
							/>
						}
					>
						{versions.map((item) => (
							<SelectItem key={item} value={item} />
						))}
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	);
}

function SelectItem(props: React.ComponentProps<typeof Select.Item>) {
	return (
		<Select.Item
			{...props}
			className="flex items-center transition-colors justify-between gap-2 rounded-lg px-2.5 outline-none not-data-selected:cursor-pointer data-highlighted:not-data-selected:bg-gray-950/5 dark:data-highlighted:not-data-selected:bg-white/10"
		>
			<Select.ItemText>v{props.value.toFixed(1)}</Select.ItemText>
			<Select.ItemIndicator>
				<Check className="size-4" />
			</Select.ItemIndicator>
		</Select.Item>
	);
}
