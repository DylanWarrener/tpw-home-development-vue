import { defineStore } from "pinia";

// Kitchen interface
import { IKitchenState } from "../interfaces/kitchen/interface-kitchen";

const useKitchenStore = defineStore("kitchenStore", {
	state: (): IKitchenState => ({}),
	getters: {},
	actions: {},
});

export default useKitchenStore;
