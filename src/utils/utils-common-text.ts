import { ICommonPageStringTextualData, ICommonPageDropdownTextualData } from "../interfaces/common/page/interface-common-page";

// Card
export const btnCardText = "Be Inspired?";

// Page
export const pageNameData: ICommonPageStringTextualData = {
	home: "Home",
	kitchen: "Kitchens",
	bathroom: "Bathrooms",
	newbuild: "Newbuilds",
	extension: "Extensions",
	refurbishment: "Refurbishments",
	contact: "Contact",
	about: "About",
};

export const pageDropdownData: ICommonPageDropdownTextualData = {
	kitchen: pageNameData.kitchen,
	bathroom: pageNameData.bathroom,
	newbuild: pageNameData.newbuild,
	extension: pageNameData.extension,
	refurbishment: pageNameData.refurbishment,
};
