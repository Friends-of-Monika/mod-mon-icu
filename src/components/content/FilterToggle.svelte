<script lang="ts">
	import tinycolor from "tinycolor2";
	import clsx from "clsx";

	import { FilterGroup, type Filter } from "$lib/filter";

	interface Props {
		group: FilterGroup;
		filter: Filter;
		text: string;
		bgColor: string;
		radio?: boolean;
		onchange?: (e: CustomEvent<ChangeEventDetail>) => void;
	}

	interface ChangeEventDetail {
		target: Filter;
		selected: boolean;
	}

	let { group, filter, text, bgColor, radio = false, onchange }: Props = $props();
	let selected = $derived(group.hasFilter(filter));
	let buttonTextColor = tinycolor(bgColor).isLight() ? "black" : "white";

	function toggleFilter() {
		if (group.hasFilter(filter)) {
			group.removeFilter(filter);
		} else {
			if (radio) group.removeAll();
			group.addFilter(filter);
		}

		const event = new CustomEvent<ChangeEventDetail>("change", {
			detail: {
				target: filter,
				selected
			}
		});

		onchange?.(event);
	}
</script>

<button
	class={clsx(
		"flex cursor-pointer flex-row items-center justify-between rounded-md px-4 py-2 text-left transition",
		{
			"bg-(--bg-color) text-(--text-color)": selected,
			"bg-white text-black hover:bg-neutral-100 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600":
				!selected
		}
	)}
	style="--bg-color: {bgColor}; --text-color: {buttonTextColor};"
	onclick={() => toggleFilter()}>
	<span>
		{text}
	</span>
	<span
		class={clsx("font-['Arial'] transition", {
			"opacity-0": !selected,
			"opacity-100": selected
		})}
		aria-hidden="true">
		✔
	</span>
</button>
