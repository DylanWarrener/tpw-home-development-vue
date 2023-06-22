import { ICommonCarouselDropdownItemsTextualData } from "../interfaces/common/carousel/interface-common-carousel";
import { ICommonPageStringTextualData } from "../interfaces/common/page/interface-common-page";

// Card
export const btnCardText = "Be Inspired?";

// Page
export const pageName: ICommonPageStringTextualData = {
	home: "Home",
	kitchen: "Kitchens",
	bathroom: "Bathrooms",
	newbuild: "Newbuilds",
	extension: "Extensions",
	refurbishment: "Refurbishments",
	contact: "Contact",
	about: "About",
};

export const carouselDropdownItems: string[] = [
	pageName.kitchen,
	pageName.bathroom,
	pageName.newbuild,
	pageName.extension,
	pageName.refurbishment,
];
