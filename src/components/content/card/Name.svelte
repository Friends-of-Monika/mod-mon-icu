<script lang="ts">
	import Version from "./Version.svelte";

	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<h1 class="text-lg leading-tight">
	<span>{content.name}</span>
	<Version {content} />
</h1>
