<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
		<template #content>
			<section-component :id="contactSectionID" :title="sectionTitle" :subtitle="sectionSubtitle">
				<template #content>
					<contact-component></contact-component>
				</template>
			</section-component>
		</template>
	</page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useHeaderStore from "@stores/header/store-header";
import useContactStore from "@stores/pages/information/store-pages-contact";
import useGlobalEventStore from "@stores/events/store-events";

// Components
import Page from "@components/common/pages/common-pages.vue";
import Section from "@components/common/sections/common-sections.vue";
import Contact from "@components/uncommon/pages/contact/uncommon-contact.vue";

// Interfaces
import { IContactData } from "@declaration/common/interfaces/pages/info/interface-common-pages-info-contact";

// PNGs
import ContactPNG from "@assets/png/contact/contact.jpg";

// Enums
import { BtnIDs, SectionIDs } from "@enums/common/enums";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@constants/common/utils/constants-common-utils";

export default defineComponent({
	name: "contact-page-component",
	components: {
		"page-component": Page,
		"section-component": Section,
		"contact-component": Contact,
	},
	data(): IContactData {
		return {};
	},
	computed: {
		// IDs
		contactSectionID(): string {
			return SectionIDs.CONTACT_SECTION;
		},

		// Text
		canvasTitle(): string {
			return this.$t("common.cards.canvas.pages.contact.title");
		},
		canvasSubtitle(): string {
			return this.$t("common.cards.canvas.pages.contact.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("common.cards.canvas.pages.contact.btnText");
		},
		sectionTitle(): string {
			return this.$t("common.pages.contact.title");
		},
		sectionSubtitle(): string {
			return this.$t("common.pages.contact.subtitle");
		},

		// IMGs
		src(): string {
			return ContactPNG;
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

			let targetElement: HTMLDivElement = document.getElementById(SectionIDs.CONTACT_SECTION) as HTMLDivElement;

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
		const storeContact = useContactStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeContact, storeEvent };
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
@src/enums/common/IDs/enums-ids-btn@src/enums/common/IDs/enums-ids-section @src/stores/pages/information/stores-pages-contact
@src/stores/events/store-events @src/stores/header/store-header @src/constants/common/utils/functions/constants-common-utils
