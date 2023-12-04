console.log("Home store loaded");
import { defineStore } from "pinia";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";
import IHomeState from "@interfaces/common/pages/info/home/interfaces-common-pages-info-home";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Data
import { iconClose } from "@utils/text/common/icons/utils-text-common-icons";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useHomeStore = defineStore(StoreIDs.HOME_STORE_ID, {
	state: (): IHomeState => ({
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
		getSignUpNewsletterDialogData: (state: IHomeState): ICommonSignUpNewsletterDialogData =>
			state.signUpNewsletterDialogData,
	},
	actions: {
		/* GETTERS */

		/* SETTERS */
		//// Dialogs
		setSignUpNewsletterDialogData(): void {
			// Toolbar title
			this.signUpNewsletterDialogData.toolbar.title = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.home.title"
			);

			// Toolbar message
			this.signUpNewsletterDialogData.toolbar.message = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.home.message"
			);

			// Toolbar icon
			this.signUpNewsletterDialogData.toolbar.icon.mdi = iconClose;
			this.signUpNewsletterDialogData.toolbar.icon.tooltip = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.home.icon.tooltip"
			);
		},
	},
});

export default useHomeStore;
