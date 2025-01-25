<script lang="ts">
	import type { Snippet } from "svelte";
	import { fade } from "svelte/transition";

	import { Icon, Bars3, XMark } from "svelte-hero-icons";
	import clsx from "clsx";

	import { getCssVar } from "$lib/css";

	import Media from "$components/util/Media.svelte";
	import ClientOnly from "$components/util/ClientOnly.svelte";

	interface Props {
		nav: Snippet;
		main: Snippet;
	}

	let { nav, main }: Props = $props();

	let isScreenLg = $state(false);
	let drawerOpen = $state(false);
	let scrollY = $state(0);
	let drawerY = $derived(isScreenLg ? scrollY : 0);

	$effect(() => {
		if (drawerOpen) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	});
</script>

<svelte:window bind:scrollY />
<ClientOnly>
	<!-- Ensure that sidebar only slides on >=lg breakpoint -->
	<Media query="(min-width: {getCssVar('--breakpoint-lg')})" bind:matches={isScreenLg} />
</ClientOnly>

<div class="flex flex-col overflow-y-hidden md:flex-row">
	<nav
		class={clsx(
			"fixed z-20 h-screen w-4/5 bg-neutral-200 p-4 pr-0 drop-shadow-md transition duration-100 md:w-2/5 md:drop-shadow-none lg:static lg:h-[initial] lg:w-1/6 dark:bg-neutral-900",
			{ "-translate-x-full lg:translate-x-0": !drawerOpen }
		)}>
		<!-- Mobile only: button to toggle drawer -->
		<button
			class={clsx(
				"absolute bottom-[calc(env(safe-area-inset-bottom)+8vh)] left-full rounded-r-full p-4 text-neutral-400 transition duration-100 lg:hidden",
				{
					"bg-neutral-200/50 dark:bg-neutral-900/50": !drawerOpen,
					"bg-neutral-200 dark:bg-neutral-900": drawerOpen
				}
			)}
			onclick={() => (drawerOpen = !drawerOpen)}>
			{#if !drawerOpen}
				<Icon src={Bars3} class="h-6 w-6" />
			{:else}
				<Icon src={XMark} class="h-6 w-6" />
			{/if}
		</button>

		<div
			class="h-screen overflow-y-auto pr-4 pb-[10vh] transition duration-75 sm:pb-0"
			style="transform: translateY({drawerY}px);">
			{@render nav()}
		</div>
	</nav>

	<!-- Mobile only: background tint + click behavior for hiding drawer by tapping outside -->
	{#if drawerOpen}
		<!-- Button is still available as well. -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="fixed z-10 h-screen w-full bg-white/50 lg:hidden dark:bg-black/50"
			in:fade={{ duration: 100 }}
			out:fade={{ duration: 100 }}
			onclick={() => (drawerOpen = false)}>
		</div>
	{/if}

	<main class="min-h-screen w-full bg-neutral-100 p-4 dark:bg-neutral-800">
		{@render main()}
	</main>
</div>
