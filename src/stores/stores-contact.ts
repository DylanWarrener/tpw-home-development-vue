import { defineStore } from "pinia";

// Contact interface
import IContactBaseData, { IContactTextualData } from "@/interfaces/interface-contact";

export const useContactStore = defineStore("contactStore", {
	state: (): IContactBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): IContactTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});
