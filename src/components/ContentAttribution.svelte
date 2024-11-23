<script lang="ts">
	import type { Creator } from "$lib/content";

	interface Props {
		creators: Creator[];
	}

	const { creators }: Props = $props();
</script>

By
{#each creators as creator, i}
	{#if i > 0 && i + 1 < creators.length},{/if}
	{#if i > 0 && i + 1 >= creators.length}and{/if}
	<b>{creator.name}</b>
{/each}
