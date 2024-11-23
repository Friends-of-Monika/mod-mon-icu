import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import yaml from "@modyfi/vite-plugin-yaml";

export default defineConfig({
	plugins: [yaml(), sveltekit()],
	// Otherwise won't import .yml from /content in dev
	server: { fs: { allow: ["content"] } }
});
