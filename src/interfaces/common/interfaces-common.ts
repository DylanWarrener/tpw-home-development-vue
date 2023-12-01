import { StoreDefinition } from "pinia";

export default interface ICommonStore extends StoreDefinition<"common-store", ICommonState, ICommonGetters, ICommonActions> {}
export interface ICommonState {
	//// Header
	appBarHeight: number;

	//// Body
	// Utility
	asterisk: string;
	// Forms
	forms: ICommonFormsData;
	// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;
	// Sections
	isCanvasComponentActive: boolean;
	isBeInspiredComponentActive: boolean;
	isPortfolioComponentActive: boolean;
	isLatestReviewsComponentActive: boolean;
	isProcessOfEliminationActive: boolean;
	isLatestNewsComponentActive: boolean;
	// Sections - be-inspired
	dropdownOptions: string[];
	availableKitchenStyles: ICommonAvailableStyles[];
	availableBathroomStyles: ICommonAvailableStyles[];
	availableNewbuildStyles: ICommonAvailableStyles[];
	availableExtensionStyles: ICommonAvailableStyles[];
	availableRefurbishmentStyles: ICommonAvailableStyles[];
	//// Footer
}
export interface ICommonGetters {
	//// Header
	getAppBarHeight: (state: ICommonState) => number;

	//// Body
	// Utility
	getAsterisk;
	getFormsData;
	getSignUpNewsletterDialogData;
	getDropdownOptions;
	getIsCanvasComponentActive;
	getIsBeInspiredComponentActive;
	getIsPortfolioComponentActive;
	getIsLatestNewsComponentActive;
	getIsProcessOfEliminationActive;
	getIsLatestReviewsComponentActive;
	getAvailableKitchenStyles;
	getAvailableBathroomStyles;
	getAvailableNewbuildStyles;
	getAvailableExtensionStyles;
	getAvailableRefurbishmentStyles;
}
export interface ICommonActions {
	//// Header
	setAppBarHeight;

	//// Body
	// Utility
	setFormsData;
	// Dialogs
	setSignUpNewsletterDialogData;
	// Be-Inspired
	setDropdownOptions;
	// Sections
	setIsCanvasComponentActive;
	setIsBeInspiredComponentActive;
	setIsPortfolioComponentActive;
	setIsLatestNewsComponentActive;
	setIsProcessOfEliminationActive;
	setIsLatestReviewsComponentActive;
	setAvailableKitchenStyles;
	setAvailableBathroomStyles;
	setAvailableNewbuildStyles;
	setAvailableExtensionStyles;
	setAvailableRefurbishmentStyles;
}
export interface ICommonData {}

//// Header
//// Body
// Forms
export interface ICommonFormsData {
	messageInfo: string;
	signUp: ICommonFormsSignUpData;
}
export interface ICommonFormsSignUpData {
	title: ICommonFormsSignUpTitleData;
	newsletter: ICommonFormsSignUpNewsletterData;
	password: ICommonFormsPropertiesPasswordData;
	dateOfBirth: ICommonFormsPropertiesData;
	telephone: ICommonFormsPropertiesData;
	address: ICommonFormsPropertiesData;
	postcode: ICommonFormsPropertiesData;
}
export interface ICommonFormsSignUpTitleData {
	titles: string[];
	label: string;
}
export interface ICommonFormsSignUpNewsletterData {
	name: ICommonFormsSignUpNameData;
	email: ICommonFormsPropertiesData;
}
export interface ICommonFormsSignUpNameData {
	firstname: ICommonFormsPropertiesData;
	lastname: ICommonFormsPropertiesData;
}
export interface ICommonFormsPropertiesData {
	label: string;
	placeholder: string;
}
export interface ICommonFormsPropertiesPasswordData extends ICommonFormsPropertiesData {
	repeat: ICommonFormsPropertiesData;
}
// Dialogs
export interface ICommonSignUpNewsletterDialogData {
	src: string;
	showDialog: boolean;
	toolbar: ICommonSignUpNewsLetterDialogToolbarData;
}
export interface ICommonSignUpNewsLetterDialogToolbarData {
	title: string;
	message: string;
	icon: ICommonSignUpNewsletterDialogIcon;
}
export interface ICommonSignUpNewsletterDialogIcon {
	mdi: string;
	tooltip: string;
	showTooltip: boolean;
}
// Sections
export interface ICommonAvailableStyles {
	src: string;
	alt: string;
}
//// Footer
