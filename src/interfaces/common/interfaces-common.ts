export default interface ICommonState {
	//// Header
	appBarHeight: number;

	//// Body
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
