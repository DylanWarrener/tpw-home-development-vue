<template>
	<v-select
		hide-selected
		class="w-auto h-auto bg-transparent text-accent"
		variant="underlined"
		density="compact"
		:items="items"
		:label="label"
		v-model="value"
	></v-select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

// Store
import { parentStore } from "../../../plugins/pinia/pinia";

export default defineComponent({
	name: "dropdown-component",
	props: {
		items: { type: Array as PropType<string[]>, required: true },
		label: { type: String, required: true },
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
