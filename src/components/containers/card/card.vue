<template>
	<v-card color="primary" class="pa-4 d-flex flex-column" min-width="300px">
		<v-card-item>
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
			<button-component :text="btnText" @click="handleClick"></button-component>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import parentStore from "../../../store";

// Components
import Button from "../buttons/button.vue";

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
		handleClick(): void {
			this.$emit("cardClicked");
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
