import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: {
		files: ["./src/**/*.{html,js,svelte,ts}", "./content/*.yml"]
	},

	theme: {
		extend: {}
	},

	plugins: [typography]
} satisfies Config;
