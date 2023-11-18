<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText"></page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";

// Interfaces
import { IRefurbishmentData } from "@interfaces/refurbishment/interface-refurbishment";

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
			return this.$t("$vuetify.card.canvas.pages.refurbishment.title");
		},
		canvasSubtitle(): string {
			return this.$t("$vuetify.card.canvas.pages.refurbishment.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("$vuetify.card.canvas.pages.refurbishment.btnText");
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
		const storeRefurbishment = childStores.useRefurbishmentStore();
		const storeEvent = eventStores.useEventStore();
		return { storeCommon, storeRefurbishment, storeEvent };
	},
	created(): void {
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(true);
		this.storeCommon.setIsPortfolioComponentActive(true);
		this.storeCommon.setIsProcessOfEliminationActive(false);
		this.storeCommon.setIsNewsComponentActive(false);
		this.storeCommon.setIsReviewsComponentActive(false);
	},
});
</script>
