import { defineStore } from "pinia";

// Extension interface
import IHomeState from "@interfaces/common/pages/info/home/interfaces-common-pages-info-home";

const useHomeStore = defineStore("home-store", {
	state: (): IHomeState => ({}),
	getters: {},
	actions: {},
});

export default useHomeStore;
