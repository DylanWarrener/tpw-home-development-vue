import { defineStore } from "pinia";

// About interface
import IAboutBaseData, { IAboutTextualData } from "@/interfaces/interface-about";

const useAboutStore = defineStore("aboutStore", {
	state: (): IAboutBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): IAboutTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});

export default useAboutStore;
