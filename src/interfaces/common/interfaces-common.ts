export default interface ICommonState {
	//// Header
	appBarHeight: number;

	//// Body
	isSignUpDiscountDialogActive: boolean;
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
// Sections
export interface ICommonAvailableStyles {
	src: string;
	alt: string;
}
//// Footer
