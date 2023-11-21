import {
	ICommonPageServiceNames,
	ICommonPageServiceLinks,
	ICommonPageInfoNames,
	ICommonPageInfoLinks,
	ICommonPageAllNames,
	ICommonPageAllLinks,
} from "@src/interfaces/common/pages/interfaces-common-page";

export const pageServiceNames: ICommonPageServiceNames = {
	kitchen: "kitchens",
	bathroom: "bathrooms",
	newbuild: "newbuilds",
	extension: "extensions",
	refurbishment: "refurbishments",
};
export const pageServiceNamesAsArray: string[] = Object.keys(pageServiceNames).map((key) => key);

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
export const pageInfoNamesAsArray: string[] = Object.keys(pageInfoNames).map((key) => key);

export const pageInfoLinks: ICommonPageInfoLinks = {
	home: "/",
	contact: "/contact",
	about: "/about",
	news: "/news",
	reviews: "/reviews",
};
export const pageInfoLinksAsArray: string[] = Object.keys(pageInfoLinks).map((key) => key);

export const pageAllNames: ICommonPageAllNames = {
	...pageServiceNames,
	...pageInfoNames,
};
export const pageAllNamesAsArray: string[] = Object.keys(pageAllNames).map((key) => key);

export const pageAllLinks: ICommonPageAllLinks = {
	...pageServiceLinks,
	...pageInfoLinks,
};
export const pageAllLinksAsArray: string[] = Object.keys(pageAllLinks).map((key) => key);
