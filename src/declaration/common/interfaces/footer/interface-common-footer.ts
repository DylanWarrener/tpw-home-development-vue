export default interface IFooterState {
	footerData: IFooterStateData;
}
export interface IFooterStateData {
	icons: {
		backToTop: {
			icon: string;
			tooltip: string;
			showTooltip: boolean;
		};
	};
	top: IFooterStateTopSectionData;
	middle: IFooterStateMiddleSectionData;
	bottom: IFooterStateBottomSectionData;
}
export interface IFooterStateTopSectionData {
	logo: {
		src: string;
	};
	socials: {
		title: string;
		items: IFooterStateSocialItemsData;
	};
}
interface IFooterStateSocialItemsData {
	facebook: IFooterStateSocialItemsInfoData;
	instagram: IFooterStateSocialItemsInfoData;
	linkedIn: IFooterStateSocialItemsInfoData;
	twitter: IFooterStateSocialItemsInfoData;
	youtube: IFooterStateSocialItemsInfoData;
}
interface IFooterStateSocialItemsInfoData {
	icon: string;
	link: string;
	tooltip: string;
}
export interface IFooterStateMiddleSectionData {
	contact: {
		title: string;
		address: {
			icon: string;
			line1: string;
			line2: string;
			line3: string;
		};
		email: IFooterStateMiddleSectionPropertiesData;
		number: IFooterStateMiddleSectionPropertiesData;
	};
	navigation: {
		service: IFooterStateNavigationData;
		information: IFooterStateNavigationData;
	};
}
interface IFooterStateMiddleSectionPropertiesData {
	icon: string;
	value: string;
}
interface IFooterStateNavigationData {
	title: string;
	items: string[];
}
export interface IFooterStateBottomSectionData {
	copyright: {
		title: string;
		location: string;
	};
}
export interface IFooterData {}
