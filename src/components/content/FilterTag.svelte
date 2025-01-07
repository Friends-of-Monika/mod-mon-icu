<script lang="ts">
	import tinycolor from "tinycolor2";
	import clsx from "clsx";

	import { type Tag } from "$lib/content";
	import { FilterGroup, TagFilter } from "$lib/filter";

	interface Props {
		group: FilterGroup;
		tag: Tag;
	}

	let { group, tag }: Props = $props();
	let filter = $state(new TagFilter(tag));
	let selected = $derived(group.hasFilter(filter));

	let buttonBgColor = tag.color;
	let buttonTextColor = tinycolor(tag.color).isLight() ? "black" : "white";
</script>

<button
	class={clsx("flex flex-row justify-between rounded-md px-4 py-2 text-left transition", {
		"bg-[var(--bg-color)] text-[var(--text-color)]": selected,
		"bg-white text-black dark:bg-neutral-700 dark:text-white": !selected
	})}
	style="--bg-color: {buttonBgColor}; --text-color: {buttonTextColor};"
	onclick={() => group.toggleFilter(filter)}>
	<span>
		{tag.name}
	</span>
	<span class={clsx("transition", { "opacity-0": !selected, "opacity-100": selected })}>
		✔
	</span>
</button>
