import { defineStore } from "pinia";

import IAboutState from "@interfaces/about/interface-about";

const useAboutStore = defineStore("about-store", {
    state: (): IAboutState => ({}),
    getters: {},
    actions: {},
});

export default useAboutStore;
