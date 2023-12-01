console.log("Kitchen store loaded");
import { defineStore } from "pinia";

// Kitchen interface
import IKitchenState from "@interfaces/common/pages/service/kitchen/interfaces-common-pages-service-kitchen";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useKitchenStore = defineStore("kitchen-store", {
	state: (): IKitchenState => ({
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
		getSignUpNewsletterDialogData: (state: IKitchenState) => state.signUpNewsletterDialogData,
	},
	actions: {},
});

export default useKitchenStore;
