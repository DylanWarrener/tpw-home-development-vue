import { defineStore } from "pinia";

// Contact interface
import IContactState from "../interfaces/contact/interface-contact";

const useContactStore = defineStore("contactStore", {
	state: (): IContactState => ({}),
	getters: {},
	actions: {},
});

export default useContactStore;
