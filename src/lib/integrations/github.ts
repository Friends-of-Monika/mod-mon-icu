import type { Content } from "$lib/content";

async function getFromShields(url: string): Promise<string | null> {
	const res = await fetch(`https://shields.io${url}`);
	if (res.status !== 200) {
		console.error("Failed to get from shields.io: ", res);
		return null;
	}

	const svg = await res.text();
	const match = /<title>[^:]+:\s*([^<]+)<\/title>/.exec(svg);
	return match?.[1] ?? null;
}

export async function getDownloads(content: Content): Promise<string | null> {
	const config = content.integrations?.github;
	if (!config || !config.downloads)
		throw new Error("Content does not support github.downloads integration.");
	return await getFromShields(`/github/downloads/${config.owner}/${config.repo}/total`);
}

export async function getLatestVersion(content: Content): Promise<string | null> {
	const config = content.integrations?.github;
	if (!config || !config.downloads)
		throw new Error("Content does not support github.latestVersion integration.");
	return await getFromShields(`/github/v/tag/${config.owner}/${config.repo}`);
}

export async function getLatestUpdate(content: Content): Promise<string | null> {
	const config = content.integrations?.github;
	if (!config || !config.downloads)
		throw new Error("Content does not support github.latestUpdate integration.");
	return await getFromShields(`/github/release-date/${config.owner}/${config.repo}`);
}
