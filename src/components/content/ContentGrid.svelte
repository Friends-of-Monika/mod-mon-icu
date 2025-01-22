<script lang="ts">
	import Masonry from "svelte-bricks";
	import ContentCard from "./ContentCard.svelte";

	import type { Content } from "$lib/content";

	interface Props {
		content: Content[];
	}

	let { content }: Props = $props();
</script>

<Masonry
	items={content}
	idKey="name"
	class="justify-start"
	animate={false}
	maxColWidth={420}
	gap={10}
	let:item>
	<ContentCard content={item} />
</Masonry>
