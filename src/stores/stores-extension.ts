import { defineStore } from "pinia";

// Extension interface
import IExtensionState from "../interfaces/extension/interface-extension";

const useExtensionStore = defineStore("extensionStore", {
	state: (): IExtensionState => ({}),
	getters: {},
	actions: {},
});

export default useExtensionStore;
