// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsPagesData,
} from "@src/declaration/common/interfaces/interface-common";

export default interface IHomeState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;

	//// Forms
	formsData: ICommonFormsPagesData;
}
export interface IHomeData {}
