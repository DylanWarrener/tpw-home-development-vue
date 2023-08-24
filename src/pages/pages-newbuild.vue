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
import NewbuildPNG from "@assets/png/newbuilds/newbuild.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "newbuild-page-component",
    components: {
        "page-component": Page,
    },
    computed: {
        src(): string {
            return NewbuildPNG;
        },
        canvasTitle(): string {
            return this.$t("common.card.canvas.pages.newbuild.title");
        },
        canvasSubtitle(): string {
            return this.$t("common.card.canvas.pages.newbuild.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("common.card.canvas.pages.newbuild.btnText");
        },

        // Events
        recievedEventData(): string {
            return this.storeEvent.getEmittedEvent;
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const newbuild: string = this.$t("common.pages.name.newbuild");
            const cardClicked: number = EventNames.CARD_BTN_CLICKED;
            const pageName = this.$route.name!;

            if (newValue && this.$route.name === newbuild) {
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
        const storeNewbuild = childStores.useNewbuildStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeNewbuild, storeEvent };
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
