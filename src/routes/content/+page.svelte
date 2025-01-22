<script lang="ts">
	import SidebarLayout from "$layouts/SidebarLayout.svelte";

	import ContentGrid from "$components/content/ContentGrid.svelte";
	import FilterSection from "$components/content/FilterSection.svelte";
	import FilterTagGroup from "$components/content/FilterTagGroup.svelte";
	import FilterText from "$components/content/FilterText.svelte";
	import ContentHero from "./ContentHero.svelte";

	import { content, categoryTags, labelTags } from "$lib/content";
	import { FilterGroup } from "$lib/filter";

	const textFilterGroup = $state(new FilterGroup());
	const categoryFilterGroup = $state(new FilterGroup());
	const tagFilterGroup = $state(new FilterGroup());

	const masterFilter = $state(new FilterGroup());
	masterFilter.addFilter(textFilterGroup);
	masterFilter.addFilter(categoryFilterGroup);
	masterFilter.addFilter(tagFilterGroup);

	let contentFiltered = $derived(content.filter((it) => masterFilter.match(it)));
</script>

<SidebarLayout>
	{#snippet nav()}
		<h2 class="mb-4 text-2xl">Filter content</h2>
		<FilterSection title="Search">
			<FilterText group={textFilterGroup} placeholder="Search for content..." />
		</FilterSection>
		<FilterSection title="Category">
			<FilterTagGroup group={categoryFilterGroup} tags={Object.values(categoryTags)} />
		</FilterSection>
		<FilterSection title="Tag">
			<FilterTagGroup group={tagFilterGroup} tags={Object.values(labelTags)} />
		</FilterSection>
	{/snippet}
	{#snippet main()}
		<ContentHero />
		<div class="flex min-h-screen w-full flex-col gap-4">
			<ContentGrid content={contentFiltered} />
		</div>
	{/snippet}
</SidebarLayout>
