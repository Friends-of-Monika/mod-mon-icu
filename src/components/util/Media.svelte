<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	interface Props {
		query: string;
		matches: boolean;
	}

	let { query, matches = $bindable() }: Props = $props();
	let mql: MediaQueryList;

	onMount(() => {
		mql = matchMedia(query);
		mql.addEventListener("change", onMatchChange);
		matches = mql.matches;
	});

	onDestroy(() => {
		mql?.removeEventListener("change", onMatchChange);
	});

	function onMatchChange(e: MediaQueryListEvent) {
		matches = e.matches;
	}
</script>
