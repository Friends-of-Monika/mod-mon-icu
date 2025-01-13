<script lang="ts">
	import SidebarLayout from "$layouts/SidebarLayout.svelte";
	import ContentGrid from "$components/content/ContentGrid.svelte";
	import FilterSection from "$components/content/FilterSection.svelte";
	import FilterTagGroup from "$components/content/FilterTagGroup.svelte";
	import FilterText from "$components/content/FilterText.svelte";
	import PageSelector from "$components/content/PageSelector.svelte";

	import { content, categoryTags, labelTags } from "$lib/content";
	import { FilterGroup } from "$lib/filter";

	const textFilterGroup = $state(new FilterGroup());
	const categoryFilterGroup = $state(new FilterGroup());
	const tagFilterGroup = $state(new FilterGroup());

	const masterFilter = $state(new FilterGroup());
	masterFilter.addFilter(textFilterGroup);
	masterFilter.addFilter(categoryFilterGroup);
	masterFilter.addFilter(tagFilterGroup);

	const pageSize = 20;

	let contentFiltered = $derived(content.filter((it) => masterFilter.match(it)));
	let currentPage = $state(1);
	let totalPages = $derived(Math.ceil(contentFiltered.length / pageSize));
	let contentPage = $derived(getPage(contentFiltered, currentPage, pageSize));

	function getPage<T>(array: T[], pageNumber: number, pageSize: number): T[] {
		const startIndex = (pageNumber - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return array.slice(startIndex, endIndex);
	}

	function resetPage() {
		currentPage = 1;
	}
</script>

<SidebarLayout>
	{#snippet nav()}
		<h2 class="mb-4 text-2xl">Filter content</h2>
		<FilterSection title="Search">
			<FilterText
				group={textFilterGroup}
				placeholder="Search for content..."
				onchange={() => resetPage()} />
		</FilterSection>
		<FilterSection title="Category">
			<FilterTagGroup
				group={categoryFilterGroup}
				tags={Object.values(categoryTags)}
				onchange={() => resetPage()} />
		</FilterSection>
		<FilterSection title="Tag">
			<FilterTagGroup
				group={tagFilterGroup}
				tags={Object.values(labelTags)}
				onchange={() => resetPage()} />
		</FilterSection>
	{/snippet}
	{#snippet main()}
		<div class="flex h-full w-full flex-col gap-4">
			<ContentGrid content={contentPage} />
			<PageSelector bind:currentPage {totalPages} />
		</div>
	{/snippet}
</SidebarLayout>
