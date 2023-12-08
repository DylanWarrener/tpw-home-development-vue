// Interfaces
import {
	ICommonPageServiceNames,
	ICommonPageServiceLinks,
	ICommonPageInfoNames,
	ICommonPageInfoLinks,
	ICommonPageAllNames,
	ICommonPageAllLinks,
} from "@declaration/common/interfaces/pages/interface-common-pages";

// ---------------------------------------------------------------------------------------------------------
// PAGES
// ---------------------------------------------------------------------------------------------------------
export const pageServiceNames: ICommonPageServiceNames = {
	kitchen: "kitchens",
	bathroom: "bathrooms",
	newbuild: "newbuilds",
	extension: "extensions",
	refurbishment: "refurbishments",
};
export const pageServiceLinks: ICommonPageServiceLinks = {
	kitchen: "/kitchens",
	bathroom: "/bathrooms",
	newbuild: "/newbuilds",
	extension: "/extensions",
	refurbishment: "/refurbishments",
};
export const pageInfoNames: ICommonPageInfoNames = {
	home: "home",
	contact: "contact",
	about: "about",
	news: "news",
	reviews: "reviews",
};
export const pageInfoLinks: ICommonPageInfoLinks = {
	home: "/",
	contact: "/contact",
	about: "/about",
	news: "/news",
	reviews: "/reviews",
};
export const pageAllNames: ICommonPageAllNames = {
	home: pageInfoNames.home,
	kitchen: pageServiceNames.kitchen,
	bathroom: pageServiceNames.bathroom,
	newbuild: pageServiceNames.newbuild,
	extension: pageServiceNames.extension,
	refurbishment: pageServiceNames.refurbishment,
	contact: pageInfoNames.contact,
	news: pageInfoNames.news,
	reviews: pageInfoNames.reviews,
	about: pageInfoNames.about,
};
export const pageAllLinks: ICommonPageAllLinks = {
	home: pageInfoLinks.home,
	kitchen: pageServiceLinks.kitchen,
	bathroom: pageServiceLinks.bathroom,
	newbuild: pageServiceLinks.newbuild,
	extension: pageServiceLinks.extension,
	refurbishment: pageServiceLinks.refurbishment,
	contact: pageInfoLinks.contact,
	news: pageInfoLinks.news,
	reviews: pageInfoLinks.reviews,
	about: pageInfoLinks.about,
};
