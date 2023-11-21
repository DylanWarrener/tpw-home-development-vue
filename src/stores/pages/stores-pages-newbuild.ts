import { defineStore } from "pinia";

// Newbuild interface
import INewbuildState from "@interfaces/common/pages/service/newbuild/interfaces-common-pages-service-newbuild";

const useNewbuildStore = defineStore("newbuild-store", {
	state: (): INewbuildState => ({}),
	getters: {},
	actions: {},
});

export default useNewbuildStore;
