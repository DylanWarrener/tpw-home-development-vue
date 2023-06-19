<template>
	<v-select
		hide-selected
		class="w-auto h-auto"
		variant="underlined"
		density="compact"
		:items="items"
		:label="label"
		v-model="value"
		@change="changed"
	></v-select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Interface
import { ICommonPageDropdownTextualData } from "../../../interfaces/common/page/interface-common-page";

export default defineComponent({
	name: "dropdown-component",
	props: {
		items: { type: Object as () => ICommonPageDropdownTextualData, required: true },
		label: { type: String, required: true },
	},
	methods: {
		changed(): void {
			this.$emit("value", this.value);
		},
	},
	data() {
		return {
			value: this.items.kitchen,
		};
	},
});
</script>
