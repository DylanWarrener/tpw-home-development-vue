import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonPageAllIcons } from "@interfaces/common/pages/interfaces-common-pages";
import { IAppBarIcons } from "@interfaces/common/header/appBar/interfaces-common-header-appbar";
import IHeaderNavigationData from "@interfaces/common/header/navigation/interfaces-common-header-navigation";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface IHeaderStore extends StoreDefinition<StoreIDs.HEADER_STORE_ID, IHeaderState, IHeaderGetters, IHeaderActions> {}
export interface IHeaderState {
	drawer: boolean;
	appBarHeight: number;
	appBarIcons: IAppBarIcons;
	navigation: IHeaderNavigationData[];
}
export interface IHeaderGetters {
	getDrawer;
	getAllAppBarIcons;
	getNavigationItems;
}
export interface IHeaderActions {
	setDrawer;
	setAppBarIcons;
	setNavigationItems;
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
