import IHeaderTextualData from "@src/interfaces/common/locales/header/interface-locale-header";
import IPageTextualData from "@src/interfaces/common/locales/body/interface-locale-page";
import ISectionTextualData from "@src/interfaces/common/locales/body/interface-locale-section";
import ICardTextualData from "@src/interfaces/common/locales/body/interface-locale-card";
import IDropdownTextualData from "@src/interfaces/common/locales/body/interface-locale-dropdown";
import ICarouselTextualData from "@src/interfaces/common/locales/body/interface-locale-carousel";
import IMainTextualData from "@src/interfaces/common/locales/body/interface-locale-main";
import IFooterTextualData from "@src/interfaces/common/locales/footer/interface-locale-footer";

// Vuetify interfaces
import {
	IDataIteratorTextualData,
	IDataTableTextualData,
	IDataFooterTextualData,
	IDataRangeTextualDataInput,
	IDatePickerTextualData,
	ICarouselVuetifyTextualData,
	ICalendarTextualData,
	IInputTextualData,
	IFileInputTextualData,
	ITimePickerTextualData,
	IPageinationTextualData,
	IStepperTextualData,
	IRatingTextualData,
	IInfiniteScrollTextualData,
} from "@src/interfaces/common/locales/body/interface-locale-vuetify";

export default interface ILocaleVuetifyTextualData {
	en: ITextualData;
}

export interface ITextualData {
	$vuetify: {
		header: IHeaderTextualData;
		pages: IPageTextualData;
		section: ISectionTextualData;
		card: ICardTextualData;
		dropdown: IDropdownTextualData;
		carousel: ICarouselTextualData;
		main: IMainTextualData;
		footer: IFooterTextualData;
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
