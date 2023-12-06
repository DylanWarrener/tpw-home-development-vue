console.log("Extension store loaded");
import { defineStore } from "pinia";

// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsPagesData,
} from "@interfaces/common/interfaces-common";
import IExtensionState from "@interfaces/common/pages/service/extension/interfaces-common-pages-service-extension";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Data
import { iconClose } from "@utils/text/common/icons/utils-text-common-icons";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

// IMGs
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";

const useExtensionStore = defineStore(StoreIDs.EXTENSION_STORE_ID, {
	state: (): IExtensionState => ({
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
		getSignUpNewsletterDialogData: (state: IExtensionState): ICommonSignUpNewsletterDialogData => state.signUpNewsletterDialogData,

		//// Forms
		getFormsData: (state: IExtensionState): ICommonFormsPagesData => state.formsData,
	},
	actions: {
		/* GETTERS */

		/* SETTERS */
		//// Dialogs
		setSignUpNewsletterDialogData(): void {
			// Toolbar title
			this.signUpNewsletterDialogData.toolbar.title = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.pages.extension.title");

			// Toolbar message
			this.signUpNewsletterDialogData.toolbar.message = i18nInstance.t("common.dialogs.signUpNewsletter.toolbar.pages.extension.message");

			// Toolbar icon
			this.signUpNewsletterDialogData.toolbar.icon.mdi = iconClose;
			this.signUpNewsletterDialogData.toolbar.icon.tooltip = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.extension.icon.tooltip"
			);
		},

		//// Forms
		setFormsData(): void {
			this.formsData.signUp.messageInfo = i18nInstance.t("common.forms.pages.extension.messageInfo");
			this.formsData.signUp.messageTermsAndConditions = i18nInstance.t("common.forms.defaultTermsAndConditions", {
				service: i18nInstance.t("common.forms.pages.extension.messageTermsAndConditions"),
			});
		},
	},
});

export default useExtensionStore;
