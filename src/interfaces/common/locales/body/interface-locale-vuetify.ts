import ICarouselTextualData from "@src/interfaces/common/locales/body/interface-locale-carousel";

// Vuetify built in: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/locale/en.ts
export interface IDataIteratorTextualData {
	noResultsText: string;
	loadingText: string;
}

export interface IDataTableTextualData {
	itemsPerPageText: string;
	ariaLabel: IDataTableAriaLabelsTextualData;
	sortBy: string;
}

export interface IDataTableAriaLabelsTextualData {
	sortDescending: string;
	sortAscending: string;
	sortNone: string;
	activateNone: string;
	activateDescending: string;
	activateAscending: string;
}

export interface IDataFooterTextualData {
	itemsPerPageText: string;
	itemsPerPageAll: string;
	nextPage: string;
	prevPage: string;
	firstPage: string;
	lastPage: string;
	pageText: string;
}

export interface IDataRangeTextualDataInput {
	divider: string;
}

export interface IDatePickerTextualData {
	ok: string;
	cancel: string;
	range: IDataPickerRangeTextualData;
	title: string;
	header: string;
	input: IDataPickerInputTextualData;
}

export interface IDataPickerRangeTextualData {
	title: string;
	header: string;
}

export interface IDataPickerInputTextualData {
	placeholder: string;
}

export interface ICarouselVuetifyTextualData extends ICarouselTextualData {
	prev: string;
	next: string;
	ariaLabel: ICarouselVuetifyAriaLabelTextualData;
}

export interface ICarouselVuetifyAriaLabelTextualData {
	delimiter: string;
}

export interface ICalendarTextualData {
	moreEvents: string;
}

export interface IInputTextualData {
	clear: string;
	prependAction: string;
	appendAction: string;
	otp: string;
}

export interface IFileInputTextualData {
	counter: string;
	counterSize: string;
}

export interface ITimePickerTextualData {
	am: string;
	pm: string;
}

export interface IPageinationTextualData {
	ariaLabel: IPageinationAriaLabelsTextualData;
}

export interface IPageinationAriaLabelsTextualData {
	root: string;
	next: string;
	previous: string;
	page: string;
	currentPage: string;
	first: string;
	last: string;
}

export interface IStepperTextualData {
	next: string;
	prev: string;
}

export interface IRatingTextualData {
	ariaLabel: IRatingAriaLabelsTextualData;
}

export interface IRatingAriaLabelsTextualData {
	item: string;
}

export interface IInfiniteScrollTextualData {
	loadMore: string;
	empty: string;
}
