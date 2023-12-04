<template>
	<v-dialog width="60%" transition="dialog-top-transition" v-model="data.showDialog">
		<slot name="content">
			<card-component
				variant="elevated"
				color="accent"
				card-class="h-75 rounded-0"
				title-class="text-center"
				action-btn-class="dialog_btn"
				action-btn-color="inverted"
				btn-text="submit"
				:action-btn-id="dialogCardBtnID"
			>
				<template #img>
					<v-img cover style="height: 35vh" :src="data.src">
						<v-toolbar color="accent" :title="titleAndMessage">
							<v-tooltip location="bottom" v-model="data.toolbar.icon.showTooltip">
								<template #activator="{ props }">
									<v-btn
										icon
										class="text-inverted"
										v-bind="props"
										@click.stop="data.showDialog = !data.showDialog"
									>
										<v-icon>{{ data.toolbar.icon.mdi }}</v-icon>
									</v-btn>
								</template>
								<span>{{ data.toolbar.icon.tooltip }}</span>
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
import { useCommonStore } from "@plugins/pinia/pinia";

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
		data: { type: Object as () => ICommonSignUpNewsletterDialogData, required: true },
	},
	data() {
		return {
			dialogCardBtnID: CardBtnIDs.DIALOG_CARD_BTN_ID,
		};
	},
	computed: {
		// Text
		titleAndMessage(): string {
			return this.data.toolbar.title.toUpperCase() + " - " + this.data.toolbar.message;
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
});
</script>

<style lang="scss">
.dialog_btn {
	border: thin solid rgb(var(--v-theme-inverted));
}
</style>
