<script lang="ts">
	import SidebarLayout from "$layouts/SidebarLayout.svelte";
	import ContentGrid from "$components/content/ContentGrid.svelte";
	import { content } from "$lib/content";
</script>

<SidebarLayout>
	{#snippet nav()}{/snippet}
	{#snippet main()}
		<ContentGrid {content} />
	{/snippet}
</SidebarLayout>
