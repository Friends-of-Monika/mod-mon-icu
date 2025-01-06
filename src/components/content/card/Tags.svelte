<script lang="ts">
	import tinycolor from "tinycolor2";
	import type { Content, Tag } from "$lib/content";

	interface Props {
		content: Content;
	}

	let { content }: Props = $props();
</script>

<div class="flex flex-row flex-wrap gap-2 empty:hidden">
	{#each content.tags as item}
		{@render tag(item)}
	{/each}
</div>

{#snippet tag(item: Tag)}
	{@const buttonBgColor = item.color}
	{@const buttonTextColor = tinycolor(item.color).isLight() ? "black" : "white"}

	<span
		class="rounded-full bg-[var(--bg-color)] px-2 py-1 text-xs text-[var(--text-color)]"
		style="--bg-color: {buttonBgColor}; --text-color: {buttonTextColor};">
		{item.name}
	</span>
{/snippet}
