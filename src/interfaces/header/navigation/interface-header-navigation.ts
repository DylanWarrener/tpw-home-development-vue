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
