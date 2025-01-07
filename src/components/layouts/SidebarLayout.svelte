<script lang="ts">
	import type { Snippet } from "svelte";
	import { fade } from "svelte/transition";

	import { Icon, Bars3, XMark } from "svelte-hero-icons";
	import clsx from "clsx";

	interface Props {
		nav: Snippet;
		main: Snippet;
	}

	let { nav, main }: Props = $props();
	let drawerOpen = $state(false);
</script>

<div class="flex flex-col md:flex-row">
	<nav
		class={clsx(
			"fixed z-20 h-screen w-4/5 bg-neutral-200 p-4 drop-shadow-md transition duration-100 md:static md:h-[initial] md:w-1/4 md:drop-shadow-none lg:w-1/6 dark:bg-neutral-900",
			{ "-translate-x-full": !drawerOpen, "md:translate-x-0": !drawerOpen }
		)}>
		<!-- Mobile only: button to toggle drawer -->
		<button
			class={clsx(
				"absolute bottom-[calc(env(safe-area-inset-bottom)+2rem)] left-full rounded-r-full p-4 text-neutral-400 transition duration-100 md:hidden",
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

		{@render nav()}
	</nav>

	<!-- Mobile only: background tint + click behavior for hiding drawer by tapping outside -->
	{#if drawerOpen}
		<!-- Button is still available as well. -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="fixed z-10 h-screen w-full bg-white/50 md:hidden dark:bg-black/50"
			in:fade={{ duration: 100 }}
			out:fade={{ duration: 100 }}
			onclick={() => (drawerOpen = false)}>
		</div>
	{/if}

	<main class="min-h-screen w-full bg-neutral-100 p-4 md:w-5/6 dark:bg-neutral-800">
		{@render main()}
	</main>
</div>
