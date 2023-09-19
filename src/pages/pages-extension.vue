<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText"></page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";

// Images
import ExtensionPNG from "@assets/png/extensions/extension.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

export default defineComponent({
	name: "extension-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		// IMGs
		src(): string {
			return ExtensionPNG;
		},

		// Text
		canvasTitle(): string {
			return this.$t("$vuetify.card.canvas.pages.extension.title");
		},
		canvasSubtitle(): string {
			return this.$t("$vuetify.card.canvas.pages.extension.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("$vuetify.card.canvas.pages.extension.btnText");
		},

		// Events
		recievedEventData(): string {
			return this.storeEvent.getEmittedEvent;
		},
	},
	watch: {
		recievedEventData(newValue: string) {
			const desiredRouteName: string = this.$t("$vuetify.pages.extension.name");
			const eventID: number = EventNames.CARD_BTN_CLICKED;
			const pageName = this.$route.name!;
			const appBarHeight: number = this.storeCommon.getAppBarHeight;
			const chosenElement: any = document.getElementById("be_inspired_section");

			const eventStrOne: string = newValue;
			const eventStrTwo: string = buildEventString(eventID, pageName, this.canvasBtnText);

			if (newValue && pageName === desiredRouteName) {
				const areEventsEqual: boolean = compareEventStrings(eventStrOne, eventStrTwo);

				if (areEventsEqual) {
					scrollToElement(chosenElement!.offsetTop - appBarHeight);
				}
				this.storeEvent.setEmittedEvent("");
			}
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeExtension = childStores.useExtensionStore();
		const storeEvent = eventStores.useGlobalEventStore();
		return { storeCommon, storeExtension, storeEvent };
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
