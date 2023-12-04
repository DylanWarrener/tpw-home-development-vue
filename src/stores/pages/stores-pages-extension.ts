console.log("Extension store loaded");
import { defineStore } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";
import IExtensionState from "@interfaces/common/pages/service/extension/interfaces-common-pages-service-extension";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Data
import { iconClose } from "@utils/text/common/icons/utils-text-common-icons";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useExtensionStore = defineStore(StoreIDs.EXTENSION_STORE_ID, {
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
		getSignUpNewsletterDialogData: (state: IExtensionState): ICommonSignUpNewsletterDialogData =>
			state.signUpNewsletterDialogData,
	},
	actions: {
		/* GETTERS */

		/* SETTERS */
		//// Dialogs
		setSignUpNewsletterDialogData(): void {
			// Toolbar title
			this.signUpNewsletterDialogData.toolbar.title = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.newbuild.title"
			);

			// Toolbar message
			this.signUpNewsletterDialogData.toolbar.message = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.newbuild.message"
			);

			// Toolbar icon
			this.signUpNewsletterDialogData.toolbar.icon.mdi = iconClose;
			this.signUpNewsletterDialogData.toolbar.icon.tooltip = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.newbuild.icon.tooltip"
			);
		},
	},
});

export default useExtensionStore;
