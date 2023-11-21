import { defineStore } from "pinia";

// Bathroom interface
import IBathroomState from "@interfaces/common/pages/service/bathroom/interfaces-common-pages-service-bathroom";

const useBathroomStore = defineStore("bathroomStore", {
	state: (): IBathroomState => ({}),
	getters: {},
	actions: {},
});

export default useBathroomStore;
