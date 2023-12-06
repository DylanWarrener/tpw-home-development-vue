// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsPagesData,
} from "@interfaces/common/interfaces-common";

export default interface IExtensionState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;

	//// Forms
	formsData: ICommonFormsPagesData;
}
export interface IExtensionData {}
