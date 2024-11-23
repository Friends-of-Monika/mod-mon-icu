<script lang="ts">
	import { Icon, type IconSource } from "svelte-hero-icons";

	interface Props {
		href: string;
		src: IconSource;
		class?: string;
		alt?: string;
	}

	const { href, src, class: _class = "", alt = "" }: Props = $props();
</script>

<a {href} aria-label={alt} title={alt}>
	<Icon {src} class={_class} />
</a>
