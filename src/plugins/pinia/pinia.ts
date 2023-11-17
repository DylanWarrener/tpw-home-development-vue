import { createPinia, defineStore } from "pinia";

// Stores to load immediately
import useHeaderStore from "@stores/stores-header";
import useHomeStore from "@stores/stores-home";
import useFooterStore from "@stores/stores-footer";
import useErrorStore from "@stores/stores-error";
import useEventStore from "@stores/stores-event";

// Localisation
import i18n from "@plugins/vuei18n/vue-i18n";

// Enums
import { AppBarDensity } from "@src/enums/enums-sizing";

// Stores to load when called
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
import useKitchenStore from "@stores/stores-kitchen";
import useBathroomStore from "@stores/stores-bathroom";
import useNewbuildStore from "@stores/stores-newbuild";
import useExtensionStore from "@stores/stores-extension";
import useRefurbishmentStore from "@stores/stores-refurbishment";
import useContactStore from "@stores/stores-contact";
import useAboutStore from "@stores/stores-about";
import useNewsStore from "@stores/stores-news";
import useReviewsStore from "@stores/stores-reveiws";

const pinia = createPinia();

// Main store
export const parentStore = defineStore("common-store", {
	state: () => ({
		appBarHeight: AppBarDensity.DEFAULT,
		isCanvasComponentActive: true,
		isBeInspiredComponentActive: true,
		isPortfolioComponentActive: true,
		isProcessOfEliminationActive: true,
		isNewsComponentActive: true,
		isReviewsComponentActive: true,
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
