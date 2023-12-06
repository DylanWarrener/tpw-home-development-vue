<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
		<template #dialogs>
			<sign-up-newsletter-dialog-component :data="dialogData" v-if="dialogData">
				<template #dialog-content>
					<sign-up-newsletter-form-component
						:msg-info="formsData.signUp.messageInfo"
						:msg-terms-and-conditions="formsData.signUp.messageTermsAndConditions"
					></sign-up-newsletter-form-component>
				</template>
			</sign-up-newsletter-dialog-component>
		</template>
	</page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useHeaderStore from "@stores/header/stores-header";
import useBathroomStore from "@stores/pages/stores-pages-bathroom";
import useGlobalEventStore from "@stores/events/stores-events";

// Components
import Page from "@components/common/pages/common-pages.vue";
import SignUpNewsletterDialog from "@components/common/dialogs/common-dialogs.vue";
import SignUpNewsletterForm from "@components/uncommon/forms/sign-up-newsletter/uncommon-forms-sign-up-newsletter.vue";

// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsPagesData,
} from "@interfaces/common/interfaces-common";
import { IBathroomData } from "@interfaces/common/pages/service/bathroom/interfaces-common-pages-service-bathroom";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";
import { SectionIDs } from "@enums/IDs/enums-ids-section";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/functions/utils-functions";

// IMGs
import BathroomPNG from "@assets/png/bathrooms/bathroom.jpg";

export default defineComponent({
	name: "bathroom-page-component",
	components: {
		"page-component": Page,
		"sign-up-newsletter-dialog-component": SignUpNewsletterDialog,
		"sign-up-newsletter-form-component": SignUpNewsletterForm,
	},
	data(): IBathroomData {
		return {};
	},
	computed: {
		// Text
		canvasTitle(): string {
			return this.$t("common.cards.canvas.pages.bathroom.title");
		},
		canvasSubtitle(): string {
			return this.$t("common.cards.canvas.pages.bathroom.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("common.cards.canvas.pages.bathroom.btnText");
		},

		// IMGs
		src(): string {
			return BathroomPNG;
		},

		// Data
		dialogData(): ICommonSignUpNewsletterDialogData {
			return this.storeBathroom.getSignUpNewsletterDialogData;
		},
		formsData(): ICommonFormsPagesData {
			return this.storeBathroom.getFormsData;
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
		const storeBathroom = useBathroomStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeBathroom, storeEvent };
	},
	created(): void {
		/* Set inital state of store */
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(true);
		this.storeCommon.setIsPortfolioComponentActive(true);
		this.storeCommon.setIsLatestNewsComponentActive(false);
		this.storeCommon.setIsProcessOfEliminationActive(false);
		this.storeCommon.setIsLatestReviewsComponentActive(false);

		/* Set inital localisation state in store */
		//// Dialogs
		this.storeBathroom.setSignUpNewsletterDialogData();

		//// Forms
		this.storeBathroom.setFormsData();
	},
});
</script>
