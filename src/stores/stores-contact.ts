import { defineStore } from "pinia";

import IContactState from "@interfaces/contact/interface-contact";

const useContactStore = defineStore("contact-store", {
    state: (): IContactState => ({}),
    getters: {},
    actions: {},
});

export default useContactStore;
