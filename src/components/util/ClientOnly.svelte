<script lang="ts">
	import { onDestroy, onMount, type Snippet } from "svelte";

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
	let mounted = $state(false);

	onMount(() => (mounted = true));
	onDestroy(() => (mounted = false));
</script>

{#if mounted}
	{@render children?.()}
{/if}
