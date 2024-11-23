<script lang="ts">
	import IconLink from "$components/icon/IconLink.svelte";
	import ContentAttribution from "$components/ContentAttribution.svelte";
	import {
		ArrowDownTray,
		ExclamationTriangle,
		Home,
		QuestionMarkCircle
	} from "svelte-hero-icons";

	import type { Content, tags } from "$lib/content";
	import ContentTag from "./ContentTag.svelte";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<div
	class="flex select-none flex-col justify-between gap-2 rounded-md bg-white p-4 text-black drop-shadow-md dark:bg-neutral-700 dark:text-white">
	<div class="flex flex-row flex-nowrap">
		<div class="flex-grow">
			{@render title()}
		</div>
		<div class="flex flex-shrink flex-col flex-nowrap gap-2">
			{@render links()}
		</div>
	</div>
	<div class="flex flex-row flex-wrap gap-2">
		{@render tags()}
	</div>
</div>

{#snippet title()}
	<h1 class="mb-2 text-lg leading-tight">{content.name}</h1>
	<p class="mb-1 text-xs leading-tight dark:text-neutral-300">
		<ContentAttribution creators={content.creators} />
	</p>
	<p class="text-sm text-neutral-700 dark:text-neutral-400">
		{content.description}
	</p>
{/snippet}

{#snippet links()}
	<IconLink
		class="h-6 w-6 text-neutral-700 dark:text-white"
		href={content.links.download}
		src={ArrowDownTray}
		alt="Download" />

	{#if content.links.homepage}
		<IconLink
			class="h-6 w-6 text-neutral-700 dark:text-white"
			href={content.links.homepage}
			src={Home}
			alt="Homepage" />
	{/if}

	{#if content.links.support}
		<IconLink
			class="h-6 w-6 text-neutral-700 dark:text-white"
			href={content.links.support}
			src={QuestionMarkCircle}
			alt="Get support" />
	{/if}

	{#if content.links.issues}
		<IconLink
			class="h-6 w-6 text-neutral-700 dark:text-white"
			href={content.links.issues}
			src={ExclamationTriangle}
			alt="Report an issue" />
	{/if}
{/snippet}

{#snippet tags()}
	{#each content.tags as tag}
		<ContentTag {tag} />
	{/each}
{/snippet}
