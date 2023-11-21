import {
	ICommonPageServiceNames,
	ICommonPageServiceLinks,
	ICommonPageInfoNames,
	ICommonPageInfoLinks,
	ICommonPageAllNames,
	ICommonPageAllLinks,
} from "@interfaces/common/pages/interfaces-common-pages";

export const pageServiceNames: ICommonPageServiceNames = {
	kitchen: "kitchens",
	bathroom: "bathrooms",
	newbuild: "newbuilds",
	extension: "extensions",
	refurbishment: "refurbishments",
};
export const pageServiceNamesAsArrayKeys: string[] = Object.keys(pageServiceNames).map((key) => key);
export const pageServiceNamesAsArrayValues: string[] = Object.entries(pageServiceNames).map((array) => array[1]);

export const pageServiceLinks: ICommonPageServiceLinks = {
	kitchen: "/kitchens",
	bathroom: "/bathrooms",
	newbuild: "/newbuilds",
	extension: "/extensions",
	refurbishment: "/refurbishments",
};
export const pageServiceLinksAsArray: string[] = Object.keys(pageServiceLinks).map((key) => key);

export const pageInfoNames: ICommonPageInfoNames = {
	home: "home",
	contact: "contact",
	about: "about",
	news: "news",
	reviews: "reviews",
};
export const pageInfoNamesAsArrayKeys: string[] = Object.keys(pageInfoNames).map((key) => key);
export const pageInfoNamesAsArrayValues: string[] = Object.entries(pageInfoNames).map((array) => array[1]);

export const pageInfoLinks: ICommonPageInfoLinks = {
	home: "/",
	contact: "/contact",
	about: "/about",
	news: "/news",
	reviews: "/reviews",
};
export const pageInfoLinksAsArrayValues: string[] = Object.entries(pageInfoLinks).map((array) => array[1]);

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
export const pageAllNamesAsArrayKeys: string[] = Object.keys(pageAllNames).map((key) => key);
export const pageAllNamesAsArrayValues: string[] = Object.entries(pageAllNames).map((array) => array[1]);

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
export const pageAllLinksAsArrayValues: string[] = Object.entries(pageAllLinks).map((array) => array[1]);
