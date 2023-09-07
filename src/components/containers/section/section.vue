<template>
	<section style="gap: 16px" class="pa-8 d-flex flex-column text-default text-center" :id="id" :class="containerClass">
		<!-- Title slot -->
		<div :class="titleClass">
			<slot name="title">
				<h3 class="text-h3 text-accent">{{ title }}</h3>
			</slot>
		</div>

		<!-- Subtitle slot -->
		<div class="w-100 align-self-center" :class="subtitleClass">
			<slot name="subtitle">
				<div class="text-subtitle-1">
					<i>{{ subtitle }}</i>
				</div>
			</slot>
		</div>

		<!-- Content slot -->
		<div style="gap: 16px" class="border d-flex flex-row flex-wrap justify-center" :class="contentClass">
			<slot name="content"></slot>
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
