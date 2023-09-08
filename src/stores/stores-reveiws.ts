import { defineStore } from "pinia";

import IReviewsState from "@interfaces/about/interface-reviews";

const useReviewsStore = defineStore("reviews-store", {
	state: (): IReviewsState => ({}),
	getters: {},
	actions: {},
});

export default useReviewsStore;
