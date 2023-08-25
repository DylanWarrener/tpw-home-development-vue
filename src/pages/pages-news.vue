<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
        News
    </page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";
//import Section from "@components/containers/section/section.vue";

// Images
import NewsPNG from "@assets/png/contact/contact.jpg"; // Change this img

// Enums
import { EventNames } from "@enums/events";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "news-page-component",
    components: {
        "page-component": Page,
        //"section-component": Section,
    },
    computed: {
        src(): string {
            return NewsPNG;
        },
        canvasTitle(): string {
            return this.$t("common.card.canvas.pages.home.title");
        },
        canvasSubtitle(): string {
            return this.$t("common.card.canvas.pages.home.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("common.card.canvas.pages.home.btnText");
        },
        sectionTitle(): string {
            return this.$t("common.section.pages.contact.title");
        },
        sectionSubtitle(): string {
            return this.$t("common.section.pages.contact.subtitle");
        },

        // Events
        recievedEventData(): string {
            return this.storeEvent.getEmittedEvent;
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const desiredRouteName: string = this.$t("common.pages.name.news");
            const eventID: number = EventNames.CARD_BTN_CLICKED;
            const pageName: any = this.$route.name!;
            const appBarHeight: number = this.storeCommon.getAppBarHeight;
            const chosenElement: any = document.getElementById("news_section");

            const eventStrOne: string = newValue;
            const eventStrTwo: string = buildEventString(eventID, pageName, this.canvasBtnText);

            if (newValue && this.$route.name === desiredRouteName) {
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
        const storeNews = childStores.useNewsStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeNews, storeEvent };
    },
    created(): void {
        this.storeCommon.setIsCanvasComponentActive(true);
        this.storeCommon.setIsBeInspiredComponentActive(false);
        this.storeCommon.setIsPortfolioComponentActive(false);
        this.storeCommon.setIsReviewComponentActive(false);
        this.storeCommon.setIsProcessOfEliminationActive(false);
        this.storeCommon.setIsLatestNewsComponentActive(true);
    },
});
</script>
