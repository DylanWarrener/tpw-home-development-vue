import { StoreDefinition } from "pinia";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface ICommonStore extends StoreDefinition<StoreIDs.COMMON_STORE_ID, ICommonState, ICommonGetters, ICommonActions> {}
export interface ICommonState {
	//// Utility
	asterisk: string;

	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;

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
export interface ICommonGetters {
	//// Utility
	getAsterisk: (state: ICommonState) => string;

	//// Dialogs
	getSignUpNewsletterDialogData: (state: ICommonState) => ICommonSignUpNewsletterDialogData;

	//// Sections
	getIsCanvasComponentActive: (state: ICommonState) => boolean;
	getIsBeInspiredComponentActive: (state: ICommonState) => boolean;
	getIsPortfolioComponentActive: (state: ICommonState) => boolean;
	getIsLatestNewsComponentActive: (state: ICommonState) => boolean;
	getIsProcessOfEliminationActive: (state: ICommonState) => boolean;
	getIsLatestReviewsComponentActive: (state: ICommonState) => boolean;
	// Be-inspired
	getDropdownOptions: (state: ICommonState) => string[];
	getAvailableKitchenStyles: (state: ICommonState) => ICommonAvailableStyles[];
	getAvailableBathroomStyles: (state: ICommonState) => ICommonAvailableStyles[];
	getAvailableNewbuildStyles: (state: ICommonState) => ICommonAvailableStyles[];
	getAvailableExtensionStyles: (state: ICommonState) => ICommonAvailableStyles[];
	getAvailableRefurbishmentStyles: (state: ICommonState) => ICommonAvailableStyles[];

	//// Forms
	getFormsData: (state: ICommonState) => ICommonFormsData;
}
export interface ICommonActions {
	/* GETTERS */

	/* SETTERS */
	//// Dialogs
	setSignUpNewsletterDialogData: () => void;

	//// Sections
	setIsCanvasComponentActive: (newValue: boolean) => void;
	setIsBeInspiredComponentActive: (newValue: boolean) => void;
	setIsPortfolioComponentActive: (newValue: boolean) => void;
	setIsLatestNewsComponentActive: (newValue: boolean) => void;
	setIsProcessOfEliminationActive: (newValue: boolean) => void;
	setIsLatestReviewsComponentActive: (newValue: boolean) => void;
	// Be-Inspired
	setDropdownOptions: () => void;
	setAvailableKitchenStyles: () => void;
	setAvailableBathroomStyles: () => void;
	setAvailableNewbuildStyles: () => void;
	setAvailableExtensionStyles: () => void;
	setAvailableRefurbishmentStyles: () => void;

	//// Forms
	setFormsData: () => void;
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
