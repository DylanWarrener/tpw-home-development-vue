<template>
	<v-hover v-slot:default="{ isHovering, props }">
		<v-btn :class="isHovering ? 'bg-accent' : 'transparent'" :variant="variant" v-bind="props" @click="handleClick">
			{{ text }}
		</v-btn>
	</v-hover>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "button-component",
	props: {
		variant: {
			type: Object as () => NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">,
			required: false,
			default(): string {
				return "flat";
			},
		},
		text: { type: String, required: false },
	},
	methods: {
		handleClick() {
			this.$emit("navigateTo");
		},
	},
});
</script>
