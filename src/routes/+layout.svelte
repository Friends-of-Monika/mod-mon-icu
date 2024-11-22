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
		@apply bg-white dark:bg-neutral-800;
	}
</style>
