<template>
	<section-component :title="title" :subtitle="subtitle">
		<template #content>
			<div class="d-flex flex-column flex-1-1" style="border: 2px solid white">
				<slide-component v-for="stepsItem in steps" :id="stepsItem.id" :title="stepsItem.title" :slide-number="stepsItem.id">
					<template #content>
						<step-component v-for="stepItem in stepsItem.content" :id="stepItem.id" :step-number="stepItem.id" :title="stepItem.title" :text="stepItem.text"> </step-component>
					</template>
				</slide-component>
			</div>
		</template>
	</section-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "@components/common/sections/common-sections.vue";
import Slide from "@components/common/slideshow/common-slideshow.vue";
import Step from "@components/common/stepper/common-stepper.vue";

export default defineComponent({
	name: "process-of-elimination-component",
	components: {
		"section-component": Section,
		"slide-component": Slide,
		"step-component": Step,
	},
	computed: {
		title(): string {
			return this.$t("$vuetify.common.sections.processOfElimination.title");
		},
		subtitle(): string {
			return this.$t("$vuetify.common.sections.processOfElimination.subtitle");
		},
	},
	data() {
		return {
			steps: [
				{
					id: "1",
					title: "Discovery",
					content: [
						{
							id: "1.1.",
							title: "Schedule a Consultation",
							text: "We offer consultations in person, over the phone, or via video conferencing. Our objective during the consultation is to gain a thorough understanding of your requirements, actively listen to your ideas, gather comprehensive information, and engage in discussions about budget, timeline, and challenges.",
						},
						{
							id: "1.2.",
							title: "Preparation for the Consultation",
							text: "To prepare for the consultation, we thoroughly equip ourselves to comprehend and address your requirements. This involves reviewing pertinent documents and materials, such as property information and sample designs. By familiarizing ourselves with these details beforehand, we can engage in an informed discussion during the consultation, offering tailored advice and recommendations based on your specific needs. Our primary aim is to optimize our time together and provide you with comprehensive guidance and solutions.",
						},
						{
							id: "1.3.",
							title: "Introductions & Rapport-building",
							text: "In the initial phase of our interaction, we place great emphasis on creating a positive connection and building rapport. We introduce ourselves to make you feel at ease and comfortable. By cultivating a friendly and welcoming atmosphere, our aim is to foster open communication and establish a collaborative working relationship. We strive to ensure that you feel heard, valued, and confident in entrusting us.",
						},
						{
							id: "1.4.",
							title: "Discuss Budget & Timeline",
							text: "In the consultation, we conduct a thorough discussion regarding the budget and timeline. We prioritize understanding your financial constraints and desired timeframe. By addressing these critical factors, we can offer realistic guidance and recommendations that align with your resources and objectives. Our objective is to ensure transparency, assist you in making informed decisions regarding the financial aspects and project timeline.",
						},
						{
							id: "1.5.",
							title: "Explore Potential Challenges",
							text: "During our consultation process, we thoroughly examine potential challenges. We take proactive measures to identify and discuss concerns related to the site, zoning regulations, or specific design requirements. By addressing these challenges at an early stage, we can develop effective strategies and solutions to mitigate risks and ensure a seamless project execution. Our objective is to offer comprehensive guidance, enabling you to navigate potential obstacles and achieve a successful outcome.",
						},
						{
							id: "1.6.",
							title: "Provide Guidance & Suggestions",
							text: "Our services encompass providing expert guidance and valuable suggestions. Leveraging our knowledge and experience, we offer tailored professional advice to address your specific needs and goals. Whether it pertains to architectural design, materials selection, energy efficiency, or other project aspects, our objective is to furnish you with informed recommendations and insights. We strive to empower you in making well-informed decisions that optimize the functionality, aesthetics, and overall success.",
						},
						{
							id: "1.7.",
							title: "Review Previous Work & Portfolio",
							text: "Within our process, we provide the chance to review our past work and portfolio. This allows you to gain valuable insight into our capabilities and design concepts. By showcasing completed projects, our aim is to inspire and visually demonstrate our expertise. We believe this review will help you evaluate our style, quality, and attention to detail, thereby instilling confidence in our ability to meet your specific needs.",
						},
						{
							id: "1.8.",
							title: "Recap & Next Steps",
							text: "Following the consultation, we conduct a recap to summarize the discussed key points and establish a shared understanding. This entails reviewing the project scope, goals, and any specific requirements identified during our conversation. Subsequently, we outline the next steps in the process, which may involve presenting design concepts or delivering a proposal. Our primary objective is to provide clarity and transparency, ensuring that you are fully informed and prepared for the subsequent stages.",
						},
					],
				},
				{
					id: "2",
					title: "Strategy",
					content: [
						{ id: "2.01.", title: "Site evaluation", text: "Text goes here" },
						{ id: "2.02.", title: "Feasibility study", text: "Text goes here" },
					],
				},
				{
					id: "3",
					title: "Design",
					content: [
						{ id: "3.01.", title: "Conceptual design", text: "Text goes here" },
						{ id: "3.02.", title: "Budget and financing", text: "Text goes here" },
						{ id: "3.03.", title: "Detailed design and planning", text: "Text goes here" },
						{ id: "3.04.", title: "Permit acquisition", text: "Text goes here" },
					],
				},
				{
					id: "4",
					title: "Build",
					content: [
						{ id: "4.01.", title: "Contractor selection", text: "Text goes here" },
						{ id: "4.02.", title: "Construction management", text: "Text goes here" },
						{ id: "4.03.", title: "Quality control and inspections", text: "Text goes here" },
						{ id: "4.04.", title: "Project completion and handover", text: "Text goes here" },
						{ id: "4.05.", title: "Customer support and satisfaction", text: "Text goes here" },
					],
				},
			],
		};
	},
});
</script>
