import { defineStore } from "pinia";

// Bathroom interface
import IBathroomState from "../interfaces/bathroom/interface-bathroom";

const useBathroomStore = defineStore("bathroomStore", {
	state: (): IBathroomState => ({}),
	getters: {},
	actions: {},
});

export default useBathroomStore;
