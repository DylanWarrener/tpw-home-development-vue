// ---------------------------------------------------------------------------------------------------------
// SERVICE PAGES
// ---------------------------------------------------------------------------------------------------------
export interface ICommonPageServiceNames {
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
}
export interface ICommonPageServiceLinks extends ICommonPageServiceNames {}
export interface ICommonPageServiceIcons extends ICommonPageServiceNames {}

// ---------------------------------------------------------------------------------------------------------
// INFO PAGES
// ---------------------------------------------------------------------------------------------------------
export interface ICommonPageInfoNames {
	home: string;
	contact: string;
	about: string;
	news: string;
	reviews: string;
}
export interface ICommonPageInfoLinks extends ICommonPageInfoNames {}
export interface ICommonPageInfoIcons extends ICommonPageInfoNames {}

// All
export interface ICommonPageAllNames extends ICommonPageServiceNames, ICommonPageInfoNames {}
export interface ICommonPageAllLinks extends ICommonPageServiceLinks, ICommonPageInfoLinks {}
export interface ICommonPageAllIcons extends ICommonPageServiceIcons, ICommonPageInfoIcons {}
