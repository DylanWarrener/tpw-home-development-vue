import { ICommonPageCardTextualData } from "../page/interface-common-page";

export default interface ICommonCardTextualData {
	title?: string;
	subtitle?: string;
	btnText: string;
}

export interface ICommonCardPageTextualData {
	page: ICommonPageCardTextualData;
}

export interface ICommonCardContentForPageTextualData {
	title: string;
	subtitle: string;
	btnText: string;
}

export interface IHomeCardTextualData extends ICommonCardContentForPageTextualData {}

export interface IKitchenCardTextualData extends ICommonCardContentForPageTextualData {}

export interface IBathroomCardTextualData extends ICommonCardContentForPageTextualData {}

export interface INewbuildCardTextualData extends ICommonCardContentForPageTextualData {}

export interface IExtensionCardTextualData extends ICommonCardContentForPageTextualData {}

export interface IRefurbishmentCardTextualData extends ICommonCardContentForPageTextualData {}

export interface IContactCardTextualData extends ICommonCardContentForPageTextualData {}

export interface IAboutCardTextualData extends ICommonCardContentForPageTextualData {}
