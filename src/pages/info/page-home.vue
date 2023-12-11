<template>
	<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
		<template #dialogs>
			<sign-up-newsletter-dialog-component :data="dialogData" v-if="dialogData">
				<template #dialog-content>
					<common-forms-component
						:msg-info="homeSignUpFormsData.signUp.messageInfo"
						:msg-terms-and-conditions="homeSignUpFormsData.signUp.messageTermsAndConditions"
					>
						<template #form-content>
							<common-forms-sign-up-newsletter-component
								:data="commonSignUpFormsData.signUp.newsletter"
							></common-forms-sign-up-newsletter-component>
						</template>
					</common-forms-component>
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
import useHomeStore from "@stores/pages/info/store-pages-info-home";
import useGlobalEventStore from "@stores/events/store-events";

// Components
import Page from "@components/common/pages/common-pages.vue";
import SignUpNewsletterDialog from "@components/common/dialogs/common-dialogs.vue";
import SignUpNewsletterForm from "@components/uncommon/forms/sign-up-newsletter/uncommon-forms-sign-up-newsletter.vue";
import CommonForm from "@components/common/forms/common-forms.vue";
import CommonSignUpNewsletterForm from "@components/common/forms/sign-up/newsletter/common-forms-sign-up-newsletter.vue";

// Interfaces
import {
	//// Dialogs
	ICommonSignUpNewsletterDialogData,

	//// Forms
	ICommonFormsData,
	ICommonFormsPagesData,
} from "@declaration/common/interfaces/interface-common";
import { IHomeData } from "@declaration/common/interfaces/pages/info/interface-common-pages-info-home";

// Enums
import { BtnIDs, SectionIDs } from "@enums/common/enums";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@constants/common/functions/constants-common-utils-functions";
import { pageAllNames } from "@constants/common/objects/constants-common-utils-objects";

// IMGs
import HomePNG from "@assets/png/home/home.jpg";

export default defineComponent({
	name: "home-page-component",
	components: {
		"page-component": Page,
		"sign-up-newsletter-dialog-component": SignUpNewsletterDialog,
		"sign-up-newsletter-form-component": SignUpNewsletterForm,
		"common-forms-component": CommonForm,
		"common-forms-sign-up-newsletter-component": CommonSignUpNewsletterForm,
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
			return this.storeHome.getSignUpNewsletterDialogData;
		},
		homeSignUpFormsData(): ICommonFormsPagesData {
			return this.storeHome.getFormsData;
		},
		commonSignUpFormsData(): ICommonFormsData {
			return this.storeCommon.getFormsData;
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
			const appBarHeight: number = this.storeHeader.getAppBarHeight;

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
		const storeHeader = useHeaderStore();
		const storeHome = useHomeStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeHome, storeEvent };
	},
	created(): void {
		/* Set inital state of store */
		this.storeCommon.setIsCanvasComponentActive(true);
		this.storeCommon.setIsBeInspiredComponentActive(true);
		this.storeCommon.setIsPortfolioComponentActive(true);
		this.storeCommon.setIsLatestNewsComponentActive(true);
		this.storeCommon.setIsProcessOfEliminationActive(true);
		this.storeCommon.setIsLatestReviewsComponentActive(true);

		/* Set inital localisation state in store */
		//// Dialogs
		this.storeHome.setSignUpNewsletterDialogData();

		//// Forms
		this.storeHome.setFormsData();
	},
});
</script>
@src/constants/common/utils/functions/constants-common-utils @src/stores/pages/info/store-pages-home @src/enums/common/enums-common
