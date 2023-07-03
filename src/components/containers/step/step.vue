<template>
	<div class="d-flex flex-column" style="border: 2px solid white">
		<!-- Title -->
		<div class="d-flex flex-row align-baseline" style="gap: 16px">
			<h1>
				{{ stepNumber }}
			</h1>
			<h3 class="w-100 text-left">
				{{ title }}
			</h3>
		</div>

		<!-- Text -->
		<div>
			<p class="text-left" style="padding-left: 72px">
				{{ text }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "step-component",
	props: {
		stepNumber: { type: String, required: true },
		title: { type: String, required: true },
		text: { type: String, required: true },
	},
});
</script>
