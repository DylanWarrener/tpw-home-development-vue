import { defineStore } from "pinia";

// Extension interface
import IExtensionState from "@interfaces/common/pages/service/extension/interfaces-common-pages-service-extension";

const useExtensionStore = defineStore("extensionStore", {
	state: (): IExtensionState => ({}),
	getters: {},
	actions: {},
});

export default useExtensionStore;
