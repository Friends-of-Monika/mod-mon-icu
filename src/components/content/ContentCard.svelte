<script lang="ts">
	import Name from "./card/Name.svelte";
	import Creators from "./card/Creators.svelte";
	import Description from "./card/Description.svelte";
	import Links from "./card/Links.svelte";
	import Tags from "./card/Tags.svelte";
	import Downloads from "./card/Downloads.svelte";
	import Version from "./card/Version.svelte";

	import type { Content } from "$lib/content";

	interface Props {
		content: Content;
	}

	const { content }: Props = $props();
</script>

<div
	class="flex h-full select-none flex-col justify-between gap-2 rounded-md bg-white p-4
		   text-black drop-shadow-md dark:bg-neutral-700 dark:text-white">
	<div class="flex flex-row flex-nowrap">
		<div class="flex flex-grow flex-col gap-1">
			<div class="flex flex-row flex-wrap items-end gap-x-2 gap-y-0.5">
				<Name {content} />
				<Version {content} />
				<Downloads {content} />
			</div>
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
