import type { Content } from "$lib/content";
import * as github from "./github.js";

export async function getVersion(content: Content): Promise<string | null> {
	if (content.integrations?.github?.latestVersion) return await github.getLatestVersion(content);
	return null;
}

export async function getLatestUpdate(content: Content): Promise<string | null> {
	if (content.integrations?.github?.latestUpdate) return await github.getLatestUpdate(content);
	return null;
}

export async function getDownloads(content: Content): Promise<string | null> {
	if (content.integrations?.github?.downloads) return await github.getDownloads(content);
	return null;
}
