<template>
	<page-component
		:dialog-data="dialogData"
		:src="src"
		:canvas-title="canvasTitle"
		:canvas-subtitle="canvasSubtitle"
		:btn-text="canvasBtnText"
	></page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useHomeStore from "@stores/pages/stores-pages-home";
import useGlobalEventStore from "@stores/events/stores-events";

// Components
import Page from "@components/common/pages/common-pages.vue";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";
import { IHomeData } from "@interfaces/common/pages/info/home/interfaces-common-pages-info-home";

// IMGs
import HomePNG from "@assets/png/home/home.jpg";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";
import { SectionIDs } from "@enums/IDs/enums-ids-section";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/functions/utils-functions";
import { pageAllNames } from "@utils/text/common/pages/utils-text-common-pages";

export default defineComponent({
	name: "home-page-component",
	components: {
		"page-component": Page,
	},
	data(): IHomeData {
		return {};
	},
	computed: {
		// Text
		canvasTitle(): string {
			return this.$t("common.cards.canvas.pages.home.title");
		},
		canvasSubtitle(): string {
			return this.$t("common.cards.canvas.pages.home.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("common.cards.canvas.pages.home.btnText");
		},

		// IMGs
		src(): string {
			return HomePNG;
		},

		// Data
		dialogData(): ICommonSignUpNewsletterDialogData {
			return this.storeCommon.getSignUpNewsletterDialogData;
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
			const eventStrCanvasCardBtn: string = buildEventString(pageName.toString(), BtnIDs.CANVAS_CARD_BTN_ID);
			const eventStrLatestNewsBtn: string = buildEventString(pageName.toString(), BtnIDs.ALL_REVIEWS_BTN_ID);
			const eventStrFooterContactBtn: string = buildEventString(pageName.toString(), BtnIDs.CONTACT_BTN_ID);
			const appBarHeight: number = this.storeCommon.getAppBarHeight;

			const eventStrOne: string = newValue;
			let eventStrTwo: string = "";

			let targetElement: HTMLDivElement;

			let areEventsEqual: boolean = false;
			switch (eventStrOne) {
				case eventStrCanvasCardBtn:
					eventStrTwo = eventStrCanvasCardBtn;
					break;
				case eventStrLatestNewsBtn:
					eventStrTwo = eventStrLatestNewsBtn;
					break;
				case eventStrFooterContactBtn:
					eventStrTwo = eventStrFooterContactBtn;
					break;
				default:
					return;
			}
			areEventsEqual = compareEventStrings(eventStrOne, eventStrTwo);

			if (areEventsEqual) {
				switch (eventStrOne) {
					case eventStrCanvasCardBtn:
						targetElement = document.getElementById(SectionIDs.BE_INSPIRED_SECTION) as HTMLDivElement;
						scrollToElement(targetElement!.offsetTop - appBarHeight);
						break;
					case eventStrLatestNewsBtn:
						this.$router.push({ name: pageAllNames.reviews });
						break;
					case eventStrFooterContactBtn:
						this.$router.push({ name: pageAllNames.contact });
						break;
				}
			}
			this.storeEvent.setEmittedEvent("");
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		const storeHome = useHomeStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHome, storeEvent };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(true);
		this.storeCommon.setIsPortfolioComponentActive(true);
		this.storeCommon.setIsLatestNewsComponentActive(true);
		this.storeCommon.setIsProcessOfEliminationActive(true);
		this.storeCommon.setIsLatestReviewsComponentActive(true);
	},
});
</script>
