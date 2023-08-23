<template>
	<v-hover v-slot:default="{ isHovering, props }">
		<v-btn :class="isHovering ? 'bg-accent' : 'transparent'" :innerHTML="text" v-bind="props" @click="handleClick"></v-btn>
	</v-hover>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "button-component",
	emits: {
		navigateTo: null
	},
	props: {
		text: { type: String, required: false },
	},
	methods: {
		handleClick() {
			this.$emit("navigateTo");
		},
	},
});
</script>
