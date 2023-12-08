<template>
	<v-text-field
		clearable
		persistent-clear
		persistent-counter
		style="min-width: 55ch; min-height: 6rem"
		hide-details="auto"
		variant="outlined"
		:type="type"
		:prepend-inner-icon="prependInnerIcon"
		:label="label"
		:placeholder="placeholder"
		:hint="hint"
		:color="color"
	></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "text-field-component",
	props: {
		type: { type: String, required: false, default: "input" },
		prependInnerIcon: { type: String, required: false },
		label: { type: String, required: true },
		placeholder: { type: String, required: false },
		hint: { type: String, required: false },
		color: { type: String, required: true },
	},
});
</script>
