<template>
	<v-card class="pa-4 d-flex flex-column" min-width="300px">
		<v-card-item class="pa-0">
			<!-- Title -->
			<v-card-title>
				<slot name="title">
					{{ title }}
				</slot>
			</v-card-title>

			<!-- Subtitle -->
			<v-card-subtitle>
				<slot name="subtitle">
					{{ subtitle }}
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
			<button-component class="bg-default text-accent" :text="btnText"></button-component>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
});
</script>
