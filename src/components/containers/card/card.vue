<template>
	<v-card class="pa-4 bg-background-secondary text-default" min-width="300px">
		<v-card-item class="pa-4" v-if="title || subtitle">
			<!-- Title -->
			<v-card-title :tag="titleTag" style="line-height: 72px" class="pa-2 text-h2 text-uppercase text-wrap" :class="titleClass">
				<slot name="title">
					{{ title }}
				</slot>
			</v-card-title>

			<!-- Subtitle -->
			<v-card-subtitle class="pa-2 text-subtitle-1" :class="subtitleClass">
				<slot name="subtitle">
					<h3>{{ subtitle }}</h3>
				</slot>
			</v-card-subtitle>
		</v-card-item>

		<!-- Content -->
		<v-card-text class="pa-0" :class="contentClass">
			<slot name="content"></slot>
		</v-card-text>

		<!-- Actions -->
		<v-card-actions class="pa-4" v-if="btnText">
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

// Utils
import { buildEventString } from "@utils/utils";

export default defineComponent({
	name: "card-component",
	props: {
		cardStyle: { type: String, required: false },
		title: { type: String, required: false },
		subtitle: { type: String, required: false },
		btnText: { type: String, required: false },
		titleClass: { type: String, required: false },
		subtitleClass: { type: String, required: false },
		contentClass: { type: String, required: false },
		titleTag: { type: String, required: false, default: "h2" },
	},
	methods: {
		scrollTo(event: PointerEvent): void {
			const eventTarget: HTMLSpanElement = event.target as HTMLSpanElement;
			const btnText: string = eventTarget.innerText;
			const eventID: number = EventNames.CARD_BTN_CLICKED;
			const pageName: any = this.$route.name!;
			const eventStr: string = buildEventString(eventID, pageName, btnText);

			this.storeEvent.setEmittedEvent(eventStr);
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeEvent = eventStores.useGlobalEventStore();
		return { storeCommon, storeEvent };
	},
});
</script>
