<script lang="ts">
	import SidebarLayout from "$layouts/SidebarLayout.svelte";
	import ContentGrid from "$components/content/ContentGrid.svelte";
	import CategorySection from "$components/content/CategorySection.svelte";
	import FilterTagGroup from "$components/content/FilterTagGroup.svelte";

	import { categoryTags, content } from "$lib/content";
	import { FilterGroup } from "$lib/filter";

	const categoryFilterGroup = $state(new FilterGroup());

	const masterFilter = $state(new FilterGroup());
	masterFilter.addFilter(categoryFilterGroup);

	let contentFiltered = $derived(content.filter((it) => masterFilter.match(it)));
</script>

<SidebarLayout>
	{#snippet nav()}
		<h2 class="mb-4 text-2xl">Filter content</h2>
		<CategorySection title="By category">
			<FilterTagGroup group={categoryFilterGroup} tags={categoryTags} />
		</CategorySection>
	{/snippet}

	{#snippet main()}
		<ContentGrid content={contentFiltered} />
	{/snippet}
</SidebarLayout>
