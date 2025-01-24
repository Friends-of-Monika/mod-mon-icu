<script lang="ts">
	import clsx from "clsx";
	import type { Snippet } from "svelte";
	import { slide } from "svelte/transition";

	interface Props {
		title: string;
		children?: Snippet;
	}

	const { title, children }: Props = $props();
	let expanded = $state(true);
</script>

<div class={clsx({ "mb-4": expanded })}>
	<button class="mb-4 cursor-pointer text-xl" onclick={() => (expanded = !expanded)}>
		{title}
	</button>
	{#if expanded}
		<div
			class="pb-4"
			in:slide={{ axis: "y", duration: 50 }}
			out:slide={{ axis: "y", duration: 50 }}>
			{@render children?.()}
		</div>
	{/if}
</div>
