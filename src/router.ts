import { createRouter, createWebHistory } from "vue-router";

// Child components
import Home from "./pages/pages-home.vue";
import Kitchens from "./pages/pages-kitchen.vue";
import Bathrooms from "./pages/pages-bathroom.vue";
import Newbuilds from "./pages/pages-newbuild.vue";
import Extensions from "./pages/pages-extension.vue";
import Refurbishments from "./pages/pages-refurbishment.vue";
import Contact from "./pages/pages-contact.vue";
import About from "./pages/pages-about.vue";

// Routes
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "Home", component: Home },
		{ path: "/kitchens", name: "Kitchen", component: Kitchens },
		{ path: "/bathrooms", name: "Bathroom", component: Bathrooms },
		{ path: "/newbuilds", name: "Newbuild", component: Newbuilds },
		{ path: "/extensions", name: "Extension", component: Extensions },
		{ path: "/refurbishments", name: "Refurbishment", component: Refurbishments },
		{ path: "/contact", name: "Contact", component: Contact },
		{ path: "/about", name: "About", component: About },
		{ path: "/:notFound(.*)", name: "NotFound", redirect: "/" },
	],
	/*
    scrollBehavior(to, from, savedPosition) {
        // To: the route I want to go to
        // From: the route I came from
        // SavedPosition: the saved top a& bottom corrdinates before going to new route
    },
  */
});

export default router;
