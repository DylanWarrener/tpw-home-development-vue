import { defineStore } from "pinia";

// Home interface
import IHomeState from "../interfaces/home/interface-home";

const useHomeStore = defineStore("homeStore", {
	state: (): IHomeState => ({}),
	getters: {},
	actions: {},
});

export default useHomeStore;
