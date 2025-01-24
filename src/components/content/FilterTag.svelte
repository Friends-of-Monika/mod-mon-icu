<script lang="ts">
	import type { ComponentProps } from "svelte";

	import { type Tag } from "$lib/content";
	import { FilterGroup, TagFilter } from "$lib/filter";
	import FilterToggle from "./FilterToggle.svelte";

	interface Props {
		group: FilterGroup;
		tag: Tag;
		radio?: boolean;
		onchange?: ComponentProps<typeof FilterToggle>["onchange"];
	}

	let { group, tag, radio = false, onchange }: Props = $props();
	let filter = $state(new TagFilter(tag));
</script>

<FilterToggle {group} {filter} text={tag.name} bgColor={tag.color} {radio} {onchange} />
