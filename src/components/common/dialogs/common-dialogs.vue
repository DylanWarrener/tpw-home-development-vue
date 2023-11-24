<template>
	<v-dialog v-model="isDialogActive" width="50%" transition="dialog-top-transition">
		<slot name="content">
			<card-component
				variant="elevated"
				color="accent"
				card-class="h-75 rounded-0"
				title-class="text-center"
				btn-text="submit"
				:action-btn-id="dialogCardBtnID"
			>
				<template #img>
					<v-img cover style="height: 50vh" :src="data.src">
						<v-toolbar color="accent" :title="title">
							<v-tooltip location="bottom" v-model="data.icon.showTooltip">
								<template #activator="{ props }">
									<v-btn
										icon
										class="text-inverted"
										:id="dialogCardBtnID"
										v-bind="props"
										@click.stop="data.showDialog = !data.showDialog"
									>
										<v-icon>{{ data.icon.mdi }}</v-icon>
									</v-btn>
								</template>
								<span>{{ data.icon.tooltip }}</span>
							</v-tooltip>
						</v-toolbar>
					</v-img>
				</template>
				<template #content>
					<slot name="dialog-content"></slot>
				</template>
			</card-component>
		</slot>
	</v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore } from "@plugins/pinia/pinia";

// Components
import Card from "@components/common/cards/common-cards.vue";

// Interfaces
import { ICommonSignUpNewsletterDialogData } from "@interfaces/common/interfaces-common";

// Enums
import { CardBtnIDs } from "@enums/IDs/enums-ids-btn";

export default defineComponent({
	name: "dialog-component",
	components: {
		"card-component": Card,
	},
	props: {
		isDialogActive: { type: Boolean, required: true },
		data: { type: Object as () => ICommonSignUpNewsletterDialogData, required: true },
	},
	data() {
		return {
			dialogCardBtnID: CardBtnIDs.DIALOG_CARD_BTN_ID,
		};
	},
	computed: {
		// Text
		title(): string {
			return `${this.data.title.toUpperCase()} - ${this.data.message}`;
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>
