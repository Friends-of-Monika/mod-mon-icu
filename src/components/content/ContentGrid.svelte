<script lang="ts">
	import ContentCard from "./ContentCard.svelte";

	import type { Content } from "$lib/content";

	interface Props {
		content: Content[];
	}

	let { content }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-10 lg:grid-cols-4 lg:grid-rows-5">
	{#each content as it}
		<ContentCard content={it} />
	{/each}
</div>
