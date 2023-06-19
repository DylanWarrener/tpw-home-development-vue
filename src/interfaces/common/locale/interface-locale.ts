import ICommonTextualData from "../interface-common";
import IHeaderTextualData from "../../header/interface-header";
import IMainTextualData from "../../main/interface-main";
import IFooterTextualData from "../../footer/interface-footer";

export default interface ITextualData {
	common: ICommonTextualData;
	header: IHeaderTextualData;
	main: IMainTextualData;
	footer: IFooterTextualData;
}
