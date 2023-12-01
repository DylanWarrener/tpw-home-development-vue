console.log("Extension store loaded");
import { defineStore } from "pinia";

// Extension interface
import IExtensionState from "@interfaces/common/pages/service/extension/interfaces-common-pages-service-extension";

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
	actions: {},
});

export default useExtensionStore;
