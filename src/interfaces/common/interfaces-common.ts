export default interface ICommonState {
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
export interface ICommonData {}

//// Header
//// Body
// Forms
export interface ICommonFormsData {
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
	title: string;
	message: string;
	src: string;
	showDialog: boolean;
	icon: ICommonSignUpNewsletterDialogIcon;
	form: ICommonSignUpNewsletterDialogFormCredentials;
}
export interface ICommonSignUpNewsletterDialogIcon {
	mdi: string;
	tooltip: string;
	showTooltip: boolean;
}
export interface ICommonSignUpNewsletterDialogFormCredentials {
	firstName: ICommonSignUpNewsletterDialogFormCredentialsData;
	lastName: ICommonSignUpNewsletterDialogFormCredentialsData;
	emailAddress: ICommonSignUpNewsletterDialogFormCredentialsData;
}
export interface ICommonSignUpNewsletterDialogFormCredentialsData {
	label: string;
}
// Sections
export interface ICommonAvailableStyles {
	src: string;
	alt: string;
}
//// Footer
