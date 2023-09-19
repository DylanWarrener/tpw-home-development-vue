//import { ICommonCarouselDropdownItemsTextualData } from "../../interfaces/common/carousel/interface-common-carousel";
import { ICommonPageStringTextualData } from "../../interfaces/common/page/interface-common-page";

/* Common */
// Card
export const btnCardBeInspiredText = "Be Inspired?";
export const btnCardReviewsText = "See all reviews?";

//// Navigation
// Common
export const mainPageNames = {
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

// Page names
export const pageNames: ICommonPageStringTextualData = {
	home: "Home",
	kitchen: "Kitchens",
	bathroom: "Bathrooms",
	newbuild: "Newbuilds",
	extension: "Extensions",
	refurbishment: "Refurbishments",
	contact: "Contact",
	about: "About",
	news: "News",
	reviews: "Reviews",
};
// Page links
export const pageLinks = {
	home: "/",
	kitchen: "/kitchens",
	bathroom: "/bathrooms",
	newbuild: "/newbuilds",
	extension: "/extensions",
	refurbishment: "/refurbishments",
	contact: "/contact",
	about: "/about",
	news: "/news",
	reviews: "/reviews",
};

//// Carousel
// Dropdown items
export const carouselDropdownItems: string[] = [
	pageNames.kitchen,
	pageNames.bathroom,
	pageNames.newbuild,
	pageNames.extension,
	pageNames.refurbishment,
];

/* Header */
// Icon names
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
