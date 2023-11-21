export default interface ICommonState {
	//// Header
	appBarHeight: number;

	//// Body
	dropdownOptions: string[];
	// Sections
	isCanvasComponentActive: boolean;
	isBeInspiredComponentActive: boolean;
	isPortfolioComponentActive: boolean;
	isLatestReviewsComponentActive: boolean;
	isProcessOfEliminationActive: boolean;
	isLatestNewsComponentActive: boolean;
	availableKitchenStyles: ICommonAvailableStyles[];
	availableBathroomStyles: ICommonAvailableStyles[];
	availableNewbuildStyles: ICommonAvailableStyles[];
	availableExtensionStyles: ICommonAvailableStyles[];
	availableRefurbishmentStyles: ICommonAvailableStyles[];
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
