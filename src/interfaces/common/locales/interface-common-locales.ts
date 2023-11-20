// Common interfaces
import ICommonLocalesHeaderData from "@interfaces/common/locales/header/interfaces-common-locales-header";
import ICommonLocalesPagesData from "@interfaces/common/locales/pages/interfaces-common-locales-pages";
import ICommonLocalesSectionsData from "@interfaces/common/locales/sections/interfaces-common-locales-sections";
import ICommonLocalesCardsData from "@interfaces/common/locales/cards/interfaces-common-locales-cards";
import ICommonLocalesFooterData from "@interfaces/common/locales/footer/interfaces-common-locales-footer";

// Uncommon interfaces
import IUncommonLocalesIconsTextualData from "@interfaces/uncommon/locales/icons/interfaces-uncommon-locales-icons";

export default interface ICommonLocalesLanguageTextualData {
	en: ICommonLocalesVuetifyTextualData;
}

export interface ICommonLocalesVuetifyTextualData {
	$vuetify: ICommonLocalesAllTextualData;
}

export interface ICommonLocalesAllTextualData {
	common: ICommonLocalesTextualData;
	uncommon: IUncommonLocalesTextualData;
	[defaultText: symbol]: unknown;
}

export interface ICommonLocalesTextualData {
	header: ICommonLocalesHeaderData;
	pages: ICommonLocalesPagesData;
	sections: ICommonLocalesSectionsData;
	cards: ICommonLocalesCardsData;
	footer: ICommonLocalesFooterData;
}

export interface IUncommonLocalesTextualData {
	icons: IUncommonLocalesIconsTextualData;
}
