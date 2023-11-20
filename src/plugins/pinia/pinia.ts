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

// Localisation
import { i18nInstance } from "@plugins/vuei18n/vue-i18n";

// Enums
import { AppBarDensity } from "@src/enums/sizing/enums-sizing";

// Data
import { dropdownOptions } from "@utils/text/common/utils-text-common";

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
// Newbuild PNGs (different styles of kitchens, using the available materials)
// Extension PNGs (different styles of kitchens, using the available materials)
// Refurbishment PNGs (different styles of kitchens, using the available materials)

const pinia = createPinia();

// Main store
export const parentStore = defineStore("common-store", {
	state: () => ({
		//// Header
		appBarHeight: AppBarDensity.DEFAULT,

		//// Body
		isCanvasComponentActive: true,
		isBeInspiredComponentActive: true,
		isPortfolioComponentActive: true,
		isProcessOfEliminationActive: true,
		isNewsComponentActive: true,
		isReviewsComponentActive: true,

		// Be inspired
		dropdownOptions: dropdownOptions,
		availableKitchenStyles: [
			{
				src: AscotLightGreyDustPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.ascotLightGreyDust.alt"),
			},
			{
				src: CambridgeFirGreenPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.cambridgeFirGreen.alt"),
			},
			{
				src: CartmelMusselPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.cartmelMussel.alt"),
			},
			{
				src: GranthamChalkstoneFirGreenPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.granthamChalkstoneFirGreen.alt"),
			},
			{
				src: LinearWhiteHalifaxOakPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.linearWhiteHalifaxOak.alt"),
			},
			{
				src: LucenteGlossCreamPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.lucenteGlossCream.alt"),
			},
			{
				src: NewmarketIndigoBluePNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.newmarketIndigoBlue.alt"),
			},
			{
				src: OxfordWhitePNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.oxfordWhite.alt"),
			},
			{
				src: StrattoDustGreyPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.strattoDustGrey.alt"),
			},
			{
				src: VivoPtoOnyxGreyPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.vivoPtoOnyxGrey.alt"),
			},
		],
		availableBathroomStyles: [
			{
				src: AscotLightGreyDustPNG,
				alt: i18nInstance.$t("$vuetify.pages.kitchen.images.ascotLightGreyDust.alt"),
			},
		],
		availableNewbuildStyles: [],
		availableExtensionStyles: [],
		availableRefurbishmentStyles: [],

		//// Footer
	}),
	getters: {
		getAppBarHeight: (state): number => state.appBarHeight,
		getIsCanvasComponentActive: (state): boolean => state.isCanvasComponentActive,
		getIsBeInspiredComponentActive: (state): boolean => state.isBeInspiredComponentActive,
		getIsPortfolioComponentActive: (state): boolean => state.isPortfolioComponentActive,
		getIsProcessOfEliminationActive: (state): boolean => state.isProcessOfEliminationActive,
		getIsNewsComponentActive: (state): boolean => state.isNewsComponentActive,
		getIsReviewsComponentActive: (state): boolean => state.isReviewsComponentActive,
	},
	actions: {
		setAppBarHeight(newValue: number): void {
			this.appBarHeight = newValue;
		},
		setIsCanvasComponentActive(newValue: any): void {
			this.isCanvasComponentActive = newValue;
		},
		setIsBeInspiredComponentActive(newValue: any): void {
			this.isBeInspiredComponentActive = newValue;
		},
		setIsPortfolioComponentActive(newValue: any): void {
			this.isPortfolioComponentActive = newValue;
		},
		setIsProcessOfEliminationActive(newValue: any): void {
			this.isProcessOfEliminationActive = newValue;
		},
		setIsNewsComponentActive(newValue: any): void {
			this.isNewsComponentActive = newValue;
		},
		setIsReviewsComponentActive(newValue: any): void {
			this.isReviewsComponentActive = newValue;
		},
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
