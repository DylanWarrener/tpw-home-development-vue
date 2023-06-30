<template>
	<section-component class="bg-section-secondary" :title="title" :subtitle="subtitle">
		<template #content>
			<div class="d-flex flex-column flex-1-0">
				<!-- Discovery -->
				<div class="d-flex flex-row" style="gap: 16px; min-height: 2000px">
					<div class="flex-0-1">
						<h3 class="text-uppercase text-vertical" style="padding: 0 60px 0 0">Discovery</h3>
					</div>
					<div class="d-flex flex-row flex-1-1">Column 2</div>
				</div>
				<v-divider class="pa-4"></v-divider>

				<!-- Strategy -->
				<div class="d-flex flex-row">Strategy</div>

				<!-- Design -->
				<div class="d-flex flex-row">Design</div>

				<!-- Build -->
				<div class="d-flex flex-row">Build</div>
			</div>
		</template>
	</section-component>
</template>

<script lang="ts">
/*
<div class="w-100 d-flex flex-column" style="min-height: 2000px">
				<!-- Discovery -->
				<div class="d-flex flex-row flex-1-0">
					<div class="pb-12 flex-0-1">
						<div class="px-14 text-uppercase text-vertical">Discovery</div>
					</div>
					<div class="d-flex flex-column flex-1-1">
						<p>Content test 1</p>
						<p>Content test 1</p>
					</div>
				</div>
			</div>
*/
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
.text-vertical {
	position: sticky;
	top: 0;
	left: 0;
	transform: rotate(-90deg) translate(-50%);
}
</style>
