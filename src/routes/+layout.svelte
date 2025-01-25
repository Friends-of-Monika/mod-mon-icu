<script lang="ts">
	import { MetaTags } from "svelte-meta-tags";

	import { page } from "$app/state";
	import "../app.css";

	let { children } = $props();
</script>

<MetaTags
	title={page.data.title}
	titleTemplate={page.data.title != null ? "%s • mod.mon.icu" : undefined}
	description={page.data.description}
	openGraph={{
		type: "website",
		title: page.data.title,
		description: page.data.description,
		url: page.url.href,
		locale: "en_US",
		siteName: "mod.mon.icu"
	}} />

<svelte:head>
	<!-- Discord embed color -->
	<meta name="theme-color" content="#aad27c">
</svelte:head>

{@render children()}

<style lang="postcss">
	:global(body) {
		@reference "tailwindcss/theme";
		@apply bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white;
	}
</style>
