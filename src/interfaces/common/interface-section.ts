// Common types for section textual data
interface ISectionCommonTextualData {
	heading: string;
	subheading: string;
}

// Canvas
interface ICanvasTextualData {
	quoteBox: {
		btnText: string;
	};
}

// Be inspired
interface IBeInspiredTextualData {
	carousel: {
		dropdownOptions: IDropdownOptions[];
		text: {
			heading: string;
			subheading: string;
			dropdownBtn: string;
		};
		altText: {};
	};
}

export interface IDropdownOptions {
	name: string;
	images: IDropdownImages[];
}

export interface IDropdownImages {
	default: boolean;
	src: string;
}

// Portfolio
interface IPortfolioTextualData extends ISectionCommonTextualData {}

// Review
interface IReviewsTextualData extends ISectionCommonTextualData {}

// Process of elimination
interface IProcessOfEliminationTextualData extends ISectionCommonTextualData {}

// Latest news
interface ILatestNewsTextualData extends ISectionCommonTextualData {}

export default interface ISectionTextualData {
	canvas: ICanvasTextualData;
	beInspired: IBeInspiredTextualData;
	portfolio: IPortfolioTextualData;
	reviews: IReviewsTextualData;
	processOfElimination: IProcessOfEliminationTextualData;
	latestNews: ILatestNewsTextualData;
}
