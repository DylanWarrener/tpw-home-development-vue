console.log("Newbuild store loaded");
import { defineStore } from "pinia";

// Newbuild interface
import INewbuildState from "@interfaces/common/pages/service/newbuild/interfaces-common-pages-service-newbuild";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useNewbuildStore = defineStore("newbuild-store", {
	state: (): INewbuildState => ({
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
		getSignUpNewsletterDialogData: (state: INewbuildState) => state.signUpNewsletterDialogData,
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
				"common.dialogs.signUpNewsletter.toolbar.pages.newbuild.message"
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

export default useNewbuildStore;