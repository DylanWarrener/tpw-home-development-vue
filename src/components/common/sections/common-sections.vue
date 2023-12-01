<template>
	<section class="d-flex flex-column text-default text-center" :id="id" :class="containerClass">
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
		<div style="gap: 16px" class="border d-flex flex-row justify-space-evenly" :class="contentClass">
			<slot name="content"></slot>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { useCommonStore } from "@plugins/pinia/pinia";

export default defineComponent({
	name: "section-content-component",
	props: {
		id: { type: String, required: false },
		title: { type: String, required: false },
		subtitle: { type: String, required: false },
		titleClass: { type: String, required: false },
		subtitleClass: { type: String, required: false },
		contentClass: { type: String, required: false, default: "pa-4 mt-8" },
		containerClass: { type: String, required: false, default: "container" },
	},
	setup() {
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
});
</script>
