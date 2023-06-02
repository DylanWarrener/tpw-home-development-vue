import { defineStore } from "pinia";

// Refurbishment interface
import IRefubishmentBaseData, { IRefubishmentTextualData } from "@/interfaces/interface-refurbishment";

const useRefurbishmentStore = defineStore("refurbishmentStore", {
	state: (): IRefubishmentBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): IRefubishmentTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});

export default useRefurbishmentStore;
