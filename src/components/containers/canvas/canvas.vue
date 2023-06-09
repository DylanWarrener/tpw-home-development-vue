<template>
	<v-parallax class="w-100 h-screen" :src="src">
		<v-container class="d-flex fill-height">
			<v-row align="center">
				<v-col align="center" cols="12">
					<card-component title="Title" subtitle="Subtitle" btn-text="BtnText">
						<template #content> Content </template>
					</card-component>
				</v-col>
			</v-row>
		</v-container>
	</v-parallax>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Section from "../../containers/section/section-content.vue";
import Card from "../card/card.vue";

export default defineComponent({
	name: "be-inspired-component",
	props: {
		src: { type: String, required: true },
	},
	components: {
		"section-component": Section,
		"card-component": Card,
	},
});
</script>
