<script lang="ts">
	import SidebarLayout from "$layouts/SidebarLayout.svelte";
	import ContentGrid from "$components/content/ContentGrid.svelte";
	import FilterSection from "$components/content/FilterSection.svelte";
	import FilterTagGroup from "$components/content/FilterTagGroup.svelte";

	import { categoryTags, content } from "$lib/content";
	import { FilterGroup } from "$lib/filter";
	import FilterText from "$components/content/FilterText.svelte";

	const categoryFilterGroup = $state(new FilterGroup());
	const textFilterGroup = $state(new FilterGroup());

	const masterFilter = $state(new FilterGroup());
	masterFilter.addFilter(categoryFilterGroup);
	masterFilter.addFilter(textFilterGroup);

	let contentFiltered = $derived(content.filter((it) => masterFilter.match(it)));
</script>

<SidebarLayout>
	{#snippet nav()}
		<h2 class="mb-4 text-2xl">Filter content</h2>
		<FilterSection title="Search by name or description">
			<FilterText group={textFilterGroup} />
		</FilterSection>
		<FilterSection title="By category">
			<FilterTagGroup group={categoryFilterGroup} tags={categoryTags} />
		</FilterSection>
	{/snippet}

	{#snippet main()}
		<ContentGrid content={contentFiltered} />
	{/snippet}
</SidebarLayout>
