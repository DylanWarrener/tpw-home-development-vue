import { defineStore } from "pinia";

// Interfaces
import { IBeInspiredState } from "@interfaces/beInspired/interface-be-inspired";

const useBeInspiredStore = defineStore("be-inspired-store", {
	state: (): IBeInspiredState => ({}),
	getters: {},
	actions: {},
});

export default useBeInspiredStore;
