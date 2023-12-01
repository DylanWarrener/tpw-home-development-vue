<template>
	<!--<page-component
		:src="src"
		:canvas-title="canvasTitle"
		:canvas-subtitle="canvasSubtitle"
		:btn-text="canvasBtnText"
	></page-component>-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useHeaderStore from "@stores/header/stores-header";
import useRefurbishmentStore from "@stores/pages/stores-pages-refurbishment";
import useGlobalEventStore from "@stores/events/stores-events";

// Components
import Page from "@components/common/pages/common-pages.vue";

// Interfaces
import { IRefurbishmentData } from "@interfaces/common/pages/service/refurbishment/interfaces-common-pages-service-refurbishment";

// Images
import RefurbishmentPNG from "@assets/png/refurbishments/refurbishment.jpg";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";
import { SectionIDs } from "@enums/IDs/enums-ids-section";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/functions/utils-functions";

export default defineComponent({
	name: "refurbishment-page-component",
	components: {
		"page-component": Page,
	},
	data(): IRefurbishmentData {
		return {};
	},
	computed: {
		// Text
		canvasTitle(): string {
			return this.$t("common.cards.canvas.pages.refurbishment.title");
		},
		canvasSubtitle(): string {
			return this.$t("common.cards.canvas.pages.refurbishment.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("common.cards.canvas.pages.refurbishment.btnText");
		},

		// IMGs
		src(): string {
			return RefurbishmentPNG;
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

			let targetElement: HTMLDivElement = document.getElementById(SectionIDs.BE_INSPIRED_SECTION) as HTMLDivElement;

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
		const storeRefurbishment = useRefurbishmentStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeRefurbishment, storeEvent };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(true);
		this.storeCommon.setIsPortfolioComponentActive(true);
		this.storeCommon.setIsLatestNewsComponentActive(false);
		this.storeCommon.setIsProcessOfEliminationActive(false);
		this.storeCommon.setIsLatestReviewsComponentActive(false);
	},
});
</script>
@src/interfaces/common/pages/refurbishment/interfaces-refurbishment
