export default interface ICardTextualData {
	rating: ICardRatingTextualData;
	canvas: ICardCanvasTextualData;
	reviews: ICardReviewsTextualData;
}

// CARD - RATING
interface ICardRatingTextualData {
	title: string;
	total: string;
	max: string;
	btnText: string;
}

// CARD - CANVAS
interface ICardCanvasTextualData {
	pages: ICardCanvasPagesTextualData;
}

// CARD - CANVAS - PAGES
interface ICardCanvasPagesTextualData {
	home: ICardCanvasPagesHomeTextualData;
	kitchen: ICardCanvasPagesKitchenTextualData;
	bathroom: ICardCanvasPagesBathroomTextualData;
	newbuild: ICardCanvasPagesNewbuildTextualData;
	extension: ICardCanvasPagesExtensionTextualData;
	refurbishment: ICardCanvasPagesRefurbishmentTextualData;
	contact: ICardCanvasPagesContactTextualData;
	about: ICardCanvasPagesAboutTextualData;
	news: ICardCanvasPagesNewsTextualData;
	reviews: ICardCanvasPagesReviewsTextualData;
}

interface ICardCanvasPageCommonTextualData {
	title: string;
	subtitle: string;
	btnText: string;
}

// CARD - CANVAS - PAGES - HOME
interface ICardCanvasPagesHomeTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - KITCHEN
interface ICardCanvasPagesKitchenTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - BATHROOM
interface ICardCanvasPagesBathroomTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - NEWBUILD
interface ICardCanvasPagesNewbuildTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - EXTENSION
interface ICardCanvasPagesExtensionTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - REFURBISHMENT
interface ICardCanvasPagesRefurbishmentTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - CONTACT
interface ICardCanvasPagesContactTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - ABOUT
interface ICardCanvasPagesAboutTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - NEWS
interface ICardCanvasPagesNewsTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - CANVAS - PAGES - REVIEWS
interface ICardCanvasPagesReviewsTextualData extends ICardCanvasPageCommonTextualData {}

// CARD - REVIEWS
interface ICardReviewsTextualData {
	location: string;
}
