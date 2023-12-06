// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsPagesData,
} from "@interfaces/common/interfaces-common";

export default interface IKitchenState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;

	//// Forms
	formsData: ICommonFormsPagesData;
}
export interface IKitchenData {}
