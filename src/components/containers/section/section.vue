<template>
	<div class="pa-4 d-flex flex-column text-center" style="border: 2px solid red">
		<!-- Title slot -->
		<div class="flex-0-0">
			<slot name="title">
				<h1>{{ title }}</h1>
			</slot>
		</div>

		<!-- Subtitle slot -->
		<div class="pa-4 flex-0-0">
			<slot name="subtitle">
				<i>{{ subtitle }}</i>
			</slot>
		</div>

		<!-- Content slot -->
		<div class="d-flex flex-row flex-wrap flex-1-0 justify-center align-center" style="gap: 16px; border: 2px solid red">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import parentStore from "../../../store";

export default defineComponent({
	name: "section-content-component",
	props: {
		title: { type: String, required: false },
		subtitle: { type: String, required: false },
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
