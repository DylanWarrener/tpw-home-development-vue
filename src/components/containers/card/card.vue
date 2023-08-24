<template>
    <v-card class="pa-4 d-flex flex-column bg-background-secondary text-default" min-width="300px">
        <v-card-item v-if="title || subtitle">
            <!-- Title -->
            <v-card-title class="pa-2">
                <slot name="title">
                    <h1>{{ title }}</h1>
                </slot>
            </v-card-title>

            <!-- Subtitle -->
            <v-card-subtitle class="pa-2">
                <slot name="subtitle">
                    <h3>{{ subtitle }}</h3>
                </slot>
            </v-card-subtitle>
        </v-card-item>

        <!-- Content -->
        <v-card-text class="pa-0">
            <slot name="content"></slot>
        </v-card-text>

        <!-- Actions -->
        <v-card-actions class="pa-2" v-if="btnText">
            <v-spacer></v-spacer>
            <v-btn variant="outlined" :text="btnText" @click="scrollTo"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore, eventStores } from "@plugins/pinia/pinia";

// Enums
import { EventNames } from "@enums/events";

export default defineComponent({
    name: "card-component",
    props: {
        cardStyle: { type: String, required: false },
        title: { type: String, required: false },
        subtitle: { type: String, required: false },
        btnText: { type: String, required: false },
    },
    methods: {
        scrollTo(event: PointerEvent): void {
            const eventTarget: HTMLSpanElement = event.target as HTMLSpanElement;
            const btnText: string = eventTarget.innerText;
            const cardClicked: number = EventNames.CARD_BTN_CLICKED;
            const pageName = this.$route.name!;

            this.storeEvent.setEmittedEvent(`${cardClicked}_${pageName.toString()}_${btnText.toLowerCase()}`);
        },
    },
    setup() {
        const storeCommon = parentStore();
        const storeEvent = eventStores.useGlobalEventStore();
        return { storeCommon, storeEvent };
    },
});
</script>
