import { defineStore } from "pinia";

// Bathroom interface
import IBathroomBaseData, { IBathroomTextualData } from "@/interfaces/interface-bathroom";

const useBathroomStore = defineStore("bathroomStore", {
	state: (): IBathroomBaseData => ({
		textualData: {},
	}),
	getters: {
		getTextualData: (state): IBathroomTextualData => state.textualData,
	},
	actions: {
		setTextualData(data: any) {
			this.textualData = data;
		},
	},
});

export default useBathroomStore;
