export default interface IPageTextualData {
	home: IHomeTextualData;
	kitchen: IKitchenTextualData;
	bathroom: IBathroomTextualData;
	newbuild: INewbuildTextualData;
	extension: IExtensionTextualData;
	refurbishment: IRefurbishmentTextualData;
	contact: IContactTextualData;
	about: IAboutTextualData;
	news: INewsTextualData;
	reviews: IReviewsTextualData;
}

interface IPageCommonInfoTextualData {
	name: string;
	link: string;
}

interface IPageCommonTextTextualData {
	title: string;
	subtitle: string;
}

// PAGE - HOME
interface IHomeTextualData extends IPageCommonInfoTextualData {
	images: IHomeImagesTextualData;
}
interface IHomeImagesTextualData {}

// PAGE - KITCHEN
interface IKitchenTextualData extends IPageCommonInfoTextualData {
	images: IKitchenImagesTextualData;
}
interface IKitchenImagesTextualData {}

// PAGE - BATHROOM
interface IBathroomTextualData extends IPageCommonInfoTextualData {
	images: IBathroomImagesTextualData;
}
interface IBathroomImagesTextualData {}

// PAGE - NEWBUILD
interface INewbuildTextualData extends IPageCommonInfoTextualData {
	images: INewbuildImagesTextualData;
}
interface INewbuildImagesTextualData {}

// PAGE - EXTENSION
interface IExtensionTextualData extends IPageCommonInfoTextualData {
	images: IExtensionImagesTextualData;
}
interface IExtensionImagesTextualData {}

// PAGE - REFURBISHMENT
interface IRefurbishmentTextualData extends IPageCommonInfoTextualData {
	images: IRefurbishmentImagesTextualData;
}
interface IRefurbishmentImagesTextualData {}

// PAGE - CONTACT
interface IContactTextualData extends IPageCommonInfoTextualData, IPageCommonTextTextualData {
	images: IContactImagesTextualData;
}
interface IContactImagesTextualData {}

// PAGE - ABOUT
interface IAboutTextualData extends IPageCommonInfoTextualData, IPageCommonTextTextualData {
	images: IAboutImagesTextualData;
}
interface IAboutImagesTextualData {}

// PAGE - NEWS
interface INewsTextualData extends IPageCommonInfoTextualData, IPageCommonTextTextualData {
	images: INewsImagesTextualData;
}
interface INewsImagesTextualData {}

// PAGE - REVIEWS
interface IReviewsTextualData extends IPageCommonInfoTextualData, IPageCommonTextTextualData {
	images: IReviewsImagesTextualData;
}
interface IReviewsImagesTextualData {}
