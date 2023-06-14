import IHeaderAppBarTextualData from "./appBar/interface-header-appbar";
import IHeaderNavigationTextualData from "./navigation/interface-header-navigation";

export default interface IHeaderTextualData {
	appBar: IHeaderAppBarTextualData;
	navigation: IHeaderNavigationTextualData;
}

// Pinia state interfaces
export interface IHeaderState {
	drawer: boolean;
}

// Vue local data interfaces
export interface IHeaderData {}
