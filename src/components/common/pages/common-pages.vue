<template>
	<v-container fluid class="pa-0">
		<v-row class="ma-0 pa-0">
			<v-col class="pa-0" cols="12">
				<v-sheet class="w-100 h-100">
					<slot name="dialogs"></slot>

					<!-- Canvas -->
					<canvas-component
						:src="src"
						:title="canvasTitle"
						:subtitle="canvasSubtitle"
						:btn-text="btnText"
						v-if="isCanvasComponentActive"
					></canvas-component>
					<v-divider class="divider-color" v-if="isCanvasComponentActive"></v-divider>

					<!-- Other -->
					<slot name="content"></slot>

					<!-- Be inspired -->
					<be-inspired-component class="bg-inverted" :id="beInspiredSectionID" v-if="isBeInspiredComponentActive"></be-inspired-component>
					<v-divider class="divider-color" v-if="isBeInspiredComponentActive"></v-divider>

					<!-- Portfolio -->
					<portfolio-component class="bg-inverted" :id="portfolioSectionID" v-if="isPortfolioComponentActive"></portfolio-component>
					<v-divider class="divider-color" v-if="isPortfolioComponentActive"></v-divider>

					<!-- Process of elimination -->
					<process-of-elimination-component
						class="bg-inverted"
						:id="processOfEliminationSectionID"
						v-if="isProcessOfEliminationActive"
					></process-of-elimination-component>
					<v-divider class="divider-color" v-if="isProcessOfEliminationActive"></v-divider>

					<!-- Latest reviews -->
					<latest-reviews-component class="bg-inverted" :id="reviewsSectionID" v-if="isReviewsComponentActive"></latest-reviews-component>
					<v-divider class="divider-color"></v-divider>

					<!-- Latest news -->
					<latest-news-component class="bg-inverted" :id="latestNewsSectionID" v-if="isNewsComponentActive"></latest-news-component>
					<v-divider class="divider-color" v-if="isNewsComponentActive"></v-divider>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";

// Components
import Canvas from "@components/common/canvas/common-canvas.vue";
import BeInspired from "@components/common/sections/be-inspired/common-sections-be-inspired.vue";
import Portfolio from "@components/common/sections/portfolio/common-sections-portfolio.vue";
import LatestNews from "@components/uncommon/sections/latest-news/components-uncommon-sections-latest-news.vue";
import ProcessOfElimination from "@components/uncommon/sections/process-of-elimination/components-uncommon-sections-process-of-elimination.vue";
import LatestReviews from "@components/uncommon/sections/latest-reviews/components-uncommon-sections-latest-reviews.vue";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

// Enums
import { SectionIDs } from "@enums/IDs/enums-ids-section";

export default defineComponent({
	name: "page-content-component",
	components: {
		"canvas-component": Canvas,
		"be-inspired-component": BeInspired,
		"portfolio-component": Portfolio,
		"latest-news-component": LatestNews,
		"process-of-elimination-component": ProcessOfElimination,
		"latest-reviews-component": LatestReviews,
	},
	props: {
		dialogData: { type: Object as () => ICommonSignUpNewsletterDialogData, required: false },
		src: { type: String, required: true },
		canvasTitle: { type: String, required: true },
		canvasSubtitle: { type: String, required: false },
		btnText: { type: String, required: true },
	},
	computed: {
		// IDs
		beInspiredSectionID(): string {
			return SectionIDs.BE_INSPIRED_SECTION;
		},
		portfolioSectionID(): string {
			return SectionIDs.PORTFOLIO_SECTION;
		},
		processOfEliminationSectionID(): string {
			return SectionIDs.BE_INSPIRED_SECTION;
		},
		latestNewsSectionID(): string {
			return SectionIDs.BE_INSPIRED_SECTION;
		},
		reviewsSectionID(): string {
			return SectionIDs.BE_INSPIRED_SECTION;
		},

		// Conditional
		isCanvasComponentActive(): boolean {
			return this.storeCommon.getIsCanvasComponentActive;
		},
		isBeInspiredComponentActive(): boolean {
			return this.storeCommon.getIsBeInspiredComponentActive;
		},
		isPortfolioComponentActive(): boolean {
			return this.storeCommon.getIsPortfolioComponentActive;
		},
		isNewsComponentActive(): boolean {
			return this.storeCommon.getIsLatestNewsComponentActive;
		},
		isProcessOfEliminationActive(): boolean {
			return this.storeCommon.getIsProcessOfEliminationActive;
		},
		isReviewsComponentActive(): boolean {
			return this.storeCommon.getIsLatestReviewsComponentActive;
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
});
</script>
