import ICommonIcons from "./interface-icons";
import ILogoTextualData from "./interface-logo";
import INavigationTextualData from "./interface-navigation";
import ISectionTextualData from "./interface-section";

export interface ICommonTextualData {
	icons: ICommonIcons;
	logo: ILogoTextualData;
	navigation: INavigationTextualData;
	section: ISectionTextualData;
}

export default interface ICommonBaseData {
	// Common textual data
	textualData: ICommonTextualData;

	// Canvas section
	sectionCanvasActive: boolean;
	sectionCanvasHeading: string;
	sectionCanvasQuote: string;
	sectionCanvasBtnText: string;

	// Be inspired section
	sectionBeInspiredActive: boolean;

	// Portfolio section
	sectionPortfolioActive: boolean;

	// Reviews section
	sectionReviewsActive: boolean;

	// Process of elimination section
	sectionProcessOfEliminationActive: boolean;

	// Latest news section
	sectionLatestNewsActive: boolean;

	// General
	isDarkThemeActive: boolean;
}
