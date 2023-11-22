<template>
	<v-parallax class="parallax" :src="src">
		<v-container class="d-flex fill-height">
			<v-row>
				<v-col cols="12" align="center">
					<card-component
						class="rounded-shaped"
						:title="title"
						:subtitle="subtitle"
						:btn-text="btnText"
						:action-btn-id="canvasCardBtnID"
					></card-component>
				</v-col>
			</v-row>
		</v-container>
	</v-parallax>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Card from "@components/common/cards/common-cards.vue";

// Enums
import { BtnIDs } from "@enums/IDs/enums-ids-btn";

export default defineComponent({
	name: "canvas-component",
	components: {
		"card-component": Card,
	},
	props: {
		src: { type: String, required: true },
		title: { type: String, required: true },
		subtitle: { type: String, required: false },
		btnText: { type: String, required: true },
	},
	computed: {
		canvasCardBtnID(): string {
			return BtnIDs.CANVAS_CARD_BTN_ID;
		},
	},
});
</script>

<style scoped>
.parallax {
	width: 100%;
	min-height: 100vh;
	max-height: 100vh;
}
</style>
