import { defineStore } from "pinia";

// Newbuild interface
import INewbuildBaseData, { INewbuildTextualData } from "@/interfaces/interface-newbuild";

export const useNewbuildStore = defineStore("newbuildStore", {
	state: (): INewbuildBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): INewbuildTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});