// Interfaces
import {
	ICommonPageServiceNames,
	ICommonPageInfoNames,
	ICommonPageServiceLinks,
	ICommonPageInfoLinks,
	ICommonPageAllNames,
	ICommonPageAllLinks,
} from "@interfaces/common/interface-common";
import { IHeaderIconNames } from "@src/interfaces/common/header/interface-common-header";	

// HEADER
export const headerIconNames: IHeaderIconNames = {
	menu: "menu",
	search: "search",
	theme: "theme",
	newAccount: "newAccount",
	account: "account",
	settings: "settings",
};

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
export const pageInfoNames: ICommonPageInfoNames = {
	home: "Home",
	contact: "Contact",
	about: "About",
	news: "News",
	reviews: "Reviews",
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

// CARD
export const cardBtnBeInspired: string = "Be Inspired?";

// DROPDOWN
export const dropdownOptions: string[] = [
	pageServiceNames.kitchen,
	pageServiceNames.bathroom,
	pageServiceNames.newbuild,
	pageServiceNames.extension,
	pageServiceNames.refurbishment,
];

// FOOTER
