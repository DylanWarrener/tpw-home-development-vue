import { createRouter, createWebHistory } from "vue-router";

// Utils
import { pageServiceNames, pageInfoNames, pageServiceLinks, pageInfoLinks } from "@constants/common/objects/constants-common-utils-objects";

// Child components -> dynamically imported (only imported when requested to reduce bundle size)
const Home = () => import("@pages/info/page-home.vue");
const Kitchens = () => import("@pages/service/page-kitchen.vue");
const Bathrooms = () => import("@pages/service/page-bathroom.vue");
const Newbuilds = () => import("@pages/service/page-newbuild.vue");
const Extensions = () => import("@pages/service/page-extension.vue");
const Refurbishments = () => import("@pages/service/page-refurbishment.vue");
const Contact = () => import("@pages/info/page-contact.vue");
const About = () => import("@pages/info/page-about.vue");
const News = () => import("@pages/info/page-news.vue");
const Reviews = () => import("@pages/info/page-reviews.vue");

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
