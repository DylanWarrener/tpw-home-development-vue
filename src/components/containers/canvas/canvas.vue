<template>
	<v-parallax class="w-100 h-screen" :src="src">
		<v-container class="d-flex fill-height">
			<v-row>
				<v-col cols="12" align="center">
					<card-component
						color="primary"
						class="rounded-shaped"
						:title="title"
						:subtitle="subtitle"
						:btn-text="btnText"
					></card-component>
				</v-col>
			</v-row>
		</v-container>
	</v-parallax>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section.vue";
import Card from "../card/card.vue";

export default defineComponent({
	name: "be-inspired-component",
	props: {
		src: { type: String, required: true },
		title: { type: String, required: true },
		subtitle: { type: String, required: false },
		btnText: { type: String, required: true },
	},
	components: {
		"section-component": Section,
		"card-component": Card,
	},
});
</script>
