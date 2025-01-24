<script lang="ts">
	import type { ComponentProps } from "svelte";

	import FilterTag from "$components/content/FilterTag.svelte";

	import type { FilterGroup } from "$lib/filter";
	import type { Content, Tag } from "$lib/content";

	interface Props {
		group: FilterGroup;
		tags: Tag[];
		content?: Content[];
		radio?: boolean;
		onchange?: ComponentProps<typeof FilterTag>["onchange"];
	}

	let { group, tags, content, onchange, radio = false }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2">
	{#each tags as tag}
		<FilterTag {group} {tag} {content} {radio} {onchange} />
	{/each}
</div>
