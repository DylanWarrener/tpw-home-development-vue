<template>
	<v-container fluid class="pa-0">
		<v-row class="ma-0 pa-0">
			<v-col class="pa-0" cols="12">
				<v-sheet class="w-100 h-100">
					<!-- Canvas -->
					<canvas-component
						v-if="isCanvasComponentActive"
						:src="src"
						:title="title"
						:subtitle="subtitle"
						:btn-text="btnText"
					></canvas-component>

					<!-- Other -->
					<slot name="content"></slot>

					<!-- Be inspired -->
					<be-inspired-component id="be-inspired" v-if="isBeInspiredComponentActive"></be-inspired-component>

					<!-- Portfolio -->
					<portfolio-component v-if="isPortfolioComponentActive"></portfolio-component>

					<!-- Reviews -->
					<reviews-component v-if="isReviewComponentActive"></reviews-component>

					<!-- Process of elimination -->
					<process-of-elimination-component v-if="isProcessOfEliminationActive"></process-of-elimination-component>

					<!-- Latest news -->
					<latest-news-component v-if="isLatestNewsComponentActive"></latest-news-component>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "../../../plugins/pinia/pinia";

// Components
import Canvas from "../canvas/canvas.vue";
import BeInspired from "../../body/sections/be-inspired.vue";
import Portfolio from "../../body/sections/portfolio.vue";
import Reviews from "../../body/sections/reviews.vue";
import ProcessOfElimination from "../../body/sections/process-of-elimination.vue";
import LatestNews from "../../body/sections/latest-news.vue";

// Utils
//import { scrollToElement } from "../../../utils/utils";

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
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	}
});
</script>
