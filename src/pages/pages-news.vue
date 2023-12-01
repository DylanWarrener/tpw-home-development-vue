<template>
	<!--<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
		<template #content>
			<section-component :id="newSectionID" :title="sectionTitle" :subtitle="sectionSubtitle">
				<template #content>
					<news-filter-component :filter="filter"></news-filter-component>
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
import useHeaderStore from "@stores/header/stores-header";
import useNewsStore from "@stores/pages/stores-pages-news";
import useGlobalEventStore from "@stores/events/stores-events";

// Components
import Page from "@components/common/pages/common-pages.vue";
import Section from "@components/common/sections/common-sections.vue";
//import Filter from "@components/common/filter/common-filter.vue";

// Interfaces
import { INewsData } from "@interfaces/common/pages/info/news/interfaces-common-pages-info-news";
//import INewsFilterState from "@interfaces/pages/news/filters/interface-news-filters";

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
		//"filter-component": Filter,
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
			return this.$t("common.cards.canvas.pages.news.title");
		},
		canvasSubtitle(): string {
			return this.$t("common.cards.canvas.pages.news.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("common.cards.canvas.pages.news.btnText");
		},
		sectionTitle(): string {
			return this.$t("common.sections.allNews.title");
		},
		sectionSubtitle(): string {
			return this.$t("common.sections.allNews.subtitle");
		},

		// Filter data
		/*filter(): INewsFilterState {
			return this.storeNews.getNewsFilterOptionsState;
		},
		*/

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
			const appBarHeight: number = this.storeHeader.getAppBarHeight;

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
		const storeCommon = useCommonStore();
		const storeHeader = useHeaderStore();
		const storeNews = useNewsStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeNews, storeEvent };
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
