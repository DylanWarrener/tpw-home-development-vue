<template>
	<!--
		<page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
		<template #content>
			<section-component :id="aboutSectionID" :title="sectionTitle" :subtitle="sectionSubtitle">
				<template #content>
					<card-our-team-component :employees="employees" @show="updateShowInfo"></card-our-team-component>
				</template>
			</section-component>
		</template>
	</page-component>
	-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useHeaderStore from "@stores/header/store-header";
import useAboutStore from "@stores/pages/information/store-pages-about";
import useGlobalEventStore from "@stores/events/store-events";

// Components
import Page from "@components/common/pages/common-pages.vue";
import Section from "@components/common/sections/common-sections.vue";
import CardOurTeam from "@components/uncommon/cards/team/uncommon-card-team.vue";

// Interface
import { IAboutData } from "@declaration/common/interfaces/pages/info/interface-common-pages-info-about";

// Images
import AboutPNG from "@assets/png/about/about.jpg";

// SVGs
import FacebookSVG from "@assets/svg/socials/facebook.svg?raw";
import InstagramSVG from "@assets/svg/socials/instagram.svg?raw";
import LinkedInSVG from "@assets/svg/socials/linkedin.svg?raw";
import TwitterSVG from "@assets/svg/socials/twitter.svg?raw";
import YoutubeSVG from "@assets/svg/socials/youtube.svg?raw";

// Enums
import { BtnIDs, SectionIDs } from "@enums/common/enums";

// Constants
import { buildEventString, compareEventStrings, scrollToElement } from "@constants/common/utils/constants-common-utils";

export default defineComponent({
	name: "about-page-component",
	components: {
		"page-component": Page,
		"section-component": Section,
		"card-our-team-component": CardOurTeam,
	},
	data(): IAboutData {
		return {};
	},
	computed: {
		// IDs
		aboutSectionID(): string {
			return SectionIDs.ABOUT_SECTION;
		},

		// Text
		canvasTitle(): string {
			return this.$t("card.canvas.pages.about.title");
		},
		canvasSubtitle(): string {
			return this.$t("card.canvas.pages.about.subtitle");
		},
		canvasBtnText(): string {
			return this.$t("card.canvas.pages.about.btnText");
		},
		sectionTitle(): string {
			return this.$t("pages.about.title");
		},
		sectionSubtitle(): string {
			return this.$t("pages.about.subtitle");
		},

		// IMGs
		src(): string {
			return AboutPNG;
		},

		// Icons
		facebookSVG(): string {
			return FacebookSVG;
		},
		instagramSVG(): string {
			return InstagramSVG;
		},
		linkedInSVG(): string {
			return LinkedInSVG;
		},
		twitterSVG(): string {
			return TwitterSVG;
		},
		youtubeSVG(): string {
			return YoutubeSVG;
		},

		// Events
		recievedEventData(): string {
			return this.storeEvent.getEmittedEvent;
		},

		/*
		// Data
		employees(): IAboutEmployeeCard[] {
			return this.storeAbout.getEmployees;
		},
		*/
	},
	methods: {
		/*
		updateShowInfo(index: number): void {
			const updatedEmployee = { ...this.employees[index], show: !this.employees[index].show };
			this.storeAbout.modifyEmployee(index, updatedEmployee);
		},
		*/
	},
	watch: {
		recievedEventData(newValue: string): void {
			if (!newValue) return;

			const pageName: RouteRecordName = this.$route.name!;
			const appBarHeight: number = this.storeHeader.getAppBarHeight;

			const eventStrOne: string = newValue;
			const eventStrTwo: string = buildEventString(pageName.toString(), BtnIDs.CANVAS_CARD_BTN_ID);

			let targetElement: HTMLDivElement = document.getElementById(SectionIDs.ABOUT_SECTION) as HTMLDivElement;

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
		const storeAbout = useAboutStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeHeader, storeAbout, storeEvent };
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
@src/enums/common/IDs/enums-ids-btn@src/enums/common/IDs/enums-ids-section @src/stores/pages/information/stores-pages-about
@src/stores/events/store-events @src/stores/header/store-header @src/constants/common/utils/functions/constants-common-utils
