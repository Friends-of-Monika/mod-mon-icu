<script lang="ts">
	import { onMount } from "svelte";

	import type { Content } from "$lib/content";
	import { getVersion } from "$lib/integrations";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
	let promise: Promise<string | null> | undefined = $state();

	onMount(() => (promise = getVersion(content)));
</script>

{#await promise then version}
	<span class="text-sm text-neutral-500 dark:text-neutral-400">
		{version}
	</span>
{/await}
