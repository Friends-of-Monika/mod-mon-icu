<script lang="ts">
	import { ChevronLeft, ChevronRight, Icon, type IconSource } from "svelte-hero-icons";

	interface Props {
		currentPage: number;
		totalPages: number;
	}

	let { currentPage = $bindable(), totalPages }: Props = $props();

	function nextPage() {
		if (currentPage + 1 <= totalPages) {
			currentPage = currentPage + 1;
		}
	}

	function prevPage() {
		if (currentPage - 1 > 0) {
			currentPage = currentPage - 1;
		}
	}
</script>

<div class="flex flex-row justify-center">
	<div class="grid grid-cols-3 grid-rows-1 gap-4">
		<div class="flex items-center justify-center">
			{#if currentPage > 1}
				{@render button(ChevronLeft, prevPage)}
			{/if}
		</div>
		<div class="flex items-center justify-center">
			{@render button(currentPage)}
		</div>
		<div class="flex items-center justify-center">
			{#if currentPage < totalPages}
				{@render button(ChevronRight, nextPage)}
			{/if}
		</div>
	</div>
</div>

{#snippet button(numberOrIcon: number | IconSource, onclick?: () => void)}
	<button
		class="flex aspect-square h-12 w-12 items-center justify-center rounded-md bg-white dark:bg-neutral-700"
		disabled={onclick == null}
		{onclick}>
		<span class="text-center text-xl">
			{#if typeof numberOrIcon === "number"}
				{numberOrIcon}
			{:else}
				<Icon src={numberOrIcon} class="h-6 w-6" />
			{/if}
		</span>
	</button>
{/snippet}
