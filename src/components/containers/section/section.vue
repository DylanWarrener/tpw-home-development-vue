<template>
	<div :id="id" class="d-flex flex-column text-center text-default" style="border: 2px solid red">
		<!-- Title slot -->
		<div class="flex-0-0">
			<slot name="title">
				<h1>{{ title }}</h1>
			</slot>
		</div>

		<!-- Subtitle slot -->
		<div class="flex-0-0">
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
import { parentStore } from "@plugins/pinia/pinia";

export default defineComponent({
	name: "section-content-component",
	props: {
		id: { type: String, required: false },
		title: { type: String, required: false },
		subtitle: { type: String, required: false },
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
