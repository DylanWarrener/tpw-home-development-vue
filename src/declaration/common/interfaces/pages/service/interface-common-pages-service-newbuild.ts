// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsPagesData,
} from "@src/declaration/common/interfaces/interface-common";

export default interface INewbuildState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;

	//// Forms
	formsData: ICommonFormsPagesData;
}
export interface INewbuildData {}
