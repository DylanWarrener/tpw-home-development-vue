export default interface IFooterTextualData {
	navigation: IFooterNavigationTextualData;
	copyrightText: string;
	location: string;
}

/* FOOTER - NAVIGATION */
interface IFooterNavigationTextualData {
	pageItems: IFooterNavigationPageItems;
	infoItems: IFooterNavigationInfoItems;
}

interface IFooterNavigatonCommonPageItemsTextualData {
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
}

interface IFooterNavigationCommonInfoItemsTextualData {
	home: string;
	contact: string;
	about: string;
	news: string;
	reviews: string;
}

interface IFooterNavigationCommonItemsTextualData {
	names: IFooterNavigationCommonPageItemNames | IFooterNavigationCommonInfoItemNames;
	links: IFooterNavigationCommonPageItemLinks | IFooterNavigationCommonInfoItemLinks;
}

interface IFooterNavigationCommonPageItemNames extends IFooterNavigatonCommonPageItemsTextualData {}
interface IFooterNavigationCommonInfoItemNames extends IFooterNavigationCommonInfoItemsTextualData {}
interface IFooterNavigationCommonPageItemLinks extends IFooterNavigatonCommonPageItemsTextualData {}
interface IFooterNavigationCommonInfoItemLinks extends IFooterNavigationCommonInfoItemsTextualData {}

// FOOTER - NAVIGATION - PAGE ITEMS
interface IFooterNavigationPageItems extends IFooterNavigationCommonItemsTextualData {}

// FOOTER - NAVIGATION - INFO ITEMS
interface IFooterNavigationInfoItems extends IFooterNavigationCommonItemsTextualData {}
