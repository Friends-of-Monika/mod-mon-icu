<script lang="ts">
	import FilterTag from "$components/content/FilterTag.svelte";
	import type { FilterGroup, TagFilter } from "$lib/filter";
	import type { Tag } from "$lib/content";

	interface Props {
		group: FilterGroup;
		tags: Tag[];
		onchange?: (e: CustomEvent<ChangeEventDetail>) => void;
	}

	interface ChangeEventDetail {
		target: TagFilter;
		selected: boolean;
	}

	let { group, tags, onchange }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each tags as tag}
		<FilterTag {group} {tag} {onchange} />
	{/each}
</div>
