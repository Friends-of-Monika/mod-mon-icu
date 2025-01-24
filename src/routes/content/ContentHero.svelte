<script lang="ts">
	import { ChevronDoubleDown, Icon } from "svelte-hero-icons";
	import ContentHeroLink from "./ContentHeroLink.svelte";
</script>

<div
	class="mb-8 flex h-screen w-full flex-col place-content-center md:px-16 lg:h-[40vh] lg:justify-center">
	<h1 class="mb-4 text-center text-4xl md:text-start">Custom Monika After Story Content</h1>
	<p class="mb-6 text-center text-lg md:mb-4 md:text-start">
		Hello, [player]!~ 💚<br />
		Welcome to <span class="font-mono">mod.mon.icu</span>, a community-maintained listing of
		submods, spritepacks and all sorts of custom content 📦<br />
	</p>
	<p class="text-center text-xl md:text-start md:text-base">
		<ContentHeroLink href="https://github.com/friends-of-monika/mod-mon-icu">
			Github
		</ContentHeroLink>
		&bull;
		<ContentHeroLink href="https://github.com/friends-of-monika/mod-mon-icu/issues/new/choose">
			Suggest something new!
		</ContentHeroLink>
	</p>
	<p class="flex h-1/5 flex-row items-end justify-center lg:hidden">
		<Icon src={ChevronDoubleDown} class="inline h-6 w-6" />
	</p>
</div>
