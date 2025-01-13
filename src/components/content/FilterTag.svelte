<script lang="ts">
	import tinycolor from "tinycolor2";
	import clsx from "clsx";

	import { type Tag } from "$lib/content";
	import { FilterGroup, TagFilter } from "$lib/filter";

	interface Props {
		group: FilterGroup;
		tag: Tag;
		onchange?: (e: CustomEvent<ChangeEventDetail>) => void;
	}

	interface ChangeEventDetail {
		target: TagFilter;
		selected: boolean;
	}

	let { group, tag, onchange }: Props = $props();
	let filter = $state(new TagFilter(tag));
	let selected = $derived(group.hasFilter(filter));

	let buttonBgColor = tag.color;
	let buttonTextColor = tinycolor(tag.color).isLight() ? "black" : "white";

	function toggleFilter() {
		group.toggleFilter(filter);

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
	class={clsx("flex flex-row justify-between rounded-md px-4 py-2 text-left transition", {
		"bg-[var(--bg-color)] text-[var(--text-color)]": selected,
		"bg-white text-black dark:bg-neutral-700 dark:text-white": !selected
	})}
	style="--bg-color: {buttonBgColor}; --text-color: {buttonTextColor};"
	onclick={() => toggleFilter()}>
	<span>
		{tag.name}
	</span>
	<span
		class={clsx("transition", { "opacity-0": !selected, "opacity-100": selected })}
		aria-hidden="true">
		✔
	</span>
</button>
