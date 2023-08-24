<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
        <template #content>
            <section-component id="about_section" :title="sectionTitle" :subtitle="sectionSubtitle"> </section-component>
        </template>
    </page-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores, eventStores } from "@plugins/pinia/pinia";

// Components
import Page from "@components/containers/page/page.vue";
import Section from "@components/containers/section/section.vue";

// Images
import AboutPNG from "@assets/png/about/about.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "about-page-component",
    components: {
        "page-component": Page,
        "section-component": Section,
    },
    computed: {
        // IMG's
        src(): string {
            return AboutPNG;
        },

        // Text
        canvasTitle(): string {
            return this.$t("common.card.canvas.pages.about.title");
        },
        canvasSubtitle(): string {
            return this.$t("common.card.canvas.pages.about.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("common.card.canvas.pages.about.btnText");
        },
        sectionTitle(): string {
            return this.$t("common.section.pages.about.title");
        },
        sectionSubtitle(): string {
            return this.$t("common.section.pages.about.subtitle");
        },

        // Events
        recievedEventData(): string {
            return this.storeEvent.getEmittedEvent;
        },
    },
    watch: {
        recievedEventData(newValue: string) {
            const about: string = this.$t("common.pages.name.about");
            const cardClicked: number = EventNames.CARD_BTN_CLICKED;
            const pageName = this.$route.name!;

            if (newValue && this.$route.name === about) {
                if (newValue === `${cardClicked}_${pageName.toString()}_${this.canvasBtnText.toLowerCase()}`) {
                    const aboutSectionElement: HTMLDivElement = document.getElementById("about_section") as HTMLDivElement;
                    scrollToElement(aboutSectionElement!.offsetTop - this.storeCommon.getAppBarHeight);
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
        this.storeCommon.setIsReviewComponentActive(false);
        this.storeCommon.setIsProcessOfEliminationActive(false);
        this.storeCommon.setIsLatestNewsComponentActive(false);
    },
});
</script>
