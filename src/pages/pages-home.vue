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
import HomePNG from "@assets/png/home/home.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "home-page-component",
    components: {
        "page-component": Page,
    },
    computed: {
        src(): string {
            return HomePNG;
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

        // Events
        recievedEventData(): string {
            return this.storeEvent.getEmittedEvent;
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const desiredRouteName: string = this.$t("common.pages.name.home");
            const eventID: number = EventNames.CARD_BTN_CLICKED;
            const pageName: any = this.$route.name!;
            const appBarHeight: number = this.storeCommon.getAppBarHeight;
            const chosenElement: any = document.getElementById("be_inspired_section");

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
        const storeHome = childStores.useHomeStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeHome, storeEvent };
    },
    created(): void {
        this.storeCommon.setIsCanvasComponentActive(true);
        this.storeCommon.setIsBeInspiredComponentActive(true);
        this.storeCommon.setIsPortfolioComponentActive(true);
        this.storeCommon.setIsReviewComponentActive(true);
        this.storeCommon.setIsProcessOfEliminationActive(true);
        this.storeCommon.setIsLatestNewsComponentActive(true);
    },
});
</script>
