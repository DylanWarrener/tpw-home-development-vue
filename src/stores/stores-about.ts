import { defineStore } from "pinia";

// About interface
import IAboutState from "../interfaces/about/interface-about";

const useAboutStore = defineStore("aboutStore", {
	state: (): IAboutState => ({}),
	getters: {},
	actions: {},
});

export default useAboutStore;
