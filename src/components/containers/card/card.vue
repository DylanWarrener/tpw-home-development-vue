<template>
	<v-card width="400">
		<v-card-item>
			<v-card-title>{{ title }}</v-card-title>
			<v-card-subtitle>{{ subtitle }}</v-card-subtitle>
		</v-card-item>
		<v-card-text>
			<slot name="content"></slot>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn variant="text" color="primary">{{ btnText }}</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "card-component",
	props: {
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
		btnText: { type: String, required: true },
	},
});
</script>
