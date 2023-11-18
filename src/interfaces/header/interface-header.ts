// App bar interfaces
import { IAppBarIcons } from "@interfaces/header/appBar/interface-header-appbar";

// Navigation interfaces
import { IHeaderNavigation } from "@interfaces/header/navigation/interface-header-navigation";

export default interface IHeaderState {
	drawer: boolean;
	appBarIcons: IAppBarIcons;
	navigation: IHeaderNavigation;
}

export interface IHeaderData {}
