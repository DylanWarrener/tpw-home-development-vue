<template>
	<section-component class="bg-section-secondary" :title="title" :subtitle="subtitle">
		<template #content>
			<div class="d-flex flex-column flex-1-0">
				<!-- Discovery -->
				<slide-component title="Discovery">
					<template #content>Content</template>
				</slide-component>

				<!-- Strategy -->
				<slide-component title="Strategy">
					<template #content>Content</template>
				</slide-component>

				<!-- Design -->
				<slide-component title="Strategy">
					<template #content>Design</template>
				</slide-component>

				<!-- Build -->
				<slide-component title="Strategy">
					<template #content>Build</template>
				</slide-component>
			</div>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section.vue";
import Slide from "../../containers/slide/slide.vue";

export default defineComponent({
	name: "process-of-elimination-component",
	components: {
		"section-component": Section,
		"slide-component": Slide,
	},
	computed: {
		title(): string {
			return this.$t("common.section.processOfElimination.title");
		},
		subtitle(): string {
			return this.$t("common.section.processOfElimination.subtitle");
		},
	},
});
</script>

<style scoped lang="scss">
.sticky-row {
	border: 2px solid black;
	min-height: 2000px;
}

.sticky-column {
	border: 2px solid blue;
	position: relative;
	min-width: 50px;
	padding-right: 100px;
}

.sticky-column-height {
	border: 2px solid orange;
	position: absolute;
	top: 0;
	left: 0;
	height: 95%;
	width: 100%;
}

.sticky-container {
	border: 2px solid black;
	position: sticky;
	top: 0;
	left: 0;
	padding-top: 100px;
}

.text-vertical {
	border: 2px solid green;
	position: sticky;
	top: 0;
	left: 0;
	transform-origin: top right;
	transform: translate(-50%, 0) rotate(-90deg);
}
</style>
