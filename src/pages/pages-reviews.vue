<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
		<template #content>
			<section-component :id="reviewsSectionID" :title="sectionTitle" :subtitle="sectionSubtitle">
				<template #content>
					<div>
						<p>Body text</p>
						<h1>Promotional titles</h1>
						<h2>Title</h2>
						<h3>Subtitle</h3>
						<h4>Section title</h4>
						<h5>Subsection titles</h5>
						<h6>Quotes / info</h6>
					</div>
				</template>
			</section-component>
		</template>
	</page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";
import Section from "@components/containers/section/section.vue";
import Reviews from "@components/containers/reviews/reviews.vue";

// Interfaces
import { IReviewsData } from "@interfaces/pages/reviews/interface-reviews";

// Images
import ReviewsPNG from "@assets/png/reviews/reviews.jpg";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";
import { SectionIDs } from "@enums/IDs/enums-ids-section";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/functions/utils-functions";

export default defineComponent({
	name: "reviews-page-component",
	components: {
		"page-component": Page,
		"section-component": Section,
		"reviews-component": Reviews,
	},
	data(): IReviewsData {
		return {};
	},
	computed: {
		// IDs
		reviewsSectionID(): string {
			return SectionIDs.REVIEWS_SECTION;
		},

		// Text
		canvasTitle(): string {
			return this.$t("$vuetify.card.canvas.pages.reviews.title");
		},
		canvasSubtitle(): string {
			return this.$t("$vuetify.card.canvas.pages.reviews.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("$vuetify.card.canvas.pages.reviews.btnText");
		},
		sectionTitle(): string {
			return this.$t("$vuetify.pages.reviews.title");
		},
		sectionSubtitle(): string {
			return this.$t("$vuetify.pages.reviews.subtitle");
		},

		// IMG's
		src(): string {
			return ReviewsPNG;
		},

		// Events
		recievedEventData(): string {
			return this.storeEvent.getEmittedEvent;
		},
	},
	watch: {
		recievedEventData(newValue: string): void {
			if (!newValue) return;

			const pageName: RouteRecordName = this.$route.name!;
			const appBarHeight: number = this.storeCommon.getAppBarHeight;

			const eventStrOne: string = newValue;
			const eventStrTwo: string = buildEventString(pageName.toString(), BtnIDs.CANVAS_CARD_BTN_ID);

			let targetElement: HTMLDivElement = document.getElementById(SectionIDs.REVIEWS_SECTION) as HTMLDivElement;

			if (newValue) {
				const areEventsEqual: boolean = compareEventStrings(eventStrOne, eventStrTwo);

				if (areEventsEqual) {
					scrollToElement(targetElement!.offsetTop - appBarHeight);
				}
				this.storeEvent.setEmittedEvent("");
			}
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeReviews = childStores.useReviewsStore();
		const storeEvent = eventStores.useEventStore();
		return { storeCommon, storeReviews, storeEvent };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(false);
		this.storeCommon.setIsPortfolioComponentActive(false);
		this.storeCommon.setIsProcessOfEliminationActive(false);
		this.storeCommon.setIsNewsComponentActive(false);
		this.storeCommon.setIsReviewsComponentActive(false);
	},
});
</script>
