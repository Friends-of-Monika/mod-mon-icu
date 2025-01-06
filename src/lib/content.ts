import { z } from "zod";

import creators, { type CreatorJsonObject } from "$content/creators.yml";
import tags, { type TagJsonObject } from "$content/tags.yml";
import content from "$content/content.yml";

export interface Tag extends TagJsonObject {}
export interface Creator extends CreatorJsonObject {}

const creatorsRemapped = creators as Record<string, Creator>;
const tagsRemapped = tags as Record<string, Tag>;
const merged = mergeContent();

export { creatorsRemapped as creators };
export { tagsRemapped as tags };
export { merged as content };

export interface Content {
	name: string;
	description: string;
	creators: Creator[];
	tags: Tag[];
	links: {
		download: string;
		issues?: string;
		support?: string;
		homepage?: string;
	};
	integrations?: {
		github?: {
			owner: string;
			repo: string;
			downloads: boolean;
			latestUpdate: boolean;
			latestVersion: boolean;
		};
	};
}

export const creatorsSchema = z.object({
	name: z.string().min(1),
	links: z.array(z.string().min(1)).optional()
});

export const tagsSchema = z.object({
	name: z.string().min(1),
	css: z.string().min(1),
	category: z.boolean().default(false).optional()
});

export const contentSchema = z.object({
	name: z.string().min(1),
	description: z.string().min(1),
	creators: z.array(z.string().min(1)).min(1),
	tags: z.array(z.string().min(1)).min(1),
	links: z.object({
		download: z.string().min(1),
		issues: z.string().min(1).optional(),
		support: z.string().min(1).optional(),
		homepage: z.string().min(1).optional()
	}),
	integrations: z
		.object({
			github: z
				.object({
					owner: z.string().min(1),
					repo: z.string().min(1),
					downloads: z.boolean().optional(),
					latestUpdate: z.boolean().optional(),
					latestVersion: z.boolean().optional()
				})
				.optional()
		})
		.optional()
});

function mergeContent(): Content[] {
	return content.map((co) => ({
		...co,
		creators: co.creators.map((cr) => creatorsRemapped[cr]).filter(Boolean),
		tags: co.tags.map((t) => tagsRemapped[t]).filter(Boolean)
	}));
}
