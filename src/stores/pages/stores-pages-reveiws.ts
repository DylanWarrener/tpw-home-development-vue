import { defineStore } from "pinia";

import IReviewsState from "@interfaces/common/pages/info/reviews/interfaces-common-pages-info-reviews";

const useReviewsStore = defineStore("reviews-store", {
	state: (): IReviewsState => ({}),
	getters: {},
	actions: {},
});

export default useReviewsStore;
