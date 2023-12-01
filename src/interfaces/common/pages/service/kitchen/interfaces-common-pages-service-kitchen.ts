import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

export default interface IKitchenStore extends StoreDefinition<"kitchen-store", IKitchenState, IKitchenGetters, IKitchenActions> {}

export interface IKitchenState {
	// Dialogs
	signUpNewsletterDialogData: ICommonSignUpNewsletterDialogData;
}

export interface IKitchenGetters {
	// Dialogs
	getSignUpNewsletterDialogData: (state: IKitchenState) => ICommonSignUpNewsletterDialogData;
}

export interface IKitchenActions {
	// Dialogs
	setSignUpNewsletterDialogData: () => void;
}

export interface IKitchenData {}
