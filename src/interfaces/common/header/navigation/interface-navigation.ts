// Interface for navigation.vue data
export default interface INavigationData {
	navigation: INavigationListItems[];
}

// Interface for navigation list items
export interface INavigationListItems {
	id: number;
	title: string;
	icon: string;
	link: string;
}

// Interface for navigation textual data
export interface INavigationTextualData {
	text: ICommonNavigationData;
	links: ICommonNavigationData;
	icons: ICommonNavigationData;
}

// Interface for common navigation data
export interface ICommonNavigationData {
	home: string;
	kitchen: string;
	bathroom: string;
	newbuild: string;
	extension: string;
	refurbishment: string;
	contact: string;
	about: string;
}
