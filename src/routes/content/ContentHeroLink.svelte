<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		href: string;
		children?: Snippet;
	}

	const { href, children }: Props = $props();
</script>

<a
	class="underline decoration-black/0 underline-offset-4 transition hover:decoration-black
           dark:decoration-white/0 dark:hover:decoration-white"
	{href}>
	{@render children?.()}
</a>
