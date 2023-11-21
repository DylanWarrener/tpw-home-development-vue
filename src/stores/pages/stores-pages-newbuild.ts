import { defineStore } from "pinia";

// Newbuild interface
import INewbuildState from "../interfaces/newbuild/interface-newbuild";

const useNewbuildStore = defineStore("newbuildStore", {
	state: (): INewbuildState => ({}),
	getters: {},
	actions: {},
});

export default useNewbuildStore;
