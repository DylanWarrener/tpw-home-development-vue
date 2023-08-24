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
import KitchenPNG from "@assets/png/kitchens/kitchen.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "kitchen-page-component",
    components: {
        "page-component": Page,
    },
    computed: {
        src(): string {
            return KitchenPNG;
        },
        canvasTitle(): string {
            return this.$t("common.card.canvas.pages.kitchen.title");
        },
        canvasSubtitle(): string {
            return this.$t("common.card.canvas.pages.kitchen.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("common.card.canvas.pages.kitchen.btnText");
        },

        // Events
        recievedEventData(): string {
            return this.storeEvent.getEmittedEvent;
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const kitchen: string = this.$t("common.pages.name.kitchen");
            const cardClicked: number = EventNames.CARD_BTN_CLICKED;
            const pageName = this.$route.name!;

            if (newValue && this.$route.name === kitchen) {
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
        const storeKitchen = childStores.useKitchenStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeKitchen, storeEvent };
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
