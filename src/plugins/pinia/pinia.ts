import { createPinia, defineStore } from "pinia";

// All stores
import useHomeStore from "../../stores/stores-home";
import useKitchenStore from "../../stores/stores-kitchen";
import useBathroomStore from "../../stores/stores-bathroom";
import useNewbuildStore from "../../stores/stores-newbuild";
import useExtensionStore from "../../stores/stores-extension";
import useRefurbishmentStore from "../../stores/stores-refurbishment";
import useContactStore from "../../stores/stores-contact";
import useAboutStore from "../../stores/stores-about";
import useNewsStore from "../../stores/stores-news";
import useErrorStore from "../../stores/stores-error";

const pinia = createPinia();

// Main store
export const parentStore = defineStore("common-store", {
  state: () => ({
    // Header state
    //// App bar
    drawer: false,
    appBarHeight: 48,

    // Common
    //// Page section state
    isCanvasComponentActive: true,
    isBeInspiredComponentActive: true,
    isPortfolioComponentActive: true,
    isReviewComponentActive: true,
    isProcessOfEliminationActive: true,
    isLatestNewsComponentActive: true,

    // Footer state
  }),
  getters: {
    // Header state
    //// App bar getters
    getDrawer: (state): boolean => state.drawer,
    getAppBarHeight: (state): number => state.appBarHeight,

    // Common
    //// Page section getters
    getIsCanvasComponentActive: (state): boolean =>
      state.isCanvasComponentActive,
    getIsBeInspiredComponentActive: (state): boolean =>
      state.isBeInspiredComponentActive,
    getIsPortfolioComponentActive: (state): boolean =>
      state.isPortfolioComponentActive,
    getIsReviewComponentActive: (state): boolean =>
      state.isReviewComponentActive,
    getIsProcessOfEliminationActive: (state): boolean =>
      state.isProcessOfEliminationActive,
    getIsLatestNewsComponentActive: (state): boolean =>
      state.isLatestNewsComponentActive,

    // Footer state
  },
  actions: {
    // Header setters
    //// App bar setters
    setDrawer(newValue: boolean): void {
      this.drawer = newValue;
    },
    setAppBarHeight(newValue: number): void {
      this.appBarHeight = newValue;
    },

    // Common
    //// Page section setters
    setIsCanvasComponentActive(newValue: any): void {
      this.isCanvasComponentActive = newValue;
    },
    setIsBeInspiredComponentActive(newValue: any): void {
      this.isBeInspiredComponentActive = newValue;
    },
    setIsPortfolioComponentActive(newValue: any): void {
      this.isPortfolioComponentActive = newValue;
    },
    setIsReviewComponentActive(newValue: any): void {
      this.isReviewComponentActive = newValue;
    },
    setIsProcessOfEliminationActive(newValue: any): void {
      this.isProcessOfEliminationActive = newValue;
    },
    setIsLatestNewsComponentActive(newValue: any): void {
      this.isLatestNewsComponentActive = newValue;
    },

    // Footer state
  },
});

export const childStores = {
  useHomeStore,
  useKitchenStore,
  useBathroomStore,
  useNewbuildStore,
  useExtensionStore,
  useRefurbishmentStore,
  useContactStore,
  useAboutStore,
  useNewsStore,
  useErrorStore,
};

export default pinia;
