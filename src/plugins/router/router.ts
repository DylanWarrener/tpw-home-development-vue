import { createRouter, createWebHistory } from "vue-router";

// Child components -> dynamically imported (only imported when requested to reduce bundle size)
const Home = () => import("../../pages/pages-home.vue");
const Kitchens = () => import("../../pages/pages-kitchen.vue");
const Bathrooms = () => import("../../pages/pages-bathroom.vue");
const Newbuilds = () => import("../../pages/pages-newbuild.vue");
const Extensions = () => import("../../pages/pages-extension.vue");
const Refurbishments = () => import("../../pages/pages-refurbishment.vue");
const Contact = () => import("../../pages/pages-contact.vue");
const About = () => import("../../pages/pages-about.vue");
const News = () => import("../../pages/pages-news.vue");

// Routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: Home },
        { path: "/kitchens", name: "Kitchens", component: Kitchens },
        { path: "/bathrooms", name: "Bathrooms", component: Bathrooms },
        { path: "/newbuilds", name: "Newbuilds", component: Newbuilds },
        { path: "/extensions", name: "Extensions", component: Extensions },
        { path: "/refurbishments", name: "Refurbishments", component: Refurbishments },
        { path: "/contact", name: "Contact", component: Contact },
        { path: "/about", name: "About", component: About },
        { path: "/news", name: "News", component: News },
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
