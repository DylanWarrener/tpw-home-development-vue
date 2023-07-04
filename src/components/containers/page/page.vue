<template>
	<v-sheet class="w-100 h-100">
		<canvas-component
			v-if="isCanvasComponentActive"
			:src="src"
			:title="title"
			:subtitle="subtitle"
			:btn-text="btnText"
			@card-clicked="handleClick"
		></canvas-component>
		<be-inspired-component v-if="isBeInspiredComponentActive"></be-inspired-component>
		<portfolio-component v-if="isPortfolioComponentActive"></portfolio-component>
		<reviews-component v-if="isReviewComponentActive"></reviews-component>
		<process-of-elimination-component v-if="isProcessOfEliminationActive"></process-of-elimination-component>
		<latest-news-component v-if="isLatestNewsComponentActive"></latest-news-component>
	</v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import parentStore from "../../../store";

// Components
import Canvas from "../canvas/canvas.vue";
import BeInspired from "../../body/sections/be-inspired.vue";
import Portfolio from "../../body/sections/portfolio.vue";
import Reviews from "../../body/sections/reviews.vue";
import ProcessOfElimination from "../../body/sections/process-of-elimination.vue";
import LatestNews from "../../body/sections/latest-news.vue";

// Utils
import { scrollToElement } from "../../../utils/utils";

export default defineComponent({
	name: "page-content-component",
	props: {
		src: { type: String, required: true },
		title: { type: String, required: true },
		subtitle: { type: String, required: false },
		btnText: { type: String, required: true },
	},
	components: {
		"canvas-component": Canvas,
		"be-inspired-component": BeInspired,
		"portfolio-component": Portfolio,
		"reviews-component": Reviews,
		"process-of-elimination-component": ProcessOfElimination,
		"latest-news-component": LatestNews,
	},
	computed: {
		isCanvasComponentActive(): boolean {
			return this.storeCommon.getIsCanvasComponentActive;
		},
		isBeInspiredComponentActive(): boolean {
			return this.storeCommon.getIsBeInspiredComponentActive;
		},
		isPortfolioComponentActive(): boolean {
			return this.storeCommon.getIsPortfolioComponentActive;
		},
		isReviewComponentActive(): boolean {
			return this.storeCommon.getIsReviewComponentActive;
		},
		isProcessOfEliminationActive(): boolean {
			return this.storeCommon.getIsProcessOfEliminationActive;
		},
		isLatestNewsComponentActive(): boolean {
			return this.storeCommon.getIsLatestNewsComponentActive;
		},
	},
	methods: {
		handleClick(): void {
			//const beInspiredRef = this.$refs["section"];
			//scrollToElement(beInspiredRef);
			console.log(this.$refs);
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
