import ICommonPageTextualData from "../../common/page/interface-common-page";

// Vue-i18n localization textual data
export default interface IHeaderNavigationTextualData {
	page: ICommonPageTextualData;
}

// Vue local data interfaces
export interface ICommonNavigationData {
	navigation: ICommonNavigationListItems[];
}

export interface ICommonNavigationListItems {
	id: number;
	title: string;
	icon: string;
	link: string;
}
