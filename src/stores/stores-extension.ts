import { defineStore } from "pinia";

// Extension interface
import IExtensionBaseData, { IExtensionTextualData } from "@/interfaces/interface-extension";

const useExtensionStore = defineStore("extensionStore", {
	state: (): IExtensionBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): IExtensionTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});

export default useExtensionStore;
