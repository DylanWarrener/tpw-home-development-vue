import {
	ICommonPageServiceNames,
	ICommonPageServiceLinks,
	ICommonPageInfoNames,
	ICommonPageInfoLinks,
	ICommonPageAllNames,
	ICommonPageAllLinks,
} from "@interfaces/common/pages/interface-common-page";

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
	...pageServiceNames,
	...pageInfoNames,
};

export const pageAllLinks: ICommonPageAllLinks = {
	...pageServiceLinks,
	...pageInfoLinks,
};
