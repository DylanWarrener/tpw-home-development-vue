<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
        <template #content>
            <section-component id="news_section" :title="sectionTitle" :subtitle="sectionSubtitle">
                <template #content>
                    <!-- <news-filter-component></news-filter-component> -->
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
import FilterForNews from "@components/containers/news/filter/news-filter.vue";

// Interfaces
import { INewsData } from "@interfaces/news/interface-news";

// Images
import NewsPNG from "@assets/png/about/about.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "about-page-component",
    components: {
        "page-component": Page,
        "section-component": Section,
        "news-filter-component": FilterForNews,
    },
    data(): INewsData {
        return {};
    },
    computed: {
        // Text
        canvasTitle(): string {
            return this.$t("$vuetify.card.canvas.pages.news.title");
        },
        canvasSubtitle(): string {
            return this.$t("$vuetify.card.canvas.pages.news.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("$vuetify.card.canvas.pages.news.btnText");
        },
        sectionTitle(): string {
            return this.$t("$vuetify.pages.news.title");
        },
        sectionSubtitle(): string {
            return this.$t("$vuetify.pages.news.subtitle");
        },

        // IMGs
        src(): string {
            return NewsPNG;
        },

        // Events
        recievedEventData(): string {
            return this.storeEvent.getEmittedEvent;
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const eventID: number = EventNames.CARD_CANVAS_BTN_CLICKED;
            const pageName: RouteRecordName = this.$route.name!;
            const appBarHeight: number = this.storeCommon.getAppBarHeight;
            const chosenElement: HTMLDivElement = document.getElementById("news_section") as HTMLDivElement;

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
        const storeNews = childStores.useNewsStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeNews, storeEvent };
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
