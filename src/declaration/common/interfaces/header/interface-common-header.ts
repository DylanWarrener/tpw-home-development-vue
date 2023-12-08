export default interface IHeaderState {
	drawer: boolean;
	appBarHeight: number;
	appBarIcons: IHeaderAppBarIcons;
	navigation: IHeaderNavigationData[];
}
export interface IHeaderData {}

// ---------------------------------------------------------------------------------------------------------
// APP BAR
// ---------------------------------------------------------------------------------------------------------
export interface IHeaderAppBarIcons {
	menu: IHeaderAppBarIconProperties;
	others: {
		search: IHeaderAppBarIconProperties;
		theme: IHeaderAppBarIconProperties;
		newAccount: IHeaderAppBarIconProperties;
		account: IHeaderAppBarIconProperties;
		settings: IHeaderAppBarIconProperties;
	};
}
export interface IHeaderAppBarIconProperties {
	id: string;
	icon: string;
	tooltip: string;
	showTooltip: boolean;
}

// ---------------------------------------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------------------------------------
export interface IHeaderNavigationIcons {}
export interface IHeaderNavigationData {
	title: string;
	icon: string;
	link: string;
}
