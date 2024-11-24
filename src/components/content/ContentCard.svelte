<script lang="ts">
	import Name from "./card/Name.svelte";
	import Creators from "./card/Creators.svelte";
	import Description from "./card/Description.svelte";
	import Links from "./card/Links.svelte";
	import Tags from "./card/Tags.svelte";

	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<div
	class="flex select-none flex-col justify-between gap-2 rounded-md bg-white p-4 text-black drop-shadow-md dark:bg-neutral-700 dark:text-white">
	<div class="flex flex-row flex-nowrap">
		<div class="flex flex-grow flex-col gap-1">
			<Name {content} />
			<Creators {content} />
			<Description {content} />
		</div>
		<div class="flex flex-shrink flex-col flex-nowrap gap-2">
			<Links {content} />
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<Tags {content} />
	</div>
</div>
