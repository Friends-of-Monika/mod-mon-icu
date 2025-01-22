<script lang="ts">
	import ContentHeroLink from "./ContentHeroLink.svelte";
</script>

<div
	class="mb-8 flex h-[50vh] w-full flex-col place-content-center md:h-[initial] md:place-content-start">
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
		<ContentHeroLink href="https://github.com/friends-of-monika/mod-mon-icu/issues/new">
			Suggest something new!
		</ContentHeroLink>
	</p>
</div>
