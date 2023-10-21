export default interface INewsSectionsState {
	title: string;
	articles?: INewsArticlesState[];
}

export interface INewsArticlesState {
	article: INewsArticleState;
}

export interface INewsArticleState {
	img: {
		src: string;
		btnText: string;
	};
	type: string;
	title: string;
	message: string;
	date: string;
}
