console.log("Extension store loaded");
import { defineStore } from "pinia";

// Extension interface
import IExtensionState from "@interfaces/common/pages/service/extension/interfaces-common-pages-service-extension";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useExtensionStore = defineStore("extension-store", {
	state: (): IExtensionState => ({
		// Dialogs
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
		// Dialogs
		getSignUpNewsletterDialogData: (state: IExtensionState) => state.signUpNewsletterDialogData,
	},
	actions: {
		// Dialogs
		setSignUpNewsletterDialogData(): void {
			// Toolbar title
			this.signUpNewsletterDialogData.toolbar.title = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.defaultTitle"
			);

			// Toolbar message
			this.signUpNewsletterDialogData.toolbar.message = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.extension.message"
			);

			// Toolbar icon
			this.signUpNewsletterDialogData.toolbar.icon.mdi = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.icon.mdi"
			);
			this.signUpNewsletterDialogData.toolbar.icon.tooltip = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.icon.tooltip"
			);
		},
	},
});

export default useExtensionStore;
