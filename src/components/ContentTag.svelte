<script lang="ts">
	import type { Tag } from "$lib/content";

	interface Props {
		tag: Tag;
	}

	const { tag }: Props = $props();
</script>

<span class="rounded-full px-2 py-1 text-xs {tag.css}">{tag.name}</span>
