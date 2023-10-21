<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
        <template #content>
            <section-component id="reviews_section" :title="sectionTitle" :subtitle="sectionSubtitle">
                <template #content>
                    <div>
                        <p>Body text</p>
                        <h1>Promotional titles</h1>
                        <h2>Title</h2>
                        <h3>Subtitle</h3>
                        <h4>Section title</h4>
                        <h5>Subsection titles</h5>
                        <h6>Quotes / info</h6>
                    </div>
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
//import Reviews from "@components/body/sections/reviews.vue";

// Interfaces
import { IReviewsData } from "@interfaces/reviews/interface-reviews";

// Images
import ReviewsPNG from "@assets/png/reviews/reviews.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "reviews-page-component",
    components: {
        "page-component": Page,
        "section-component": Section,
        //"reviews-component": Reviews,
    },
    data(): IReviewsData {
        return {};
    },
    computed: {
        // Text
        canvasTitle(): string {
            return this.$t("$vuetify.card.canvas.pages.reviews.title");
        },
        canvasSubtitle(): string {
            return this.$t("$vuetify.card.canvas.pages.reviews.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("$vuetify.card.canvas.pages.reviews.btnText");
        },
        sectionTitle(): string {
            return this.$t("$vuetify.pages.reviews.title");
        },
        sectionSubtitle(): string {
            return this.$t("$vuetify.pages.reviews.subtitle");
        },

        // IMG's
        src(): string {
            return ReviewsPNG;
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
            const chosenElement: HTMLDivElement = document.getElementById("reviews_section") as HTMLDivElement;

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
        const storeReviews = childStores.useReviewsStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeReviews, storeEvent };
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
