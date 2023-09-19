import IHeaderTextualData from "@interfaces/common/locale/header/interface-locale-header";
import IPageTextualData from "@interfaces/common/locale/body/interface-locale-page";
import ISectionTextualData from "@interfaces/common/locale/body/interface-locale-section";
import ICardTextualData from "@interfaces/common/locale/body/interface-locale-card";
import IDropdownTextualData from "@interfaces/common/locale/body/interface-locale-dropdown";
import ICarouselTextualData from "@interfaces/common/locale/body/interface-locale-carousel";
import IMainTextualData from "@interfaces/common/locale/body/interface-locale-main";
import IFooterTextualData from "@interfaces/common/locale/footer/interface-locale-footer";

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
} from "@interfaces/common/locale/body/interface-locale-vuetify";

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
