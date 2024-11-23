<script lang="ts">
	import IconLink from "$components/icon/IconLink.svelte";
	import ContentAttribution from "$components/ContentAttribution.svelte";

	import {
		ArrowDownTray,
		ExclamationTriangle,
		Home,
		QuestionMarkCircle
	} from "svelte-hero-icons";
	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<div
	class="flex select-none flex-col rounded-md bg-white p-4 text-black drop-shadow-md dark:bg-neutral-700 dark:text-white">
	<div class="flex flex-row flex-nowrap">
		<div class="flex-grow">
			<h1 class="text-lg">{content.name}</h1>
			<span class="mb-1 text-xs">
				<ContentAttribution creators={content.creators} />
			</span>
			<p class="text-sm text-neutral-700 dark:text-neutral-400">
				{content.description}
			</p>
		</div>

		<div class="flex flex-shrink flex-col flex-nowrap gap-2 lg:flex-row">
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

			<IconLink
				class="h-6 w-6 text-neutral-700 dark:text-white"
				href={content.links.download}
				src={ArrowDownTray}
				alt="Download" />
		</div>
	</div>
</div>
