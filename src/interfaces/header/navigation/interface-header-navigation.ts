import ICommonPageTextualData from "../../common/page/interface-common-page";

// Vue-i18n localization textual data
export default interface IHeaderNavigationTextualData {
    page: ICommonPageTextualData;
}

// Vue local data interfaces
export interface ICommonNavigationData {
    navigation: ICommonNavigationItem[];
}

export interface ICommonNavigationItem {
    title: string;
    icon: string;
    link: string;
}
