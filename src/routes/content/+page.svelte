<script lang="ts">
	import SidebarLayout from "$components/layouts/SidebarLayout.svelte";
</script>

<SidebarLayout>
	{#snippet nav()}
		Hello World!
	{/snippet}

	{#snippet main()}{/snippet}
</SidebarLayout>
