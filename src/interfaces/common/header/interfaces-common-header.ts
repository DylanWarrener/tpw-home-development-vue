// Common interfaces
import { ICommonPageAllIcons } from "@interfaces/common/pages/interfaces-common-pages";

// App bar interfaces
import { IAppBarIcons } from "@src/interfaces/common/header/appBar/interfaces-common-header-appbar";

// Navigation interfaces
import IHeaderNavigationData from "@src/interfaces/common/header/navigation/interfaces-common-header-navigation";

export default interface IHeaderState {
	drawer: boolean;
	appBarIcons: IAppBarIcons;
	navigation: IHeaderNavigationData[];
}

export interface IHeaderData {}

// ICONS
export interface IHeaderIcons {
	menu: string;
	search: string;
	theme: string;
	newAccount: string;
	account: string;
	settings: string;
}
export interface IHeaderIconNames extends IHeaderIcons {}
export interface IHeaderIconTooltips extends IHeaderIcons {}
export interface IHeaderNavigationIcons extends ICommonPageAllIcons {}
