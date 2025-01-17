import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

// export const load: PageServerLoad = async () => ({ title: "Home" });
export const load: PageServerLoad = async () => {
	return await redirect(301, "/content");
};
