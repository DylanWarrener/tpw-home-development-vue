<template>
	<v-card color="primary" class="rounded-shaped" width="100%">
		<v-card-item>
			<v-card-title>{{ title }}</v-card-title>
			<v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
		</v-card-item>
		<v-card-text>
			<slot name="content"></slot>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn variant="text">{{ btnText }}</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "card-component",
	props: {
		title: { type: String, required: true },
		subtitle: { type: String, required: false },
		btnText: { type: String, required: true },
	},
});
</script>