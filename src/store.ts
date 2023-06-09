import { defineStore } from "pinia";

// All stores
import useHeaderStore from "./stores/stores-header";
import useHomeStore from "./stores/stores-home";
import useKitchenStore from "./stores/stores-kitchen";
import useBathroomStore from "./stores/stores-bathroom";
import useNewbuildStore from "./stores/stores-newbuild";
import useExtensionStore from "./stores/stores-extension";
import useRefurbishmentStore from "./stores/stores-refurbishment";
import useContactStore from "./stores/stores-contact";
import useAboutStore from "./stores/stores-about";
import useNewsStore from "./stores/stores-news";
import useErrorStore from "./stores/stores-error";
import useFooterStore from "./stores/stores-footer";

// Common interface
import IBaseState from "./interfaces/common/interface-common";

// Main store
const parentStore = defineStore("base-store", {
	state: (): IBaseState => ({}),
	getters: {},
	actions: {},
});

// Other stores
export const childStores = {
	useHeaderStore,
	useHomeStore,
	useKitchenStore,
	useBathroomStore,
	useNewbuildStore,
	useExtensionStore,
	useRefurbishmentStore,
	useContactStore,
	useAboutStore,
	useNewsStore,
	useFooterStore,
	useErrorStore,
};

/* const childStoreNames = [
	"Header",
	"Home",
	"Kitchen",
	"Bathroom",
	"Newbuild",
	"Extension",
	"Refurbishment",
	"Contact",
	"About",
	"News",
	"Error",
	"Footer",
];

const childStores: { [key: string]: () => Promise<any> } = {};

const importChildStore = async (name: string) => {
	const url: string = `./stores/stores-${name.toLowerCase()}`;
	const module = await import(url);
	return module[`use${name}Store`];
};

childStoreNames.forEach((name) => {
	childStores[name.toLowerCase()] = () => importChildStore(name);
});

// Export a function to get a specific child store dynamically
export const getChildStore = async (storeName: string) => {
	const normalizedStoreName = storeName.toLowerCase();
	if (childStores.hasOwnProperty(normalizedStoreName)) {
		const importFn = childStores[normalizedStoreName];
		const resolvedStore = await importFn();
		return resolvedStore;
	} else {
		throw new Error(`Child store '${storeName}' does not exist.`);
	}
}; */

export default parentStore;
