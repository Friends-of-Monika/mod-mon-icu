<script lang="ts">
	import type { ComponentProps } from "svelte";

	import { type Content, type Tag } from "$lib/content";
	import { FilterGroup, TagFilter } from "$lib/filter";
	import FilterToggle from "./FilterToggle.svelte";

	interface Props {
		group: FilterGroup;
		tag: Tag;
		content?: Content[];
		radio?: boolean;
		onchange?: ComponentProps<typeof FilterToggle>["onchange"];
	}

	let { group, tag, content, radio = false, onchange }: Props = $props();
	let filter = $state(new TagFilter(tag));
</script>

<FilterToggle {group} {filter} {content} text={tag.name} bgColor={tag.color} {radio} {onchange} />
