<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		title: string;
		children?: Snippet;
	}

	const { title, children }: Props = $props();
</script>

<div class="mb-4">
	<h3 class="mb-4 text-xl">{title}</h3>
	{@render children?.()}
</div>
