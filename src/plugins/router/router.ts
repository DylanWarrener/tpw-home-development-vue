import { createRouter, createWebHistory } from "vue-router";

// Utils
import { allPageNames, allPageLinks } from "@utils/text/utils-text";

// Child components -> dynamically imported (only imported when requested to reduce bundle size)
const Home = () => import("@pages/pages-home.vue");
const Kitchens = () => import("@pages/pages-kitchen.vue");
const Bathrooms = () => import("@pages/pages-bathroom.vue");
const Newbuilds = () => import("@pages/pages-newbuild.vue");
const Extensions = () => import("@pages/pages-extension.vue");
const Refurbishments = () => import("@pages/pages-refurbishment.vue");
const Contact = () => import("@pages/pages-contact.vue");
const About = () => import("@pages/pages-about.vue");
const News = () => import("@pages/pages-news.vue");
const Reviews = () => import("@pages/pages-reviews.vue");

// Routes
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: `${allPageLinks.home}`, name: `${allPageNames.home}`, component: Home },
		{ path: `${allPageLinks.kitchen}`, name: `${allPageNames.kitchen}`, component: Kitchens },
		{ path: `${allPageLinks.bathroom}`, name: `${allPageNames.bathroom}`, component: Bathrooms },
		{ path: `${allPageLinks.newbuild}`, name: `${allPageNames.newbuild}`, component: Newbuilds },
		{ path: `${allPageLinks.extension}`, name: `${allPageNames.extension}`, component: Extensions },
		{ path: `${allPageLinks.refurbishment}`, name: `${allPageNames.refurbishment}`, component: Refurbishments },
		{ path: `${allPageLinks.contact}`, name: `${allPageNames.contact}`, component: Contact },
		{ path: `${allPageLinks.about}`, name: `${allPageNames.about}`, component: About },
		{ path: `${allPageLinks.news}`, name: `${allPageNames.news}`, component: News },
		{ path: `${allPageLinks.reviews}`, name: `${allPageNames.reviews}`, component: Reviews },
		{ path: "/:notFound(.*)", name: "NotFound", redirect: "/" },
	],
	scrollBehavior(savedPosition) {
		let retVal;
		if (savedPosition) {
			retVal = savedPosition;
		} else {
			retVal = { top: 0 };
		}
		return retVal;
	},
});

export default router;
