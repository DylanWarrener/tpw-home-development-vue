import { createPinia, defineStore } from "pinia";

// Enums
import { AppBarDensity } from "@enums/sizing";

// Page stores
import useHeaderStore from "@stores/stores-header";
import useHomeStore from "@stores/stores-home";
import useKitchenStore from "@stores/stores-kitchen";
import useBathroomStore from "@stores/stores-bathroom";
import useNewbuildStore from "@stores/stores-newbuild";
import useExtensionStore from "@stores/stores-extension";
import useRefurbishmentStore from "@stores/stores-refurbishment";
import useContactStore from "@stores/stores-contact";
import useAboutStore from "@stores/stores-about";
import useNewsStore from "@stores/stores-news";
import useReviewsStore from "@stores/stores-reveiws";
import useFooterStore from "@stores/stores-footer";
import useErrorStore from "@stores/stores-error";

// Event stores
import useGlobalEventStore from "@stores/stores-event";

const pinia = createPinia();

// Main store
export const parentStore = defineStore("common-store", {
	state: () => ({
		drawer: false,
		appBarHeight: AppBarDensity.DEFAULT,
		isCanvasComponentActive: true,
		isBeInspiredComponentActive: true,
		isPortfolioComponentActive: true,
		isProcessOfEliminationActive: true,
		isNewsComponentActive: true,
		isReviewsComponentActive: true,
	}),
	getters: {
		getDrawer: (state): boolean => state.drawer,
		getAppBarHeight: (state): number => state.appBarHeight,
		getIsCanvasComponentActive: (state): boolean => state.isCanvasComponentActive,
		getIsBeInspiredComponentActive: (state): boolean => state.isBeInspiredComponentActive,
		getIsPortfolioComponentActive: (state): boolean => state.isPortfolioComponentActive,
		getIsProcessOfEliminationActive: (state): boolean => state.isProcessOfEliminationActive,
		getIsNewsComponentActive: (state): boolean => state.isNewsComponentActive,
		getIsReviewsComponentActive: (state): boolean => state.isReviewsComponentActive,
	},
	actions: {
		setDrawer(newValue: boolean): void {
			this.drawer = newValue;
		},
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
	useGlobalEventStore,
};

export default pinia;
