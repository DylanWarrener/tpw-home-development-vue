console.log("Extension store loaded");
import { defineStore } from "pinia";

// Extension interface
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";
import IExtensionStore, { IExtensionState } from "@interfaces/common/pages/service/extension/interfaces-common-pages-service-extension";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useExtensionStore: IExtensionStore = defineStore(StoreIDs.EXTENSION_STORE_ID, {
	state: (): IExtensionState => ({
		//// Dialogs
		signUpNewsletterDialogData: {
			src: NewsLetterThree,
			showDialog: true,
			toolbar: {
				title: "",
				message: "",
				icon: {
					mdi: "",
					tooltip: "",
					showTooltip: false,
				},
			},
		},
	}),
	getters: {
		//// Dialogs
		getSignUpNewsletterDialogData: (state: IExtensionState): ICommonSignUpNewsletterDialogData => state.signUpNewsletterDialogData,
	},
	actions: {
		/* GETTERS */

		/* SETTERS */
		//// Dialogs
		setSignUpNewsletterDialogData(): void {
			// Toolbar title
			this.signUpNewsletterDialogData.toolbar.title = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.defaultTitle");

			// Toolbar message
			this.signUpNewsletterDialogData.toolbar.message = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.pages.extension.message");

			// Toolbar icon
			this.signUpNewsletterDialogData.toolbar.icon.mdi = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.icon.mdi");
			this.signUpNewsletterDialogData.toolbar.icon.tooltip = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.icon.tooltip");
		},
	},
});

export default useExtensionStore;
