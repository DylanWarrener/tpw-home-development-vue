import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface IKitchenStore extends StoreDefinition<StoreIDs.KITCHEN_STORE_ID, IKitchenState, IKitchenGetters, IKitchenActions> {}

export interface IKitchenState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;
}
export interface IKitchenGetters {
	//// Dialogs
	getSignUpNewsletterDialogData: (state: IKitchenState) => ICommonSignUpNewsletterDialogData;
}
export interface IKitchenActions {
	/* GETTERS */

	/* SETTERS */
	//// Dialogs
	setSignUpNewsletterDialogData: () => void;
}
export interface IKitchenData {}
