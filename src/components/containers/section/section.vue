<template>
	<section style="gap: 16px" class="d-flex flex-column text-default text-center container" :id="id" :class="containerClass">
		<!-- Title slot -->
		<div :class="titleClass">
			<slot name="title">
				<h2 class="text-accent">{{ title }}</h2>
			</slot>
		</div>

		<!-- Subtitle slot -->
		<div class="align-self-center" :class="subtitleClass">
			<slot name="subtitle">
				<h3>{{ subtitle }}</h3>
			</slot>
		</div>

		<!-- Content slot -->
		<div style="gap: 16px" class="border pa-4 d-flex flex-row flex-wrap justify-center" :class="contentClass">
			<slot name="content"></slot>do
		</div>
	</section>
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
		titleClass: { type: String, required: false },
		subtitleClass: { type: String, required: false },
		contentClass: { type: String, required: false },
		containerClass: { type: String, required: false },
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
