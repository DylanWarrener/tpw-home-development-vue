<template>
	<section-component class="bg-section-secondary" :title="title" :subtitle="subtitle">
		<template #content>
			<div class="d-flex flex-column flex-1-0" style="border: 2px solid red">
				<!-- Discovery -->
				<div class="d-flex flex-row sticky-row">
					<div class="flex-0-1 sticky-column">
						<div class="sticky-column-height">
							<div class="sticky-container">
								<h3 class="text-uppercase text-vertical">Discovery</h3>
							</div>
						</div>
					</div>
					<div class="d-flex flex-row flex-1-0">Column 2</div>
				</div>

				<!-- Strategy -->
				<div class="d-flex flex-row sticky-row">
					<div class="flex-0-1 sticky-column">
						<div class="sticky-column-height">
							<div class="sticky-container">
								<h3 class="text-uppercase text-vertical">Strategy</h3>
							</div>
						</div>
					</div>
					<div class="d-flex flex-row flex-1-0">Column 2</div>
				</div>

				<!-- Design -->
				<div class="d-flex flex-row sticky-row">
					<div class="flex-0-1 sticky-column">
						<div class="sticky-column-height">
							<div class="sticky-container">
								<h3 class="text-uppercase text-vertical">Design</h3>
							</div>
						</div>
					</div>
					<div class="d-flex flex-row flex-1-0">Column 2</div>
				</div>

				<!-- Build -->
				<div class="d-flex flex-row sticky-row">
					<div class="flex-0-1 sticky-column">
						<div class="sticky-column-height">
							<div class="sticky-container">
								<h3 class="text-uppercase text-vertical">Build</h3>
							</div>
						</div>
					</div>
					<div class="d-flex flex-row flex-1-0">Column 2</div>
				</div>
			</div>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section.vue";

export default defineComponent({
	name: "process-of-elimination-component",
	components: {
		"section-component": Section,
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
