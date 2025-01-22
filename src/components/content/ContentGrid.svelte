<script lang="ts">
	import Masonry from "svelte-bricks";
	import ContentCard from "./ContentCard.svelte";

	import type { Content } from "$lib/content";

	interface Props {
		content: Content[];
	}

	let { content }: Props = $props();
</script>

<Masonry items={content} getId={(it: Content) => it.name} let:item>
	<ContentCard content={item} />
</Masonry>
