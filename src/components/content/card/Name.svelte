<script lang="ts">
	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<h1 class="text-lg leading-tight">
	{content.name}
</h1>
