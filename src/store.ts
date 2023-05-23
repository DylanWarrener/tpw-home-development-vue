import { defineStore } from "pinia";

// All stores
import { useHeaderStore } from "./stores/stores-header";
import { useHomeStore } from "./stores/stores-home";
import { useKitchenStore } from "./stores/stores-kitchen";
import { useBathroomStore } from "./stores/stores-bathroom";
import { useNewbuildStore } from "./stores/stores-newbuild";
import { useExtensionStore } from "./stores/stores-extension";
import { useRefurbishmentStore } from "./stores/stores-refurbishment";
import { useContactStore } from "./stores/stores-contact";
import { useAboutStore } from "./stores/stores-about";
import { useNewsStore } from "./stores/stores-news";
import { useErrorStore } from "./stores/stores-error";
import { useFooterStore } from "./stores/stores-footer";

// Common interface
import IBaseData, { ICommonTextualData } from "@/interfaces/common/interface-common";

// Main store
const parentStore = defineStore("commonStore", {
	state: (): IBaseData => {
		return {};
	},
	getters: {},
	actions: {},
});

// Other stores
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
	useFooterStore,
	useErrorStore,
};

export default parentStore;
