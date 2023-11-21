import { defineStore } from "pinia";

// Refurbishment interface
import IRefurbishmentState from "@interfaces/common/pages/service/refurbishment/interfaces-common-pages-service-refurbishment";

const useRefurbishmentStore = defineStore("refurbishment-store", {
	state: (): IRefurbishmentState => ({}),
	getters: {},
	actions: {},
});

export default useRefurbishmentStore;
