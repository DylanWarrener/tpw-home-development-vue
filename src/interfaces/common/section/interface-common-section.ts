export default interface ICommonSectionTextualData {
	beInspired: ICommonSectionBeInspiredTextualData;
	portfolio: ICommonSectionPortfolioTextualData;
	reviews: ICommonSectionReviewsTextualData;
	processOfElimination: ICommonSectionProcessOfEliminationTextualData;
	latestNews: ICommonSectionLatestNewsTextualData;
}

export interface ICommonSectionBeInspiredTextualData extends ICommonSectionContentTextualData {
	style: ICommonSectionContentTextualData;
	theme: ICommonSectionContentTextualData;
}

export interface ICommonSectionPortfolioTextualData extends ICommonSectionContentTextualData {}

export interface ICommonSectionReviewsTextualData extends ICommonSectionContentTextualData {}

export interface ICommonSectionProcessOfEliminationTextualData extends ICommonSectionContentTextualData {}

export interface ICommonSectionLatestNewsTextualData extends ICommonSectionContentTextualData {}

export interface ICommonSectionContentTextualData {
	title: string;
	subtitle: string;
}
