<template>
	<v-card class="pa-4 d-flex flex-column text-default" min-width="300px">
		<v-card-item v-if="title || subtitle">
			<!-- Title -->
			<v-card-title class="pa-2">
				<slot name="title">
					<h1>{{ title }}</h1>
				</slot>
			</v-card-title>

			<!-- Subtitle -->
			<v-card-subtitle class="pa-4">
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
		<v-card-actions class="pa-0" v-if="btnText">
			<v-spacer></v-spacer>
			<button-component variant="outlined" :text="btnText" @navigate-to="beInspired"></button-component>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore } from "../../../plugins/pinia/pinia";

// Components
import Button from "../buttons/button.vue";

// Utils
import { scrollToElement } from "../../../utils/utils";

export default defineComponent({
	name: "card-component",
	components: {
		"button-component": Button,
	},
	props: {
		cardStyle: { type: String, required: false },
		title: { type: String, required: false },
		subtitle: { type: String, required: false },
		btnText: { type: String, required: false },
	},
	methods: {
		beInspired(): void {
			// Navigate page to be-inspired section component
			const beInspiredSectionElement = document.getElementById("be-inspired");

			scrollToElement(beInspiredSectionElement!.offsetTop - this.storeCommon.getAppBarHeight);
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
