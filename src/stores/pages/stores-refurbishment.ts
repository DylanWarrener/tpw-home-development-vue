import { defineStore } from "pinia";

// Refurbishment interface
import IRefurbishmentState from "../interfaces/refurbishment/interface-refurbishment";

const useRefurbishmentStore = defineStore("refurbishmentStore", {
	state: (): IRefurbishmentState => ({}),
	getters: {},
	actions: {},
});

export default useRefurbishmentStore;
