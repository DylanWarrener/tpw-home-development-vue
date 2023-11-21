<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText"></page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/common/pages/common-pages.vue";

// Interfaces
import { IBathroomData } from "@interfaces/common/pages/bathroom/interface-bathroom";

// Images
import BathroomPNG from "@assets/png/bathrooms/bathroom.jpg";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";
import { SectionIDs } from "@enums/IDs/enums-ids-section";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/functions/utils-functions";

export default defineComponent({
	name: "bathroom-page-component",
	components: {
		"page-component": Page,
	},
	data(): IBathroomData {
		return {};
	},
	computed: {
		// Text
		canvasTitle(): string {
			return this.$t("$vuetify.common.cards.canvas.pages.bathroom.title");
		},
		canvasSubtitle(): string {
			return this.$t("$vuetify.common.cards.canvas.pages.bathroom.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("$vuetify.common.cards.canvas.pages.bathroom.btnText");
		},

		// IMGs
		src(): string {
			return BathroomPNG;
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
		const storeCommon = parentStore();
		const storeBathroom = childStores.useBathroomStore();
		const storeEvent = eventStores.useEventStore();
		return { storeCommon, storeBathroom, storeEvent };
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
