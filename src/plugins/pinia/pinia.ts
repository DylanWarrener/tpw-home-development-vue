import { createPinia, defineStore } from "pinia";

// Stores to load immediately
import useHeaderStore from "@stores/header/stores-header";
import useHomeStore from "@stores/pages/stores-pages-home";
import useFooterStore from "@stores/footer/stores-footer";
import useErrorStore from "@stores/stores-error";
import useEventStore from "@stores/events/stores-events";

// Stores to lazy load
const useKitchenStore = () => import("@stores/pages/stores-pages-kitchen");
const useBathroomStore = () => import("@stores/pages/stores-pages-bathroom");
const useNewbuildStore = () => import("@stores/pages/stores-pages-newbuild");
const useExtensionStore = () => import("@stores/pages/stores-pages-extension");
const useRefurbishmentStore = () => import("@stores/pages/stores-pages-refurbishment");
const useContactStore = () => import("@stores/pages/stores-pages-contact");
const useAboutStore = () => import("@stores/pages/stores-pages-about");
const useNewsStore = () => import("@stores/pages/stores-pages-news");
const useReviewsStore = () => import("@stores/pages/stores-pages-reveiws");

// Interfaces
import ICommonState, {
	//// Header
	//// Body
	// Forms
	ICommonFormsData,
	// Dialogs
	ICommonSignUpNewsletterDialogData,
	// Sections
	ICommonAvailableStyles,
	//// Footer
} from "@interfaces/common/interfaces-common";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Enums
import { AppBarDensity } from "@enums/sizing/enums-sizing";

// Data
import { pageServiceNamesAsArrayKeys } from "@utils/text/common/pages/utils-text-common-pages";

// Kitchen PNGs (different styles of kitchens, using the available materials)
import AscotLightGreyDustPNG from "@assets/png/kitchens/ascot-light-gret-dust.jpg";
import CambridgeFirGreenPNG from "@assets/png/kitchens/cambridge-fir-green.jpg";
import CartmelMusselPNG from "@assets/png/kitchens/cartmel-mussel.jpg";
import GranthamChalkstoneFirGreenPNG from "@assets/png/kitchens/grantham-chalkstone-fir-green.jpg";
import LinearWhiteHalifaxOakPNG from "@assets/png/kitchens/linear-white-halifax-oak.jpg";
import LucenteGlossCreamPNG from "@assets/png/kitchens/lucente-gloss-cream.jpg";
import NewmarketIndigoBluePNG from "@assets/png/kitchens/newmarket-indigo-blue.jpg";
import OxfordWhitePNG from "@assets/png/kitchens/oxford-white.jpg";
import StrattoDustGreyPNG from "@assets/png/kitchens/stratto-dust-grey.jpg";
import VivoPtoOnyxGreyPNG from "@assets/png/kitchens/vivo-pto-onyx-grey.jpg";

// Bathroom PNGs (different styles of kitchens, using the available materials)
import BathroomBlackWhitePNG from "@assets/png/bathrooms/bathroom-black-white.jpg";
import BathroomBrightPNG from "@assets/png/bathrooms/bathroom-bright.jpg";
import BathroomCosyPNG from "@assets/png/bathrooms/bathroom-cosy.jpg";
import BathroomDarkPNG from "@assets/png/bathrooms/bathroom-dark.jpg";
import BathroomMixPNG from "@assets/png/bathrooms/bathroom-mix.jpg";
import BathroomModernPNG from "@assets/png/bathrooms/bathroom-modern.jpg";
import BathroomPlainPNG from "@assets/png/bathrooms/bathroom-plain.jpg";
import BathroomRusticPNG from "@assets/png/bathrooms/bathroom-rustic.jpg";
import BathroomShadePNG from "@assets/png/bathrooms/bathroom-shade.jpg";

// Newbuild PNGs (different styles of kitchens, using the available materials)
// Extension PNGs (different styles of kitchens, using the available materials)
// Refurbishment PNGs (different styles of kitchens, using the available materials)

// Tester IMGs for dialog
import NewsLetterOne from "@assets/png/newsletter/newsletter-1.jpg";
import NewsLetterTwo from "@assets/png/newsletter/newsletter-2.jpg";
import NewsLetterThree from "@assets/png/newsletter/newsletter-3.jpg";
import NewsLetterFour from "@assets/png/newsletter/newsletter-4.jpg";
import NewsLetterFive from "@assets/png/newsletter/newsletter-5.jpg";

const pinia = createPinia();

// Main store
export const parentStore = defineStore("common-store", {
	state: (): ICommonState => ({
		//// Header
		appBarHeight: AppBarDensity.DEFAULT,

		//// Body
		// Utility
		asterisk: "*",
		// Forms
		forms: {
			msgInfo: "",
			signUp: {
				title: {
					titles: [],
					label: "",
				},
				newsletter: {
					name: {
						firstname: {
							label: "",
							placeholder: "",
						},
						lastname: {
							label: "",
							placeholder: "",
						},
					},
					email: {
						label: "",
						placeholder: "",
					},
				},
				password: {
					label: "",
					placeholder: "",
					repeat: {
						label: "",
						placeholder: "",
					},
				},
				dateOfBirth: {
					label: "",
					placeholder: "",
				},
				telephone: {
					label: "",
					placeholder: "",
				},
				address: {
					label: "",
					placeholder: "",
				},
				postcode: {
					label: "",
					placeholder: "",
				},
			},
		},
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
		// Be-inspired
		dropdownOptions: [],
		// Sections
		isCanvasComponentActive: false,
		isBeInspiredComponentActive: false,
		isPortfolioComponentActive: false,
		isLatestNewsComponentActive: false,
		isProcessOfEliminationActive: false,
		isLatestReviewsComponentActive: false,
		availableKitchenStyles: [
			{
				src: AscotLightGreyDustPNG,
				alt: "",
			},
			{
				src: CambridgeFirGreenPNG,
				alt: "",
			},
			{
				src: CartmelMusselPNG,
				alt: "",
			},
			{
				src: GranthamChalkstoneFirGreenPNG,
				alt: "",
			},
			{
				src: LinearWhiteHalifaxOakPNG,
				alt: "",
			},
			{
				src: LucenteGlossCreamPNG,
				alt: "",
			},
			{
				src: NewmarketIndigoBluePNG,
				alt: "",
			},
			{
				src: OxfordWhitePNG,
				alt: "",
			},
			{
				src: StrattoDustGreyPNG,
				alt: "",
			},
			{
				src: VivoPtoOnyxGreyPNG,
				alt: "",
			},
		],
		availableBathroomStyles: [
			{
				src: BathroomBlackWhitePNG,
				alt: "",
			},
			{
				src: BathroomBrightPNG,
				alt: "",
			},
			{
				src: BathroomCosyPNG,
				alt: "",
			},
			{
				src: BathroomDarkPNG,
				alt: "",
			},
			{
				src: BathroomMixPNG,
				alt: "",
			},
			{
				src: BathroomModernPNG,
				alt: "",
			},
			{
				src: BathroomPlainPNG,
				alt: "",
			},
			{
				src: BathroomRusticPNG,
				alt: "",
			},
			{
				src: BathroomShadePNG,
				alt: "",
			},
		],
		availableNewbuildStyles: [
			{
				src: AscotLightGreyDustPNG,
				alt: "",
			},
		],
		availableExtensionStyles: [
			{
				src: AscotLightGreyDustPNG,
				alt: "",
			},
		],
		availableRefurbishmentStyles: [
			{
				src: AscotLightGreyDustPNG,
				alt: "",
			},
		],

		//// Footer
	}),
	getters: {
		//// Header
		getAppBarHeight: (state: ICommonState): number => state.appBarHeight,

		//// Body
		// Utility
		getAsterisk: (state: ICommonState): string => state.asterisk,
		// Forms
		getFormsData: (state: ICommonState): ICommonFormsData => state.forms,
		// Dialogs
		getSignUpNewsletterDialogData: (state: ICommonState): ICommonSignUpNewsletterDialogData =>
			state.signUpNewsletterDialogData,
		// Be-inspired
		getDropdownOptions: (state: ICommonState): string[] => state.dropdownOptions,
		// Sections
		getIsCanvasComponentActive: (state: ICommonState): boolean => state.isCanvasComponentActive,
		getIsBeInspiredComponentActive: (state: ICommonState): boolean => state.isBeInspiredComponentActive,
		getIsPortfolioComponentActive: (state: ICommonState): boolean => state.isPortfolioComponentActive,
		getIsLatestNewsComponentActive: (state: ICommonState): boolean => state.isLatestNewsComponentActive,
		getIsProcessOfEliminationActive: (state: ICommonState): boolean => state.isProcessOfEliminationActive,
		getIsLatestReviewsComponentActive: (state: ICommonState): boolean => state.isLatestReviewsComponentActive,
		getAvailableKitchenStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableKitchenStyles,
		getAvailableBathroomStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableBathroomStyles,
		getAvailableNewbuildStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableNewbuildStyles,
		getAvailableExtensionStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableExtensionStyles,
		getAvailableRefurbishmentStyles: (state: ICommonState): ICommonAvailableStyles[] =>
			state.availableRefurbishmentStyles,
	},
	actions: {
		//// Header
		setAppBarHeight(newValue: number): void {
			this.appBarHeight = newValue;
		},

		//// Body
		// Utility
		setFormsData(): void {
			// Message info
			this.forms.msgInfo = i18nInstance.t("common.forms.msgInfo");

			// Title
			this.forms.signUp.title.titles = [
				i18nInstance.t("common.forms.signUp.title.titles.mr"),
				i18nInstance.t("common.forms.signUp.title.titles.mrs"),
				i18nInstance.t("common.forms.signUp.title.titles.miss"),
				i18nInstance.t("common.forms.signUp.title.titles.ms"),
				i18nInstance.t("common.forms.signUp.title.titles.mx"),
				i18nInstance.t("common.forms.signUp.title.titles.reverand"),
				i18nInstance.t("common.forms.signUp.title.titles.dr"),
			];
			this.forms.signUp.title.label = i18nInstance.t("common.forms.signUp.title.label") + this.asterisk;

			// First name
			this.forms.signUp.newsletter.name.firstname.label =
				i18nInstance.t("common.forms.signUp.newsletter.name.firstname.label") + this.asterisk;
			this.forms.signUp.newsletter.name.firstname.placeholder = i18nInstance.t(
				"common.forms.signUp.newsletter.name.firstname.placeholder"
			);

			// Last name
			this.forms.signUp.newsletter.name.lastname.label =
				i18nInstance.t("common.forms.signUp.newsletter.name.lastname.label") + this.asterisk;
			this.forms.signUp.newsletter.name.lastname.placeholder = i18nInstance.t(
				"common.forms.signUp.newsletter.name.lastname.placeholder"
			);

			// Email
			this.forms.signUp.newsletter.email.label =
				i18nInstance.t("common.forms.signUp.newsletter.email.label") + this.asterisk;
			this.forms.signUp.newsletter.email.placeholder = i18nInstance.t(
				"common.forms.signUp.newsletter.email.placeholder"
			);

			// Password
			this.forms.signUp.password.label = i18nInstance.t("common.forms.signUp.password.label") + this.asterisk;
			this.forms.signUp.password.placeholder = i18nInstance.t("common.forms.signUp.password.placeholder");
			this.forms.signUp.password.repeat.label =
				i18nInstance.t("common.forms.signUp.password.repeat.label") + this.asterisk;
			this.forms.signUp.password.repeat.placeholder = i18nInstance.t(
				"common.forms.signUp.password.repeat.placeholder"
			);

			// Date of birth
			this.forms.signUp.dateOfBirth.label = i18nInstance.t("common.forms.signUp.dateOfBirth.label") + this.asterisk;
			this.forms.signUp.dateOfBirth.placeholder = i18nInstance.t("common.forms.signUp.dateOfBirth.placeholder");

			// Telephone
			this.forms.signUp.telephone.label = i18nInstance.t("common.forms.signUp.telephone.label") + this.asterisk;
			this.forms.signUp.telephone.placeholder = i18nInstance.t("common.forms.signUp.telephone.placeholder");

			// Address
			this.forms.signUp.address.label = i18nInstance.t("common.forms.signUp.address.label") + this.asterisk;
			this.forms.signUp.address.placeholder = i18nInstance.t("common.forms.signUp.address.placeholder");

			// Postcode
			this.forms.signUp.postcode.label = i18nInstance.t("common.forms.signUp.postcode.label") + this.asterisk;
			this.forms.signUp.postcode.placeholder = i18nInstance.t("common.forms.signUp.postcode.placeholder");
		},
		// Dialogs
		setSignUpNewsletterDialogData(): void {
			// Toolbar title
			this.signUpNewsletterDialogData.toolbar.title = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.defaultTitle"
			);

			// Toolbar message
			this.signUpNewsletterDialogData.toolbar.message = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.pages.home.message"
			);

			// Toolbar icon
			this.signUpNewsletterDialogData.toolbar.icon.tooltip = i18nInstance.t(
				"common.dialogs.signUpNewsletter.toolbar.icon.tooltip"
			);
		},
		// Be-Inspired
		setDropdownOptions(): void {
			for (let i = 0; i < pageServiceNamesAsArrayKeys.length; i++) {
				this.dropdownOptions.push(
					i18nInstance.t(`common.sections.beInspired.dropdown.items.${pageServiceNamesAsArrayKeys[i]}`)
				);
			}
		},
		// Sections
		setIsCanvasComponentActive(newValue: any): void {
			this.isCanvasComponentActive = newValue;
		},
		setIsBeInspiredComponentActive(newValue: any): void {
			this.isBeInspiredComponentActive = newValue;
		},
		setIsPortfolioComponentActive(newValue: any): void {
			this.isPortfolioComponentActive = newValue;
		},
		setIsLatestNewsComponentActive(newValue: any): void {
			this.isLatestNewsComponentActive = newValue;
		},
		setIsProcessOfEliminationActive(newValue: any): void {
			this.isProcessOfEliminationActive = newValue;
		},
		setIsLatestReviewsComponentActive(newValue: any): void {
			this.isLatestReviewsComponentActive = newValue;
		},
		setAvailableKitchenStyles(): void {
			for (let i = 0; i < this.availableKitchenStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`common.pages.kitchen.images[${i}].alt`);
			}
		},
		setAvailableBathroomStyles(): void {
			for (let i = 0; i < this.availableBathroomStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`common.pages.bathroom.images[${i}].alt`);
			}
		},
		setAvailableNewbuildStyles(): void {
			for (let i = 0; i < this.availableNewbuildStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`common.pages.newbuild.images[${i}].alt`);
			}
		},
		setAvailableExtensionStyles(): void {
			for (let i = 0; i < this.availableExtensionStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`common.pages.extension.images[${i}].alt`);
			}
		},
		setAvailableRefurbishmentStyles(): void {
			for (let i = 0; i < this.availableRefurbishmentStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`common.pages.refurbishment.images[${i}].alt`);
			}
		},
		//// Footer
	},
});

export const childStores = {
	useHeaderStore,
	useHomeStore,
	useKitchenStore,
	useBathroomStore,
	useNewbuildStore,
	useExtensionStore,
	useRefurbishmentStore,
	useContactStore,
	useAboutStore,
	useNewsStore,
	useReviewsStore,
	useFooterStore,
	useErrorStore,
};

export const eventStores = {
	useEventStore,
};

export default pinia;
