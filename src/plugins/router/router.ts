import { createRouter, createWebHistory } from "vue-router";

// Utils
import { pageServiceNames, pageInfoNames, pageServiceLinks, pageInfoLinks } from "@utils/text/common/utils-text-common";

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
		{ path: `${pageInfoLinks.home}`, name: `${pageInfoNames.home}`, component: Home },
		{ path: `${pageServiceLinks.kitchen}`, name: `${pageServiceNames.kitchen}`, component: Kitchens },
		{ path: `${pageServiceLinks.bathroom}`, name: `${pageServiceNames.bathroom}`, component: Bathrooms },
		{ path: `${pageServiceLinks.newbuild}`, name: `${pageServiceNames.newbuild}`, component: Newbuilds },
		{ path: `${pageServiceLinks.extension}`, name: `${pageServiceNames.extension}`, component: Extensions },
		{ path: `${pageServiceLinks.refurbishment}`, name: `${pageServiceNames.refurbishment}`, component: Refurbishments },
		{ path: `${pageInfoLinks.contact}`, name: `${pageInfoNames.contact}`, component: Contact },
		{ path: `${pageInfoLinks.about}`, name: `${pageInfoNames.about}`, component: About },
		{ path: `${pageInfoLinks.news}`, name: `${pageInfoNames.news}`, component: News },
		{ path: `${pageInfoLinks.reviews}`, name: `${pageInfoNames.reviews}`, component: Reviews },
		{ path: "/:notFound(.*)", name: "NotFound", redirect: "/" },
	],
	scrollBehavior(to, savedPosition) {
		let retVal;
		if (savedPosition) {
			retVal = savedPosition;
		} else {
			if (to.hash) {
				retVal = {
					el: to.hash,
					behavior: "smooth",
				};
			} else {
				retVal = {
					top: 0,
					behavior: "smooth",
				};
			}
		}
		return retVal;
	},
});

export default router;
