<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
        <template #content>
            <section-component id="about_section" :title="sectionTitle" :subtitle="sectionSubtitle">
                <template #content>
                    <card-our-team-component :employees="employees" @show="updateShowInfo"></card-our-team-component>
                </template>
            </section-component>
        </template>
    </page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";
import Section from "@components/containers/section/section.vue";
import CardOurTeam from "@components/containers/card/custom/card-our-team.vue";

// Interface
import { IAboutData, IAboutEmployeeCard } from "@interfaces/about/interface-about";

// Images
import AboutPNG from "@assets/png/about/about.jpg";

// SVGs
import FacebookSVG from "@assets/svg/socials/facebook.svg?raw";
import InstagramSVG from "@assets/svg/socials/instagram.svg?raw";
import LinkedInSVG from "@assets/svg/socials/linkedin.svg?raw";
import TwitterSVG from "@assets/svg/socials/twitter.svg?raw";
import YoutubeSVG from "@assets/svg/socials/youtube.svg?raw";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

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
        // Text
        canvasTitle(): string {
            return this.$t("$vuetify.card.canvas.pages.about.title");
        },
        canvasSubtitle(): string {
            return this.$t("$vuetify.card.canvas.pages.about.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("$vuetify.card.canvas.pages.about.btnText");
        },
        sectionTitle(): string {
            return this.$t("$vuetify.pages.about.title");
        },
        sectionSubtitle(): string {
            return this.$t("$vuetify.pages.about.subtitle");
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

        // Data
        employees(): IAboutEmployeeCard[] {
            return this.storeAbout.getEmployees;
        },
    },
    methods: {
        updateShowInfo(index: number): void {
            const updatedEmployee = { ...this.employees[index], show: !this.employees[index].show };
            this.storeAbout.modifyEmployee(index, updatedEmployee);
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const eventID: number = EventNames.CARD_CANVAS_BTN_CLICKED;
            const pageName: RouteRecordName = this.$route.name!;
            const appBarHeight: number = this.storeCommon.getAppBarHeight;
            const chosenElement: HTMLDivElement = document.getElementById("about_section") as HTMLDivElement;

            const eventStrOne: string = newValue;
            const eventStrTwo: string = buildEventString(eventID, pageName, this.canvasBtnText);

            if (newValue) {
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
        const storeAbout = childStores.useAboutStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeAbout, storeEvent };
    },
    created(): void {
        this.storeCommon.setIsCanvasComponentActive(true);
        this.storeCommon.setIsBeInspiredComponentActive(false);
        this.storeCommon.setIsPortfolioComponentActive(false);
        this.storeCommon.setIsProcessOfEliminationActive(false);
        this.storeCommon.setIsNewsComponentActive(false);
        this.storeCommon.setIsReviewsComponentActive(false);
    },
});
</script>
