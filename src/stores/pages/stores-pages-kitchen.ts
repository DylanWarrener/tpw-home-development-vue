import { defineStore } from "pinia";

// Kitchen interface
import IKitchenState from "@interfaces/common/pages/service/kitchen/interfaces-common-pages-service-kitchen";

const useKitchenStore = defineStore("kitchen-store", {
	state: (): IKitchenState => ({}),
	getters: {},
	actions: {},
});

export default useKitchenStore;
