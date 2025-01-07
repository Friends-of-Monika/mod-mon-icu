<script lang="ts">
	import { TextFilter, type FilterGroup } from "$lib/filter";

	interface Props {
		group: FilterGroup;
		placeholder?: string;
	}

	let { group, placeholder }: Props = $props();
	let filter = $state(new TextFilter());
	let query = $state("");

	$effect(() => {
		group.removeFilter(filter);
		filter.text = query;
		if (filter.text.length) {
			group.addFilter(filter);
		}
	});
</script>

<input
	class="w-full rounded-md bg-white px-4 py-2 text-black !outline-none dark:bg-neutral-700 dark:text-white"
	{placeholder}
	type="text"
	bind:value={query} />
