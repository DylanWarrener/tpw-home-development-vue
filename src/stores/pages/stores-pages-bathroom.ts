import { defineStore } from "pinia";

// Bathroom interface
import IBathroomState from "@interfaces/common/pages/service/bathroom/interfaces-common-pages-service-bathroom";

const useBathroomStore = defineStore("bathroom-store", {
	state: (): IBathroomState => ({}),
	getters: {},
	actions: {},
});

export default useBathroomStore;
