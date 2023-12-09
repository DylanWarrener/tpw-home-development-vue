import { defineStore } from "pinia";

// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsPagesData,
} from "@src/declaration/common/interfaces/interface-common";
import IHomeState from "@src/declaration/common/interfaces/pages/info/interface-common-pages-info-home";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Constants
import { iconClose } from "@constants/common/primitive/constants-common-primitive";

// Enums
import { StoreIDs } from "@enums/common/enums";

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

		//// Forms
		formsData: {
			signUp: {
				messageInfo: "",
				messageTermsAndConditions: "",
			},
		},
	}),
	getters: {
		//// Dialogs
		getSignUpNewsletterDialogData: (state: IHomeState): ICommonSignUpNewsletterDialogData => state.signUpNewsletterDialogData,

		//// Forms
		getFormsData: (state: IHomeState): ICommonFormsPagesData => state.formsData,
	},
	actions: {
		/* GETTERS */

		/* SETTERS */
		//// Dialogs
		setSignUpNewsletterDialogData(): void {
			// Toolbar title
			this.signUpNewsletterDialogData.toolbar.title = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.pages.home.title");

			// Toolbar message
			this.signUpNewsletterDialogData.toolbar.message = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.pages.home.message");

			// Toolbar icon
			this.signUpNewsletterDialogData.toolbar.icon.mdi = iconClose;
			this.signUpNewsletterDialogData.toolbar.icon.tooltip = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.pages.home.icon.tooltip");
		},

		//// Forms
		setFormsData(): void {
			this.formsData.signUp.messageInfo = i18nInstance.t("common.forms.pages.home.messageInfo");
			this.formsData.signUp.messageTermsAndConditions = i18nInstance.t("common.forms.defaultTermsAndConditions", {
				service: i18nInstance.t("common.forms.pages.home.messageTermsAndConditions"),
			});
		},
	},
});

export default useHomeStore;
