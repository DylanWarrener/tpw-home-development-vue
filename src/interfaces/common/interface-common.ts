import ICommonCardTextualData from "./card/interface-common-card";
import ICommonPageTextualData from "./page/interface-common-page";
import ICommonIconTextualData from "./icon/interface-common-icon";

export default interface ICommonTextualData {
	card: ICommonCardTextualData;
	page: ICommonPageTextualData;
	icon: ICommonIconTextualData;
}

// Pinia state interfaces
export interface ICommonState {
	isCanvasComponentActive: boolean;
	isBeInspiredComponentActive: boolean;
	isPortfolioComponentActive: boolean;
	isReviewComponentActive: boolean;
	isProcessOfEliminationActive: boolean;
	isLatestNewsComponentActive: boolean;
}

// Vue local data interfaces
export interface ICommonData {}
