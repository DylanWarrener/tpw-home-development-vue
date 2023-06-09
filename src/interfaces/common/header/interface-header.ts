import IAppTextualBar from "./appBar/interface-appbar";
import { INavigationTextualData } from "./navigation/interface-navigation";

// Interface for header pinia state
export default interface IHeaderState {
	drawer: boolean;
}

// Interface for header.vue data
export interface IHeaderData {}

// Interface for header textual data
export interface IHeaderTextualData {
	appBar: IAppTextualBar;
	navigation: INavigationTextualData;
}
