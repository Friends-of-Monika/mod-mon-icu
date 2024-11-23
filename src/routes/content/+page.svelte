<script lang="ts">
	import SidebarLayout from "$layouts/SidebarLayout.svelte";
	import ContentGrid from "$components/ContentGrid.svelte";
	import { content } from "$lib/content";
</script>

<SidebarLayout>
	{#snippet nav()}{/snippet}
	{#snippet main()}
		<ContentGrid {content} />
	{/snippet}
</SidebarLayout>
