import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface IRefurbishmentStore
	extends StoreDefinition<StoreIDs.REFURBISHMENT_STORE_ID, IRefurbishmentState, IRefurbishmentGetters, IRefurbishmentSetters> {}
export interface IRefurbishmentState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;
}
export interface IRefurbishmentGetters {
	//// Dialogs
	getSignUpNewsletterDialogData: (state: IRefurbishmentState) => ICommonSignUpNewsletterDialogData;
}
export interface IRefurbishmentSetters {
	/* GETTERS */

	/* SETTERS */
	//// Dialogs
	setSignUpNewsletterDialogData: () => void;
}
export interface IRefurbishmentData {}
