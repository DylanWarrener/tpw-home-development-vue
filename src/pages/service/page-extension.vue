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
import useHeaderStore from "@stores/header/store-header";
import useExtensionStore from "@stores/pages/service/store-pages-service-extension";
import useGlobalEventStore from "@stores/events/store-events";

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
} from "@declaration/common/interfaces/interface-common";
import { IExtensionData } from "@declaration/common/interfaces/pages/service/interface-common-pages-service-extension";

// Enums
import { BtnIDs, SectionIDs } from "@enums/common/enums";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@constants/common/functions/constants-common-utils-functions";

// IMGs
import ExtensionPNG from "@assets/png/extensions/extension.jpg";

export default defineComponent({
	name: "extension-page-component",
	components: {
		"page-component": Page,
		"sign-up-newsletter-dialog-component": SignUpNewsletterDialog,
		"sign-up-newsletter-form-component": SignUpNewsletterForm,
	},
	data(): IExtensionData {
		return {};
	},
	computed: {
		// Text
		canvasTitle(): string {
			return this.$t("common.cards.canvas.pages.extension.title");
		},
		canvasSubtitle(): string {
			return this.$t("common.cards.canvas.pages.extension.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("common.cards.canvas.pages.extension.btnText");
		},

		// IMGs
		src(): string {
			return ExtensionPNG;
		},

		// Data
		dialogData(): ICommonSignUpNewsletterDialogData {
			return this.storeExtension.getSignUpNewsletterDialogData;
		},
		formsData(): ICommonFormsPagesData {
			return this.storeExtension.getFormsData;
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
		const storeExtension = useExtensionStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeExtension, storeEvent };
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
		this.storeExtension.setSignUpNewsletterDialogData();

		//// Forms
		this.storeExtension.setFormsData();
	},
});
</script>
@src/enums/common/IDs/enums-ids-btn@src/enums/common/IDs/enums-ids-section @src/stores/pages/service/stores-pages-extension
@src/stores/events/store-events @src/stores/header/store-header @src/stores/pages/service/store-pages-service-extension @src/enums/common/enums-common
