import { createPinia, defineStore } from "pinia";

// Stores to load immediately
import useHeaderStore from "@stores/stores-header";
import useHomeStore from "@src/stores/pages/stores-home";
import useFooterStore from "@stores/stores-footer";
import useErrorStore from "@stores/stores-error";
import useEventStore from "@src/stores/events/stores-event";

// Stores to load when called, to increase performance
/*
const useKitchenStore = () => import("@stores/stores-kitchen");
const useBathroomStore = () => import("@stores/stores-bathroom");
const useNewbuildStore = () => import("@stores/stores-newbuild");
const useExtensionStore = () => import("@stores/stores-extension");
const useRefurbishmentStore = () => import("@stores/stores-refurbishment");
const useContactStore = () => import("@stores/stores-contact");
const useAboutStore = () => import("@stores/stores-about");
const useNewsStore = () => import("@stores/stores-news");
const useReviewsStore = () => import("@stores/stores-reveiws");
*/

// Convert to above when ready
import useKitchenStore from "@stores/pages/stores-kitchen";
import useBathroomStore from "@stores/pages/stores-bathroom";
import useNewbuildStore from "@stores/pages/stores-newbuild";
import useExtensionStore from "@src/stores/pages/stores-extension";
import useRefurbishmentStore from "@stores/pages/stores-refurbishment";
import useContactStore from "@stores/pages/stores-contact";
import useAboutStore from "@src/stores/pages/stores-about";
import useNewsStore from "@stores/pages/stores-news";
import useReviewsStore from "@stores/pages/stores-reveiws";

// Interfaces
import ICommonState, { ICommonAvailableStyles } from "@interfaces/common/interfaces-common";

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Enums
import { AppBarDensity } from "@src/enums/sizing/enums-sizing";

// Data
import { pageServiceNamesAsArray } from "@utils/text/common/pages/utils-text-common-pages";

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
export const parentStore = defineStore("common-store", {
	state: (): ICommonState => ({
		//// Header
		appBarHeight: AppBarDensity.DEFAULT,

		//// Body
		dropdownOptions: [],
		// Sections
		isCanvasComponentActive: true,
		isBeInspiredComponentActive: true,
		isPortfolioComponentActive: true,
		isLatestNewsComponentActive: true,
		isProcessOfEliminationActive: true,
		isLatestReviewsComponentActive: true,
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
		getAvailableRefurbishmentStyles: (state: ICommonState): ICommonAvailableStyles[] => state.availableRefurbishmentStyles,
	},
	actions: {
		//// Header
		setAppBarHeight(newValue: number): void {
			this.appBarHeight = newValue;
		},

		//// Body
		setDropdownOptions(): void {
			for (let i = 0; i < pageServiceNamesAsArray.length; i++) {
				this.dropdownOptions.push(i18nInstance.t(`$vuetify.common.sections.beInspired.dropdown.items.${pageServiceNamesAsArray[i]}`));
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
				this.availableKitchenStyles[i].alt = i18nInstance.t(`$vuetify.common.pages.kitchen.images[${i}].alt`);
			}
		},
		setAvailableBathroomStyles(): void {
			for (let i = 0; i < this.availableBathroomStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`$vuetify.common.pages.bathroom.images[${i}].alt`);
			}
		},
		setAvailableNewbuildStyles(): void {
			for (let i = 0; i < this.availableNewbuildStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`$vuetify.common.pages.newbuild.images[${i}].alt`);
			}
		},
		setAvailableExtensionStyles(): void {
			for (let i = 0; i < this.availableExtensionStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`$vuetify.common.pages.extension.images[${i}].alt`);
			}
		},
		setAvailableRefurbishmentStyles(): void {
			for (let i = 0; i < this.availableRefurbishmentStyles.length; i++) {
				this.availableKitchenStyles[i].alt = i18nInstance.t(`$vuetify.common.pages.refurbishment.images[${i}].alt`);
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
