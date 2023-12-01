console.log("Bathroom store loaded");
import { defineStore } from "pinia";

// Bathroom interface
import IBathroomState from "@interfaces/common/pages/service/bathroom/interfaces-common-pages-service-bathroom";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useBathroomStore = defineStore("bathroom-store", {
	state: (): IBathroomState => ({
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
		getSignUpNewsletterDialogData: (state: IBathroomState) => state.signUpNewsletterDialogData,
	},
	actions: {},
});

export default useBathroomStore;
