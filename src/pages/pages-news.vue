<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
		<template #content>
			<section-component :id="newSectionID" :title="sectionTitle" :subtitle="sectionSubtitle">
				<template #content>
					<news-filter-component :filter="filter"></news-filter-component>
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
import FilterForNews from "@components/containers/news/filter/news-filter.vue";

// Interfaces
import { INewsData } from "@interfaces/pages/news/interface-news";
import INewsFilterState from "@interfaces/pages/news/filters/interface-news-filters";

// PNGs
import NewsPNG from "@assets/png/about/about.jpg";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";
import { SectionIDs } from "@enums/IDs/enums-ids-section";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/functions/utils-functions";

export default defineComponent({
	name: "about-page-component",
	components: {
		"page-component": Page,
		"section-component": Section,
		"news-filter-component": FilterForNews,
	},
	data(): INewsData {
		return {};
	},
	computed: {
		// IDs
		newSectionID(): string {
			return SectionIDs.NEWS_SECTION;
		},

		// Text
		canvasTitle(): string {
			return this.$t("$vuetify.card.canvas.pages.news.title");
		},
		canvasSubtitle(): string {
			return this.$t("$vuetify.card.canvas.pages.news.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("$vuetify.card.canvas.pages.news.btnText");
		},
		sectionTitle(): string {
			return this.$t("$vuetify.pages.news.title");
		},
		sectionSubtitle(): string {
			return this.$t("$vuetify.pages.news.subtitle");
		},

		// Filter data
		filter(): INewsFilterState {
			return this.storeNews.getNewsFilterOptionsState;
		},

		// IMGs
		src(): string {
			return NewsPNG;
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

			let targetElement: HTMLDivElement = document.getElementById(SectionIDs.NEWS_SECTION) as HTMLDivElement;

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
		const storeNews = childStores.useNewsStore();
		const storeEvent = eventStores.useEventStore();
		return { storeCommon, storeNews, storeEvent };
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
