console.log("Home store loaded");
import { defineStore } from "pinia";

// Interfaces
import IHomeStore, { IHomeState } from "@interfaces/common/pages/info/home/interfaces-common-pages-info-home";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

const useHomeStore: IHomeStore = defineStore(StoreIDs.HOME_STORE_ID, {
	state: (): IHomeState => ({}),
	getters: {},
	actions: {},
});

export default useHomeStore;
