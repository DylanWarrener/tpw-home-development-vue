import { ICommonNavigationData } from "../navigation/interface-navigation";

export default interface IAppBarTextualData {
	title: string;
	icons: IAppBarTextualIcons;
	text: ICommonNavigationData;
}

export interface IAppBarTextualIcons {
	verticalDots: string;
}
