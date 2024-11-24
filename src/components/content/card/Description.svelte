<script lang="ts">
	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<p class="text-sm text-neutral-700 dark:text-neutral-400">
	{content.description}
</p>
