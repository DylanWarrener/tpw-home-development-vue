//import { ICommonCarouselDropdownItemsTextualData } from "../../interfaces/common/carousel/interface-common-carousel";
import { ICommonPageStringTextualData } from "../../interfaces/common/page/interface-common-page";

// Card
export const btnCardBeInspiredText = "Be Inspired?";
export const btnCardReviewsText = "See all reviews?";

// Page
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

// Carousel
export const carouselDropdownItems: string[] = [
	pageNames.kitchen,
	pageNames.bathroom,
	pageNames.newbuild,
	pageNames.extension,
	pageNames.refurbishment,
];

// Icon names
export const headerIconNames = {
	menu: "menu",
	newAccount: "newAccount",
	account: "account",
	settings: "settings",
	search: "search",
	theme: "theme",
};
