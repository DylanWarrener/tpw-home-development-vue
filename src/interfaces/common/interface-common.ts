// COMMON
export default interface ICommonState {
	isCanvasComponentActive: boolean;
	isBeInspiredComponentActive: boolean;
	isPortfolioComponentActive: boolean;
	isReviewComponentActive: boolean;
	isProcessOfEliminationActive: boolean;
	isLatestNewsComponentActive: boolean;
}
export interface ICommonData {}

// HEADER

// PAGES
export interface ICommonPageServiceNames {
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
}
export interface ICommonPageServiceLinks extends ICommonPageServiceNames {}
export interface ICommonPageInfoNames {
	home: string;
	contact: string;
	about: string;
	news: string;
	reviews: string;
}
export interface ICommonPageInfoLinks extends ICommonPageInfoNames {}
export interface ICommonPageAllNames extends ICommonPageServiceNames, ICommonPageInfoNames {}
export interface ICommonPageAllLinks extends ICommonPageServiceLinks, ICommonPageInfoLinks {}

// FOOTER
