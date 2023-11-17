export default interface IHeaderState {
	drawer: boolean;
	appBarIcons: IAppBarIcons;
	navigation: IHeaderNavigation;
}

export interface IHeaderData {}

export interface IAppBarIcons {
	menu: IAppBarIconsInfo;
	others: {
		search: IAppBarIconsInfo;
		theme: IAppBarIconsInfo;
		newAccount: IAppBarIconsInfo;
		account: IAppBarIconsInfo;
		settings: IAppBarIconsInfo;
	};
}

export interface IAppBarIconsInfo {
	id: string;
	icon: string;
	tooltip: string;
	showTooltip: boolean;
}

export interface IHeaderNavigation {
	home: IHeaderNavigationInfo;
	kitchen: IHeaderNavigationInfo;
	bathroom: IHeaderNavigationInfo;
	newbuild: IHeaderNavigationInfo;
	extension: IHeaderNavigationInfo;
	refurbishment: IHeaderNavigationInfo;
	contact: IHeaderNavigationInfo;
	about: IHeaderNavigationInfo;
	news: IHeaderNavigationInfo;
	reviews: IHeaderNavigationInfo;
}

export interface IHeaderNavigationInfo {
	title: string;
	icon: string;
	link: string;
}
