<template>
	<!--<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
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
	</page-component>-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useHeaderStore from "@stores/header/store-header";
import useReviewsStore from "@stores/pages/info/store-pages-info-reveiws";
import useGlobalEventStore from "@stores/events/store-events";

// Components
import Page from "@components/common/pages/common-pages.vue";
import Section from "@components/common/sections/common-sections.vue";
import Reviews from "@components/uncommon/pages/reviews/uncommon-reviews.vue";

// Interfaces
import { IReviewsData } from "@declaration/common/interfaces/pages/info/interface-common-pages-info-reviews";

// Images
import ReviewsPNG from "@assets/png/reviews/reviews.jpg";

// Enums
import { BtnIDs, SectionIDs } from "@enums/common/enums";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@constants/common/functions/constants-common-utils-functions";

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
			return this.$t("common.cards.canvas.pages.reviews.title");
		},
		canvasSubtitle(): string {
			return this.$t("common.cards.canvas.pages.reviews.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("common.cards.canvas.pages.reviews.btnText");
		},
		sectionTitle(): string {
			return this.$t("common.sections.allReviews.title");
		},
		sectionSubtitle(): string {
			return this.$t("common.sections.allReviews.subtitle");
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
			const appBarHeight: number = this.storeHeader.getAppBarHeight;

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
		const storeCommon = useCommonStore();
		const storeHeader = useHeaderStore();
		const storeReviews = useReviewsStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeReviews, storeEvent };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(false);
		this.storeCommon.setIsPortfolioComponentActive(false);
		this.storeCommon.setIsLatestNewsComponentActive(false);
		this.storeCommon.setIsProcessOfEliminationActive(false);
		this.storeCommon.setIsLatestReviewsComponentActive(false);
	},
});
</script>
@src/interfaces/common/pages/reviews/interfaces-reviews @src/enums/common/IDs/enums-ids-btn@src/enums/common/IDs/enums-ids-section
@src/stores/pages/information/stores-pages-reveiws @src/stores/events/store-events @src/stores/header/store-header
@src/stores/pages/info/store-pages-reveiws
