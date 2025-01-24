<script lang="ts">
	import type { ComponentProps } from "svelte";

	import { type Content, type Creator } from "$lib/content";
	import { CreatorFilter, FilterGroup } from "$lib/filter";
	import FilterToggle from "./FilterToggle.svelte";

	interface Props {
		group: FilterGroup;
		creator: Creator;
		content?: Content[];
		radio?: boolean;
		onchange?: ComponentProps<typeof FilterToggle>["onchange"];
	}

	let { group, creator, content, radio = false, onchange }: Props = $props();
	let filter = $state(new CreatorFilter(creator));

	const hearts = ["❤️", "🩷", "🧡", "💛", "💚", "💙", "🩵", "💜", "🤎", "🖤", "🩶", "🤍"];
	const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
</script>

<FilterToggle
	{group}
	{filter}
	{content}
	text="{randomHeart} {creator.name}"
	bgColor="white"
	{radio}
	{onchange} />
