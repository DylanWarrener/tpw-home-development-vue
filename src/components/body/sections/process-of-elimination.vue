<template>
	<section-component class="bg-section-secondary" :title="title" :subtitle="subtitle">
		<template #content>
			<div class="d-flex flex-column flex-1-1" style="border: 2px solid white">
				<slide-component
					v-for="stepsItem in steps"
					:id="stepsItem.id"
					:title="stepsItem.title"
					:slide-number="stepsItem.id"
				>
					<template #content>
						<step-component
							v-for="stepItem in stepsItem.content"
							:id="stepItem.id"
							:step-number="stepItem.id"
							:title="stepItem.title"
							:text="stepItem.text"
						>
						</step-component>
					</template>
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
import Step from "../../containers/steps/step.vue";

export default defineComponent({
	name: "process-of-elimination-component",
	components: {
		"section-component": Section,
		"slide-component": Slide,
		"step-component": Step,
	},
	computed: {
		title(): string {
			return this.$t("common.section.processOfElimination.title");
		},
		subtitle(): string {
			return this.$t("common.section.processOfElimination.subtitle");
		},
	},
	data() {
		return {
			steps: [
				{
					id: "1",
					title: "Discovery",
					content: [
						{ id: "1.1", title: "Schedule a consultation", text: "Text goes here" },
						{ id: "1.2", title: "Prepare for the consultation", text: "Text goes here" },
						{ id: "1.3", title: "Introductions and rapport-building", text: "Text goes here" },
						{ id: "1.4", title: "Active listeningn", text: "Text goes here" },
						{ id: "1.5", title: "Ask open-ended questions", text: "Text goes here" },
						{ id: "1.6", title: "Discuss budget and timeline", text: "Text goes here" },
						{ id: "1.7", title: "Explore potential challenges", text: "Text goes here" },
						{ id: "1.8", title: "Provide guidance and suggestions", text: "Text goes here" },
						{ id: "1.9", title: "Review previous work and portfolio", text: "Text goes here" },
						{ id: "1.10", title: "Recap and next steps", text: "Text goes here" },
					],
				},
				{
					id: "2",
					title: "Strategy",
					content: [
						{ id: "2.1", title: "Site evaluation", text: "Text goes here" },
						{ id: "2.2", title: "Feasibility study", text: "Text goes here" },
					],
				},
				{
					id: "3",
					title: "Design",
					content: [
						{ id: "3.1", title: "Conceptual design", text: "Text goes here" },
						{ id: "3.2", title: "Budget and financing", text: "Text goes here" },
						{ id: "3.3", title: "Detailed design and planning", text: "Text goes here" },
						{ id: "3.4", title: "Permit acquisition", text: "Text goes here" },
					],
				},
				{
					id: "4",
					title: "Build",
					content: [
						{ id: "4.1", title: "Contractor selection", text: "Text goes here" },
						{ id: "4.2", title: "Construction management", text: "Text goes here" },
						{ id: "4.3", title: "Quality control and inspections", text: "Text goes here" },
						{ id: "4.4", title: "Project completion and handover", text: "Text goes here" },
						{ id: "4.5", title: "Customer support and satisfaction", text: "Text goes here" },
					],
				},
			],
		};
	},
});
</script>
