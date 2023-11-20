export default interface ISectionTextualData {
	beInspired: ISectionBeInspiredTextualData;
	portfolio: ISectionPortfolioTextualData;
	processOfElimination: ISectionProcessOfEliminationTextualData;
	reviews: ISectionReviewsTextualData;
	news: ISectionNewsTextualData;
}

interface ISectionCommonTextualData {
	title: string;
	subtitle: string;
}

// SECTION - BE-INSPIRED
interface ISectionBeInspiredTextualData extends ISectionCommonTextualData {
	style: ISectionBeInspiredStyleTextualData;
	theme: ISectionThemeStyleTextualData;
}
interface ISectionBeInspiredCommonTextualData extends ISectionCommonTextualData {}

// SECTION - BE-INSPIRED - STYLE
interface ISectionBeInspiredStyleTextualData extends ISectionBeInspiredCommonTextualData {}

// SECTION - BE-INSPIRED - THEME
interface ISectionThemeStyleTextualData extends ISectionBeInspiredCommonTextualData {}

// SECTION - PORTFOLIO
interface ISectionPortfolioTextualData extends ISectionCommonTextualData {}

// SECTION - PROCESS OF ELIMINATION
interface ISectionProcessOfEliminationTextualData extends ISectionCommonTextualData {}

// SECTION - REVIEWS
interface ISectionReviewsTextualData extends ISectionCommonTextualData {
	btnText: string;
}

// SECTION - NEWS
interface ISectionNewsTextualData extends ISectionCommonTextualData {}
