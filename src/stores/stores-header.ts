import { defineStore } from "pinia";

// Header interface
import IHeaderState from "../interfaces/common/header/interface-header";

const useHeaderStore = defineStore("header-store", {
	state: (): IHeaderState => ({
		drawer: false,
	}),
	getters: {
		getDrawer: (state): boolean => state.drawer,
	},
	actions: {
		setDrawer(newValue: any): void {
			this.drawer = newValue;
		},
	},
});

export default useHeaderStore;
