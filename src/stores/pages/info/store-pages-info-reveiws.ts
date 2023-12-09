import { defineStore } from "pinia";

import IReviewsState from "@declaration/common/interfaces/pages/info/interface-common-pages-info-reviews";

const useReviewsStore = defineStore("reviews-store", {
	state: (): IReviewsState => ({}),
	getters: {},
	actions: {},
});

export default useReviewsStore;
