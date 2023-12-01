console.log("Refurbishment store loaded");
import { defineStore } from "pinia";

// Interfaces
import IRefurbishmentState from "@interfaces/common/pages/service/refurbishment/interfaces-common-pages-service-refurbishment";

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
	actions: {},
});

export default useRefurbishmentStore;
