<template>
    <page-component :src="src" :canvas-title="canvasTitle" :canvas-subtitle="canvasSubtitle" :btn-text="canvasBtnText">
        <template #content>
            <section-component id="contact_section" :title="sectionTitle" :subtitle="sectionSubtitle">
                <template #content>
                    <contact-component></contact-component>
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
import Contact from "@components/containers/contact/contact.vue";

// Interfaces
import { IContactData } from "@interfaces/contact/interface-contact";

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
        "contact-component": Contact,
    },
    data(): IContactData {
        return {};
    },
    computed: {
        // Text
        canvasTitle(): string {
            return this.$t("$vuetify.card.canvas.pages.contact.title");
        },
        canvasSubtitle(): string {
            return this.$t("$vuetify.card.canvas.pages.contact.subtitle");
        },
        canvasBtnText(): string {
            return this.$t("$vuetify.card.canvas.pages.contact.btnText");
        },
        sectionTitle(): string {
            return this.$t("$vuetify.pages.contact.title");
        },
        sectionSubtitle(): string {
            return this.$t("$vuetify.pages.contact.subtitle");
        },

        // IMGs
        src(): string {
            return ContactPNG;
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
            const chosenElement: HTMLDivElement = document.getElementById("contact_section") as HTMLDivElement;

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
        const storeContact = childStores.useContactStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeContact, storeEvent };
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
