import { SvelteSet } from "svelte/reactivity";
import type { Content, Tag } from "$lib/content";

export interface Filter {
	match(content: Content): boolean;
}

export class FilterGroup implements Filter {
	private readonly filters = new SvelteSet<Filter>();

	addFilter(filter: Filter) {
		this.filters.add(filter);
	}

	removeFilter(filter: Filter) {
		this.filters.delete(filter);
	}

	hasFilter(filter: Filter): boolean {
		return this.filters.has(filter);
	}

	toggleFilter(filter: Filter) {
		if (!this.hasFilter(filter)) {
			this.addFilter(filter);
		} else {
			this.removeFilter(filter);
		}
	}

	removeAll() {
		this.filters.clear();
	}

	match(content: Content): boolean {
		if (this.filters.size === 0) {
			return true;
		}

		return [...this.filters].find((it) => !it.match(content)) === undefined;
	}
}

export class TagFilter implements Filter {
	private readonly tag: Tag;

	constructor(tag: Tag) {
		this.tag = tag;
	}

	match(content: Content): boolean {
		return content.tags.includes(this.tag);
	}
}

export class TextFilter implements Filter {
	text: string = "";

	match(content: Content): boolean {
		return (
			content.name.toLowerCase().includes(this.text.toLowerCase()) ||
			content.description.toLowerCase().includes(this.text.toLowerCase())
		);
	}
}
