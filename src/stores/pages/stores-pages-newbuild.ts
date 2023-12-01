console.log("Newbuild store loaded");
import { defineStore } from "pinia";

// Newbuild interface
import INewbuildState from "@interfaces/common/pages/service/newbuild/interfaces-common-pages-service-newbuild";

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
	actions: {},
});

export default useNewbuildStore;
