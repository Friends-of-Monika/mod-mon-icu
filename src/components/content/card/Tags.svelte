<script lang="ts">
	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<div class="flex flex-row flex-wrap gap-2 empty:hidden">
	{#each content.tags as tag}
		<span class="rounded-full px-2 py-1 text-xs {tag.css}">
			{tag.name}
		</span>
	{/each}
</div>
