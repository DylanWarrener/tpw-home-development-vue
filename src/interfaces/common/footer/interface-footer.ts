export default interface IFooterTextualData {}

export interface IFooterState {
	data: {
		firstCol: IFooterFirstColData;
		secondCol: IFooterSecondColData;
		thirdCol: IFooterThirdColData;
	};
}
// First col
export interface IFooterFirstColData {
	src: any;
	message: string;
	input: {
		label: string;
		placeholder: string;
	};
	btnText: string;
}
// Second col
export interface IFooterSecondColData {
	pageNavItems: {
		title: string;
		items: IFooterSecondColNavForPageData[];
	};
	infoNavItems: {
		title: string;
		items: IFooterSecondColNavForInfoData[];
	};
}
interface IFooterSecondColNavCommonData {
	title: string;
	value: number;
}
interface IFooterSecondColNavForPageData extends IFooterSecondColNavCommonData {}
interface IFooterSecondColNavForInfoData extends IFooterSecondColNavCommonData {}
// Third col
export interface IFooterThirdColData {
	title: string;
	addressLine1: string;
	addressLine2: string;
	addressLine3: string;
	email: string;
	number: string;
	socialTitle: string;
	socials: IFooterThirdColSocialsData[];
}
interface IFooterThirdColSocialsData {
	name: string;
	link: string;
	icon: string;
}

export interface IFooterData {}
