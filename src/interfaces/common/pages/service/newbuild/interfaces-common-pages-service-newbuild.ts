import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface INewbuildStore extends StoreDefinition<StoreIDs.NEWBUILD_STORE_ID, INewbuildState, INewbuildGetters, INewbuildActions> {}
export interface INewbuildState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;
}
export interface INewbuildGetters {
	//// Dialogs
	getSignUpNewsletterDialogData: (state: INewbuildState) => ICommonSignUpNewsletterDialogData;
}
export interface INewbuildActions {
	/* GETTERS */

	/* SETTERS */
	//// Dialogs
	setSignUpNewsletterDialogData: () => void;
}
export interface INewbuildData {}
