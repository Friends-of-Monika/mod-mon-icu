<script lang="ts">
	import SidebarLayout from "$layouts/SidebarLayout.svelte";
	import { content } from "$lib/content";
</script>

<SidebarLayout>
	{#snippet nav()}{/snippet}
	{#snippet main()}{/snippet}
</SidebarLayout>
