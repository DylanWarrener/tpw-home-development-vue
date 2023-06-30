<template>
	<v-btn :class="class">
		{{ text }}
	</v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "button-component",
	props: {
		class: { type: String, required: false },
		text: { type: String, required: false },
	},
	computed: {
		defaultClass(): string {
			return this.class ? this.class : "bg-default text-button";
		},
	},
});
</script>
