<script lang="ts">
	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<p class="text-xs leading-tight dark:text-neutral-300">
	By
	{#each content.creators as creator, i}
		{#if i > 0 && i + 1 < content.creators.length},{/if}
		{#if i > 0 && i + 1 >= content.creators.length}and{/if}
		<b>{creator.name}</b>
	{/each}
</p>
