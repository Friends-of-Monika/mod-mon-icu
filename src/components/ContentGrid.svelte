<script lang="ts">
	import ContentCard from "$components/ContentCard.svelte";
	import type { Content } from "$lib/content";

	interface Props {
		content: Content[];
	}

	const { content }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
	{#each content as it}
		<ContentCard content={it} />
	{/each}
</div>
