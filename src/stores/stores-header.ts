import { defineStore } from "pinia";

// Header interface
import IHeaderData, { ITextualData } from "@/interfaces/interface-header";

export const useHeaderStore = defineStore("headerStore", {
	state: (): IHeaderData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): ITextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any): void {
			this.textualData = data;
		},
	},
});