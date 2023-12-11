export default interface IFooterState {
	footerData: IFooterStateData;
}
export interface IFooterStateData {
	message: string;
	btnText: string;
	logo: {
		src: string;
	};
	input: {
		label: string;
		placeholder: string;
	};
	navigation: {
		service: IFooterStateNavigationData;
		info: IFooterStateNavigationData;
	};
	contact: {
		addressLine1: string;
		addressLine2: string;
		addressLine3: string;
		email: string;
		number: string;
	};
	socials: {
		title: string;
		socialTitle: string;
		items: IFooterStateSocialItemsData;
	};
	copyright: {
		title: string;
		date: string;
		location: string;
	};
}
interface IFooterStateNavigationData {
	title: string;
	items: IFooterStateNavigationItemsData[];
}
interface IFooterStateNavigationItemsData {
	title: string;
	value: number;
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
export interface IFooterData {}
