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
import { buildEventString, compareEventStrings, scrollToElement } from "@utils/utils";

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
            const desiredRouteName: string = this.$t("common.pages.name.contact");
            const eventID: number = EventNames.CARD_BTN_CLICKED;
            const pageName = this.$route.name!;
            const appBarHeight: number = this.storeCommon.getAppBarHeight;
            const chosenElement: any = document.getElementById("contact_section");

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
