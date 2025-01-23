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

	const downloads = await getFromShields(
		`/github/downloads/${config.owner}/${config.repo}/total`
	);

	if (downloads === "no releases found") return null;
	return downloads;
}

export async function getLatestVersion(content: Content): Promise<string | null> {
	const config = content.integrations?.github;
	if (!config || !config.latestVersion)
		throw new Error("Content does not support github.latestVersion integration.");

	const version = await getFromShields(`/github/v/tag/${config.owner}/${config.repo}`);
	if (version === "no releases found") return null;
	return version;
}

export async function getLatestUpdate(content: Content): Promise<string | null> {
	const config = content.integrations?.github;
	if (!config || !config.downloads)
		throw new Error("Content does not support github.latestUpdate integration.");

	const update = await getFromShields(`/github/release-date/${config.owner}/${config.repo}`);
	if (update === "no releases found") return null;
	return update;
}
