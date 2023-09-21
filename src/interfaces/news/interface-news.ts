export default interface INewsTextualData {}

export interface INewsState {
	dropdownOptions: INewsDropdownOptionsState;
	articles: INewsArticlesState[];
	filterOptions: INewsFilterOptionsState;
}

export interface INewsDropdownOptionsState {
	items: string[];
	label: string;
}

export interface INewsArticlesState {
	img: {
		src: string;
		btnText: string;
	};
	article: INewsArticleState[];
}

export interface INewsArticleState {
	text: string;
	tag: string;
	colour?: string;
	transform?: string;
}

export interface INewsFilterOptionsState {
	title: string;
	search: {
		label: string;
	};
	options: INewsAvailableFilterOptions[];
}

export interface INewsAvailableFilterOptions {
	title: {
		tag?: string;
		text: string;
	};
	element: {
		tag?: string;
		values: string[];
	};
}

export interface INewsData {}
