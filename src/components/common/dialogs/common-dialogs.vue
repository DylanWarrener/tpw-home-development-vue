<template>
	<v-dialog v-model="isDialogActive" width="50%">
		<slot name="content">
			<card-component
				title="sign up"
				subtitle="Never miss out on new styles, trends & innovation. Sign up and get 20% off your first order"
				variant="elevated"
				card-class="rounded-0"
				:action-btn-id="dialogCardBtnID"
			></card-component>
		</slot>
	</v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore } from "@plugins/pinia/pinia";

// Components
import Card from "@components/common/cards/common-cards.vue";

// Enums
import { CardBtnIDs } from "@enums/IDs/enums-ids-btn";

export default defineComponent({
	name: "dialog-component",
	components: {
		"card-component": Card,
	},
	props: {
		isDialogActive: { type: Boolean, required: true },
	},
	data() {
		return {
			dialogCardBtnID: CardBtnIDs.DIALOG_CARD_BTN_ID,
		};
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
