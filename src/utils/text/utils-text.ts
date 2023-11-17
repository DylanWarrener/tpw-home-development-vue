//import { ICommonCarouselDropdownItemsTextualData } from "../../interfaces/common/carousel/interface-common-carousel";
import { ICommonMainPageNames } from "@interfaces/common/interface-common";

/* Common */
//// Card
export const btnCardBeInspiredText = "Be Inspired?";
export const btnCardReviewsText = "See all reviews?";

//// Navigation
// Common
export const mainPageNames: ICommonMainPageNames = {
	kitchen: "Kitchens",
	bathroom: "Bathrooms",
	newbuild: "Newbuilds",
	extension: "Extensions",
	refurbishment: "Refurbishments",
};
export const mainPageLinks = {
	kitchen: "/kitchens",
	bathroom: "/bathrooms",
	newbuild: "/newbuilds",
	extension: "/extensions",
	refurbishment: "/refurbishments",
};
export const infoPageNames = {
	home: "Home",
	contact: "Contact",
	about: "About",
	news: "News",
	reviews: "Reviews",
};
export const infoPageLinks = {
	home: "/",
	contact: "/contact",
	about: "/about",
	news: "/news",
	reviews: "/reviews",
};
export const allPageNames = {
	...mainPageNames,
	...infoPageNames,
};
export const allPageLinks = {
	...mainPageLinks,
	...infoPageLinks,
};

//// Carousel
// Dropdown items
export const dropdownOptions = [
	mainPageNames.kitchen,
	mainPageNames.bathroom,
	mainPageNames.newbuild,
	mainPageNames.extension,
	mainPageNames.refurbishment,
];

/* Header */
//// Icon names
export const headerIconNames = {
	menu: "menu",
	search: "search",
	theme: "theme",
	newAccount: "newAccount",
	account: "account",
	settings: "settings",
};

/* Body */

/* Footer */
