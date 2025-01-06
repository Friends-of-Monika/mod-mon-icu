<script lang="ts">
	import FilterTag from "$components/content/FilterTag.svelte";
	import type { FilterGroup } from "$lib/filter";
	import type { Tag } from "$lib/content";

	interface Props {
		group: FilterGroup;
		tags: Tag[];
	}

	let { group, tags }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each tags as tag}
		<FilterTag {group} {tag} />
	{/each}
</div>
