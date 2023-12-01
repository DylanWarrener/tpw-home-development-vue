import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface IBathroomStore extends StoreDefinition<StoreIDs.BATHROOM_STORE_ID, IBathroomState, IBathroomGetters, IBathroomActions> {}
export interface IBathroomState {
	//// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;
}
export interface IBathroomGetters {
	//// Dialogs
	getSignUpNewsletterDialogData: (state: IBathroomState) => ICommonSignUpNewsletterDialogData;
}
export interface IBathroomActions {
	/* GETTERS */

	/* SETTERS */
	//// Dialogs
	setSignUpNewsletterDialogData: () => void;
}
export interface IBathroomData {}
