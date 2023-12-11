import { createPinia, defineStore } from "pinia";

// Interfaces
import ICommonState, {
	// Forms
	ICommonFormsData,
	// Sections
	ICommonAvailableStyles,
} from "@declaration/common/interfaces/interface-common";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Data
import { pageServiceNamesAsArrayKeys } from "@constants/common/arrays/constants-common-utils-arrays";

// Enums
import { StoreIDs } from "@src/enums/common/enums-common";

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

const pinia = createPinia();

// Main store
export const useCommonStore = defineStore(StoreIDs.COMMON_STORE_ID, {
	state: (): ICommonState => ({
		//// Utility
		asterisk: "*",

		//// Sections
		isCanvasComponentActive: false,
		isBeInspiredComponentActive: false,
		isPortfolioComponentActive: false,
		isLatestNewsComponentActive: false,
		isProcessOfEliminationActive: false,
		isLatestReviewsComponentActive: false,
		// Be-inspired
		dropdownOptions: [],
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

		//// Forms
		formsData: {
			signUp: {
				title: {
					titles: ["", "", "", "", "", "", ""],
					label: "",
					value: "",
				},
				newsletter: {
					name: {
						firstname: {
							label: "",
							placeholder: "",
							value: "",
						},
						lastname: {
							label: "",
							placeholder: "",
							value: "",
						},
					},
					email: {
						label: "",
						placeholder: "",
						value: "",
					},
				},
				password: {
					label: "",
					placeholder: "",
					value: "",
					repeat: {
						label: "",
						placeholder: "",
						value: "",
					},
				},
				dateOfBirth: {
					label: "",
					placeholder: "",
					value: "",
				},
				telephone: {
					label: "",
					placeholder: "",
					value: "",
				},
				address: {
					label: "",
					placeholder: "",
					value: "",
				},
				postcode: {
					label: "",
					placeholder: "",
					value: "",
				},
			},
		},
	}),
	getters: {
		//// Utility
		getAsterisk: (state: ICommonState): string => state.asterisk,

		//// Sections
		getIsCanvasComponentActive: (state: ICommonState): boolean => state.isCanvasComponentActive,
		getIsBeInspiredComponentActive: (state: ICommonState): boolean => state.isBeInspiredComponentActive,
		getIsPortfolioComponentActive: (state: ICommonState): boolean => state.isPortfolioComponentActive,
		getIsLatestNewsComponentActive: (state: ICommonState): boolean => state.isLatestNewsComponentActive,
		getIsProcessOfEliminationActive: (state: ICommonState): boolean => state.isProcessOfEliminationActive,
		getIsLatestReviewsComponentActive: (state: ICommonState): boolean => state.isLatestReviewsComponentActive,
		// Be-inspired
		getDropdownOptions: (state: ICommonState): string[] => state.dropdownOptions,
		getAvailableKitchenStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableKitchenStyles,
		getAvailableBathroomStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableBathroomStyles,
		getAvailableNewbuildStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableNewbuildStyles,
		getAvailableExtensionStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableExtensionStyles,
		getAvailableRefurbishmentStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableRefurbishmentStyles,

		//// Forms
		getFormsData: (state: ICommonState): ICommonFormsData => state.formsData,
	},
	actions: {
		/* GETTERS */

		/* SETTERS */
		//// Sections
		setIsCanvasComponentActive(newValue: boolean): void {
			this.isCanvasComponentActive = newValue;
		},
		setIsBeInspiredComponentActive(newValue: boolean): void {
			this.isBeInspiredComponentActive = newValue;
		},
		setIsPortfolioComponentActive(newValue: boolean): void {
			this.isPortfolioComponentActive = newValue;
		},
		setIsLatestNewsComponentActive(newValue: boolean): void {
			this.isLatestNewsComponentActive = newValue;
		},
		setIsProcessOfEliminationActive(newValue: boolean): void {
			this.isProcessOfEliminationActive = newValue;
		},
		setIsLatestReviewsComponentActive(newValue: boolean): void {
			this.isLatestReviewsComponentActive = newValue;
		},
		// Be-Inspired
		setDropdownOptions(): void {
			for (let i = 0; i < pageServiceNamesAsArrayKeys.length; i++) {
				//this.dropdownOptions.push(i18nInstance.t(`common.sections.beInspired.dropdown.items.${pageServiceNamesAsArrayKeys[i]}`));
			}
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

		//// Forms
		setFormsData(): void {
			// Title
			const titles: string[] = [
				i18nInstance.t("common.forms.signUp.title.titles.mr"),
				i18nInstance.t("common.forms.signUp.title.titles.mrs"),
				i18nInstance.t("common.forms.signUp.title.titles.miss"),
				i18nInstance.t("common.forms.signUp.title.titles.ms"),
				i18nInstance.t("common.forms.signUp.title.titles.mx"),
				i18nInstance.t("common.forms.signUp.title.titles.reverand"),
				i18nInstance.t("common.forms.signUp.title.titles.dr"),
			];
			this.formsData.signUp.title.titles = titles;
			this.formsData.signUp.title.label = i18nInstance.t("common.forms.signUp.title.label") + this.asterisk;

			// First name
			this.formsData.signUp.newsletter.name.firstname.label =
				i18nInstance.t("common.forms.signUp.newsletter.name.firstname.label") + this.asterisk;
			this.formsData.signUp.newsletter.name.firstname.placeholder = i18nInstance.t("common.forms.signUp.newsletter.name.firstname.placeholder");

			// Last name
			this.formsData.signUp.newsletter.name.lastname.label =
				i18nInstance.t("common.forms.signUp.newsletter.name.lastname.label") + this.asterisk;
			this.formsData.signUp.newsletter.name.lastname.placeholder = i18nInstance.t("common.forms.signUp.newsletter.name.lastname.placeholder");

			// Email
			this.formsData.signUp.newsletter.email.label = i18nInstance.t("common.forms.signUp.newsletter.email.label") + this.asterisk;
			this.formsData.signUp.newsletter.email.placeholder = i18nInstance.t("common.forms.signUp.newsletter.email.placeholder");

			// Password
			this.formsData.signUp.password.label = i18nInstance.t("common.forms.signUp.password.label") + this.asterisk;
			this.formsData.signUp.password.placeholder = i18nInstance.t("common.forms.signUp.password.placeholder");
			this.formsData.signUp.password.repeat.label = i18nInstance.t("common.forms.signUp.password.repeat.label") + this.asterisk;
			this.formsData.signUp.password.repeat.placeholder = i18nInstance.t("common.forms.signUp.password.repeat.placeholder");

			// Date of birth
			this.formsData.signUp.dateOfBirth.label = i18nInstance.t("common.forms.signUp.dateOfBirth.label") + this.asterisk;
			this.formsData.signUp.dateOfBirth.placeholder = i18nInstance.t("common.forms.signUp.dateOfBirth.placeholder");

			// Telephone
			this.formsData.signUp.telephone.label = i18nInstance.t("common.forms.signUp.telephone.label") + this.asterisk;
			this.formsData.signUp.telephone.placeholder = i18nInstance.t("common.forms.signUp.telephone.placeholder");

			// Address
			this.formsData.signUp.address.label = i18nInstance.t("common.forms.signUp.address.label") + this.asterisk;
			this.formsData.signUp.address.placeholder = i18nInstance.t("common.forms.signUp.address.placeholder");

			// Postcode
			this.formsData.signUp.postcode.label = i18nInstance.t("common.forms.signUp.postcode.label") + this.asterisk;
			this.formsData.signUp.postcode.placeholder = i18nInstance.t("common.forms.signUp.postcode.placeholder");
		},
	},
});

export default pinia;
