<script lang="ts">
	import { onMount } from "svelte";

	import type { Content } from "$lib/content";
	import { getDownloads } from "$lib/integrations";
	import { ArrowDownTray, Icon } from "svelte-hero-icons";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
	let promise: Promise<string | null> | undefined = $state();

	onMount(() => (promise = getDownloads(content)));
</script>

{#await promise then downloads}
	{#if downloads != null}
		<span
			class="inline-flex -translate-y-0.5 gap-1 text-xs text-neutral-800 dark:text-neutral-200">
			<Icon src={ArrowDownTray} class="h-4 w-4" />
			{downloads}
		</span>
	{/if}
{/await}
