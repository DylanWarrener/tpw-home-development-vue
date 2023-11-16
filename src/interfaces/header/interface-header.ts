export default interface IHeaderState {
	drawer: boolean;
	appBarIcons: IAppBarIcons;
}

export interface IHeaderData {
	appBarIcons: IAppBarIcons;
}

export interface IAppBarIcons {
	menu: IAppBarIconsInfo;
	search: IAppBarIconsInfo;
	theme: IAppBarIconsInfo;
	newAccount: IAppBarIconsInfo;
	account: IAppBarIconsInfo;
	settings: IAppBarIconsInfo;
}

export interface IAppBarIconsInfo {
	name: string;
	icon: string;
	tooltip: string;
	showTooltip: boolean;
}
