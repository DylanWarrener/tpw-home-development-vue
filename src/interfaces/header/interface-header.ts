import IHeaderAppBarTextualData from "./appBar/interface-header-appbar";
import IHeaderNavigationTextualData from "./navigation/interface-header-navigation";

export default interface IHeaderTextualData {
	appBar: IHeaderAppBarTextualData;
	navigation: IHeaderNavigationTextualData;
}

export interface IHeaderState {
	drawer: boolean;
	icons: IAppBarIcons;
}

export interface IHeaderData {}

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
	show: boolean;
}
