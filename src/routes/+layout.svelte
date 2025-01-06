<script lang="ts">
	import { page } from "$app/stores";
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	{#if $page.data.title != null}
		<title>{$page.data.title} • mod.mon.icu</title>
	{/if}
</svelte:head>

{@render children()}

<style lang="postcss">
	:global(body) {
		@apply bg-neutral-100 dark:bg-neutral-900;
	}
</style>
