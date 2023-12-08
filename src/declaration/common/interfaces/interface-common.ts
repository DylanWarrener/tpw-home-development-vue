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
	formsData: ICommonFormsData;
}
export interface ICommonData {}

// ---------------------------------------------------------------------------------------------------------
// DIALOGS
// ---------------------------------------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------------------------------------
export interface ICommonAvailableStyles {
	src: string;
	alt: string;
}

// ---------------------------------------------------------------------------------------------------------
// FORMS
// ---------------------------------------------------------------------------------------------------------
export interface ICommonFormsData {
	signUp: {
		title: {
			titles: string[];
			label: string;
			value: string;
		};
		newsletter: ICommonFormsSignUpNewsletterData;
		password: ICommonFormsSignUpPasswordData;
		dateOfBirth: ICommonFormsSignUpPropertiesData;
		telephone: ICommonFormsSignUpPropertiesData;
		address: ICommonFormsSignUpPropertiesData;
		postcode: ICommonFormsSignUpPropertiesData;
	};
}
export interface ICommonFormsSignUpNewsletterData {
	name: {
		firstname: ICommonFormsSignUpPropertiesData;
		lastname: ICommonFormsSignUpPropertiesData;
	};
	email: ICommonFormsSignUpPropertiesData;
}
export interface ICommonFormsSignUpPropertiesData {
	label: string;
	placeholder: string;
	value: string;
}
export interface ICommonFormsSignUpPasswordData extends ICommonFormsSignUpPropertiesData {
	repeat: ICommonFormsSignUpPropertiesData;
}
export interface ICommonFormsPagesData {
	signUp: {
		messageInfo: string;
		messageTermsAndConditions: string;
	};
}
