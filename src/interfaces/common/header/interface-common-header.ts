// App bar interfaces
import { IAppBarIcons } from "@src/interfaces/common/header/appBar/interface-common-header-appbar";

// Navigation interfaces
import { IHeaderNavigation } from "@interfaces/common/header/navigation/interface-header-navigation";

export default interface IHeaderState {
	drawer: boolean;
	appBarIcons: IAppBarIcons;
	navigation: IHeaderNavigation;
}

export interface IHeaderData {}

// ICONS
export interface IHeaderIconNames {
	menu: string;
	search: string;
	theme: string;
	newAccount: string;
	account: string;
	settings: string;
}
