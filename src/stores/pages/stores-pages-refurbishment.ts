console.log("Refurbishment store loaded");
import { defineStore } from "pinia";

// Interfaces
import IRefurbishmentState from "@interfaces/common/pages/service/refurbishment/interfaces-common-pages-service-refurbishment";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useRefurbishmentStore = defineStore("refurbishment-store", {
	state: (): IRefurbishmentState => ({
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
		getSignUpNewsletterDialogData: (state: IRefurbishmentState) => state.signUpNewsletterDialogData,
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
				"common.dialogs.signUpNewsletter.toolbar.pages.refurbishment.message"
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

export default useRefurbishmentStore;
