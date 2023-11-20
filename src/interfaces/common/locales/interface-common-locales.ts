// Interfaces
import ICommonLocalesHeaderData from "@interfaces/common/locales/header/interfaces-common-locales-header";
import ICommonLocalesPagesData from "@interfaces/common/locales/pages/interfaces-common-locales-pages";
import ICommonLocalesSectionsData from "@interfaces/common/locales/sections/interfaces-common-locales-sections";
import ICommonLocalesCardsData from "@interfaces/common/locales/cards/interfaces-common-locales-cards";
import ICommonLocalesFooterData from "@interfaces/common/locales/footer/interfaces-common-locales-footer";

export default interface ICommonLocalesTextualData {
	en: ICommonLocalesLanguageData;
}

export interface ICommonLocalesLanguageData {
	$vuetify: {
		common: ICommonLocalesData;
		uncommon: any;
		//badge: string;
		//open: string;
		//close: string;
		//dataIterator: IDataIteratorTextualData;
		//dataTable: IDataTableTextualData;
		//dataFooter: IDataFooterTextualData;
		//dateRangeInput: IDataRangeTextualDataInput;
		//datePicker: IDatePickerTextualData;
		//noDataText: string;
		//calendar: ICalendarTextualData;
		//input: IInputTextualData;
		//fileInput: IFileInputTextualData;
		//timePicker: ITimePickerTextualData;
		//pagination: IPageinationTextualData;
		//stepper: IStepperTextualData;
		//rating: IRatingTextualData;
		//loading: string;
		//infiniteScroll: IInfiniteScrollTextualData;
	};
}

export interface ICommonLocalesData {
	header: ICommonLocalesHeaderData;
	pages: ICommonLocalesPagesData;
	sections: ICommonLocalesSectionsData;
	cards: ICommonLocalesCardsData;
	footer: ICommonLocalesFooterData;
}
