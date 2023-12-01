import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface IExtensionStore
	extends StoreDefinition<StoreIDs.EXTENSION_STORE_ID, IExtensionState, IExtensionGetters, IExtensionSetters> {}
export interface IExtensionState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;
}
export interface IExtensionGetters {
	//// Dialogs
	getSignUpNewsletterDialogData: (state: IExtensionState) => ICommonSignUpNewsletterDialogData;
}
export interface IExtensionSetters {
	/* GETTERS */

	/* SETTERS */
	//// Dialogs
	setSignUpNewsletterDialogData: () => void;
}
export interface IExtensionData {}
