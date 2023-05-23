import { defineStore } from "pinia";

// Home interface
import IHomeBaseData, { IHomeTextualData } from "@/interfaces/interface-home";

export const useHomeStore = defineStore("homeStore", {
	state: (): IHomeBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): IHomeTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});
