import ICommonCardTextualData from "./card/interface-common-card";
import ICommonDropdownTextualData from "./dropdown/interface-common-dropdown";
import ICommonIconTextualData from "./icon/interface-common-icon";
import ICommonPageTextualData from "./page/interface-common-page";
import ICommonSectionTextualData from "./section/interface-common-section";

export default interface ICommonTextualData {
	card: ICommonCardTextualData;
	dropdown: ICommonDropdownTextualData;
	icon: ICommonIconTextualData;
	page: ICommonPageTextualData;
	section: ICommonSectionTextualData;
}

// Pinia state interfaces
export interface ICommonState {
	// Page section state
	isCanvasComponentActive: boolean;
	isBeInspiredComponentActive: boolean;
	isPortfolioComponentActive: boolean;
	isReviewComponentActive: boolean;
	isProcessOfEliminationActive: boolean;
	isLatestNewsComponentActive: boolean;
}

// Vue local data interfaces
export interface ICommonData {}
