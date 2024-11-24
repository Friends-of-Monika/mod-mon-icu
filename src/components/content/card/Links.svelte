<script lang="ts">
	import {
		ArrowDownTray,
		ExclamationTriangle,
		Home,
		QuestionMarkCircle
	} from "svelte-hero-icons";
	import IconLink from "$components/icon/IconLink.svelte";

	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();

	const links = [
		{ href: content.links.download, src: ArrowDownTray, alt: "Download" },
		{ href: content.links.homepage, src: Home, alt: "Homepage" },
		{ href: content.links.support, src: QuestionMarkCircle, alt: "Get support" },
		{ href: content.links.issues, src: ExclamationTriangle, alt: "Report an issue" }
	];
</script>

<div class="flex flex-shrink flex-col flex-nowrap gap-2 pl-1">
	{#each links as { href, src, alt }}
		{#if href != null}
			<IconLink class="h-6 w-6 text-neutral-700 dark:text-white" {href} {src} {alt} />
		{/if}
	{/each}
</div>
