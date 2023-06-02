import { defineStore } from "pinia";

// News interface
import INewsBaseData, { INewsTextualData } from "@/interfaces/interface-news";

const useNewsStore = defineStore("newsStore", {
	state: (): INewsBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): INewsTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any): void {
			this.textualData = data;
		},
	},
});

export default useNewsStore;
