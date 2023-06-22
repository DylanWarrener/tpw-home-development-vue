<template>
	<v-btn :stacked="stacked" class="bg-default text-button" :icon="icon" :text="text" rounded="xl"></v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VBtn } from "vuetify/lib/components/index.mjs";

export default defineComponent({
	name: "button-component",
	props: {
		stacked: { type: Boolean, required: false },
		//class: { type: String, required: false },
		//color: { type: String, required: false },
		icon: { type: String, required: false },
		text: { type: String, required: false },
	},
});
</script>
