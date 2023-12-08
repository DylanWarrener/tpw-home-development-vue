// Interfaces
import { ICommonPageAllIcons } from "@interfaces/common/pages/interfaces-common-pages";
import { IAppBarIcons } from "@interfaces/common/header/appBar/interfaces-common-header-appbar";
import IHeaderNavigationData from "@interfaces/common/header/navigation/interfaces-common-header-navigation";

export default interface IHeaderState {
	drawer: boolean;
	appBarHeight: number;
	appBarIcons: IAppBarIcons;
	navigation: IHeaderNavigationData[];
}
export interface IHeaderData {}

export interface IHeaderNavigationIcons extends ICommonPageAllIcons {}
