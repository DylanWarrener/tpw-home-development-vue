import {
	ICommonPageServiceNames,
	ICommonPageInfoNames,
	ICommonPageServiceLinks,
	ICommonPageInfoLinks,
	ICommonPageAllNames,
	ICommonPageAllLinks,
} from "@interfaces/common/interface-common";

// PAGES
export const pageServiceNames: ICommonPageServiceNames = {
	kitchen: "Kitchens",
	bathroom: "Bathrooms",
	newbuild: "Newbuilds",
	extension: "Extensions",
	refurbishment: "Refurbishments",
};
export const pageServiceLinks: ICommonPageServiceLinks = {
	kitchen: "/kitchens",
	bathroom: "/bathrooms",
	newbuild: "/newbuilds",
	extension: "/extensions",
	refurbishment: "/refurbishments",
};
export const pageInformationNames: ICommonPageInfoNames = {
	home: "Home",
	contact: "Contact",
	about: "About",
	news: "News",
	reviews: "Reviews",
};
export const pageInformationLinks: ICommonPageInfoLinks = {
	home: "/",
	contact: "/contact",
	about: "/about",
	news: "/news",
	reviews: "/reviews",
};
export const allPageNames: ICommonPageAllNames = {
	...pageServiceNames,
	...pageInformationNames,
};
export const allPageLinks: ICommonPageAllLinks = {
	...pageServiceLinks,
	...pageInformationLinks,
};

// CARD
export const cardBtnBeInspiredText: string = "Be Inspired?";

// DROPDOWN
export const dropdownOptionsText: string[] = [
	pageServiceNames.kitchen,
	pageServiceNames.bathroom,
	pageServiceNames.newbuild,
	pageServiceNames.extension,
	pageServiceNames.refurbishment,
];
