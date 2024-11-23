import { z } from "zod";

import creators from "$content/creators.yml";
import tags from "$content/tags.yml";
import content from "$content/content.yml";

export { creators, tags, content };

type TagJsonType = (typeof tags)[keyof typeof tags];
export interface Tag extends TagJsonType {}

type CreatorJsonType = (typeof creators)[keyof typeof creators];
export interface Creator extends CreatorJsonType {}

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
}

export const creatorsSchema = z.object({
	name: z.string().min(1),
	links: z.array(z.string().min(1)).optional()
});

export const tagsSchema = z.object({
	name: z.string().min(1),
	css: z.string().min(1),
	priority: z.number().int().optional(),
	flags: z.array(z.string().min(1)).optional()
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
	})
});
