export default interface ICommonState {
	//// Utility
	asterisk: string;

	//// Sections
	isCanvasComponentActive: boolean;
	isBeInspiredComponentActive: boolean;
	isPortfolioComponentActive: boolean;
	isLatestReviewsComponentActive: boolean;
	isProcessOfEliminationActive: boolean;
	isLatestNewsComponentActive: boolean;
	// Be-inspired
	dropdownOptions: string[];
	availableKitchenStyles: ICommonAvailableStyles[];
	availableBathroomStyles: ICommonAvailableStyles[];
	availableNewbuildStyles: ICommonAvailableStyles[];
	availableExtensionStyles: ICommonAvailableStyles[];
	availableRefurbishmentStyles: ICommonAvailableStyles[];

	//// Forms
	forms: ICommonFormsData;
}
export interface ICommonData {}

//// Forms
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

//// Dialogs
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

//// Sections
export interface ICommonAvailableStyles {
	src: string;
	alt: string;
}
