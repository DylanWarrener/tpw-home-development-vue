import { defineStore } from "pinia";

// Footer interface
import IFooterState from "../interfaces/footer/interface-footer";

const useFooterStore = defineStore("footerStore", {
	state: (): IFooterState => ({}),
	getters: {},
	actions: {},
});

export default useFooterStore;
