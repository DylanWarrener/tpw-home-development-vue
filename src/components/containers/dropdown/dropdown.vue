<template>
	<v-select
		hide-selected
		class="w-auto h-auto"
		variant="underlined"
		density="compact"
		:base-color="txtColor"
		color="accent"
		:bg-color="bkColor"
		theme="blue"
		:items="items"
		:label="label"
		v-model="value"
	></v-select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

// Store
import parentStore from "../../../store";

export default defineComponent({
	name: "dropdown-component",
	props: {
		items: { type: Array as PropType<string[]>, required: true },
		label: { type: String, required: true },
	},
	computed: {
		bkColor(): string {
			return this.storeCommon.isLightThemeActive ? "white" : "black";
		},
		txtColor(): string {
			return this.storeCommon.isLightThemeActive ? "black" : "white";
		},
	},
	watch: {
		value(newValue: string): void {
			this.$emit("value", newValue);
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
	data() {
		return {
			value: this.items[0],
		};
	},
});
</script>
