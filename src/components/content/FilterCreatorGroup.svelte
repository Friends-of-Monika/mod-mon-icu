<script lang="ts">
	import type { ComponentProps } from "svelte";

	import FilterTag from "$components/content/FilterTag.svelte";

	import type { FilterGroup } from "$lib/filter";
	import type { Creator } from "$lib/content";
	import FilterCreator from "./FilterCreator.svelte";

	interface Props {
		group: FilterGroup;
		creators: Creator[];
		radio?: boolean;
		onchange?: ComponentProps<typeof FilterTag>["onchange"];
	}

	let { group, creators, onchange, radio = false }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each creators as creator}
		<FilterCreator {group} {creator} {radio} {onchange} />
	{/each}
</div>
