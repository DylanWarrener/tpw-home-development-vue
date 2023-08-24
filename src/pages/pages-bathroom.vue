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
import BathroomPNG from "@assets/png/bathrooms/bathroom.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "bathroom-page-component",
    components: {
        "page-component": Page,
    },
    computed: {
        src(): string {
            return BathroomPNG;
        },
        canvasTitle(): string {
            return this.$t("common.card.canvas.pages.bathroom.title");
        },
        canvasSubtitle(): string {
            return this.$t("common.card.canvas.pages.bathroom.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("common.card.canvas.pages.bathroom.btnText");
        },

        // Events
        recievedEventData(): string {
            return this.storeEvent.getEmittedEvent;
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const bathroom: string = this.$t("common.pages.name.bathroom");
            const cardClicked: number = EventNames.CARD_BTN_CLICKED;
            const pageName = this.$route.name!;

            if (newValue && this.$route.name === bathroom) {
                if (newValue === `${cardClicked}_${pageName.toString()}_${this.canvasBtnText.toLowerCase()}`) {
                    const beInspiredSectionElement: HTMLDivElement = document.getElementById("be_inspired") as HTMLDivElement;
                    scrollToElement(beInspiredSectionElement!.offsetTop - this.storeCommon.getAppBarHeight);
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
        this.storeCommon.setIsReviewComponentActive(false);
        this.storeCommon.setIsProcessOfEliminationActive(false);
        this.storeCommon.setIsLatestNewsComponentActive(false);
    },
});
</script>
