import { defineStore } from "pinia";

// Footer interface
import IFooterData, { IFooterTextualData } from "@/interfaces/interface-footer";

export const useFooterStore = defineStore("footerStore", {
	state: (): IFooterData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): IFooterTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any): void {
			this.textualData = data;
		},
	},
});
