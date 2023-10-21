<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText"></page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteRecordName } from "vue-router";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";

// Interfaces
import { IBathroomData } from "@interfaces/bathroom/interface-bathroom";

// Images
import BathroomPNG from "@assets/png/bathrooms/bathroom.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "bathroom-page-component",
    components: {
        "page-component": Page,
    },
    data(): IBathroomData {
        return {};
    },
    computed: {
        // Text
        canvasTitle(): string {
            return this.$t("$vuetify.card.canvas.pages.bathroom.title");
        },
        canvasSubtitle(): string {
            return this.$t("$vuetify.card.canvas.pages.bathroom.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("$vuetify.card.canvas.pages.bathroom.btnText");
        },

        // IMGs
        src(): string {
            return BathroomPNG;
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
            const chosenElement: HTMLDivElement = document.getElementById("be_inspired_section") as HTMLDivElement;

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
        const storeBathroom = childStores.useBathroomStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeBathroom, storeEvent };
    },
    created(): void {
        this.storeCommon.setIsCanvasComponentActive(true);
        this.storeCommon.setIsBeInspiredComponentActive(true);
        this.storeCommon.setIsPortfolioComponentActive(true);
        this.storeCommon.setIsProcessOfEliminationActive(false);
        this.storeCommon.setIsNewsComponentActive(false);
        this.storeCommon.setIsReviewsComponentActive(false);
    },
});
</script>
