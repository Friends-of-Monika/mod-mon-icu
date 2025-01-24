<script lang="ts">
	import type { ComponentProps } from "svelte";

	import FilterTag from "$components/content/FilterTag.svelte";

	import type { FilterGroup } from "$lib/filter";
	import type { Content, Creator } from "$lib/content";
	import FilterCreator from "./FilterCreator.svelte";

	interface Props {
		group: FilterGroup;
		creators: Creator[];
		content?: Content[];
		radio?: boolean;
		onchange?: ComponentProps<typeof FilterTag>["onchange"];
	}

	let { group, creators, content, onchange, radio = false }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each creators as creator}
		<FilterCreator {group} {creator} {content} {radio} {onchange} />
	{/each}
</div>
