<template>
	<v-select
		clearable
		hide-selected
		class="text-capitalize"
		style="min-width: 40ch; min-height: 8.4rem; max-height: 8.4rem"
		variant="outlined"
		:items="items"
		:label="label"
		:prepend-inner-icon="prependInnerIcon"
		:hint="hint"
		v-model="value"
	></v-select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "@plugins/pinia/pinia";

export default defineComponent({
	name: "dropdown-component",
	props: {
		items: { type: Array<String>, required: true },
		label: { type: String, required: true },
		prependInnerIcon: { type: String, required: false },
		hint: { type: String, required: false },
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
