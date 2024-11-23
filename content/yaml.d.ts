declare module "$content/content.yml" {
	export interface ContentJsonObject {
		name: string;
		description: string;
		creators: string[];
		tags: string[];
		links: {
			download: string;
			issues?: string;
			support?: string;
			homepage?: string;
		};
	}

	type ContentJson = ContentJsonObject[];
	const value: ContentJson;
	export default value;
}

declare module "$content/tags.yml" {
	export interface TagJsonObject {
		name: string;
		css: string;
		priority?: number;
		flags?: string[];
	}

	type TagJson = Record<string, TagJsonObject>;
	const value: TagJson;
	export default value;
}

declare module "$content/creators.yml" {
	export interface CreatorJsonObject {
		name: string;
		links?: string[];
	}

	type CreatorJson = Record<string, CreatorJsonObject>;
	const value: CreatorJson;
	export default value;
}
