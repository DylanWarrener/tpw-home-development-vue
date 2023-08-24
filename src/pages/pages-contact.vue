<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
        <template #content>
            <section-component id="contact_section" :title="sectionTitle" :subtitle="sectionSubtitle"> </section-component>
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
import ContactPNG from "@assets/png/contact/contact.jpg";

// Enums
import { EventNames } from "@enums/events";

// Utils
import { scrollToElement } from "@utils/utils";

export default defineComponent({
    name: "contact-page-component",
    components: {
        "page-component": Page,
        "section-component": Section,
    },
    computed: {
        src(): string {
            return ContactPNG;
        },
        canvasTitle(): string {
            return this.$t("common.card.canvas.pages.contact.title");
        },
        canvasSubtitle(): string {
            return this.$t("common.card.canvas.pages.contact.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("common.card.canvas.pages.contact.btnText");
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
            const contact: string = this.$t("common.pages.name.contact");
            const cardClicked: number = EventNames.CARD_BTN_CLICKED;
            const pageName = this.$route.name!;

            if (newValue && this.$route.name === contact) {
                if (newValue === `${cardClicked}_${pageName.toString()}_${this.canvasBtnText.toLowerCase()}`) {
                    const contactSectionElement: HTMLDivElement = document.getElementById("contact_section") as HTMLDivElement;
                    scrollToElement(contactSectionElement!.offsetTop - this.storeCommon.getAppBarHeight);
                }
                this.storeEvent.setEmittedEvent("");
            }
        },
    },
    setup() {
        const storeCommon = parentStore();
        const storeContact = childStores.useContactStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeContact, storeEvent };
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
