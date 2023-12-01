<template>
	<v-dialog width="60%" transition="dialog-top-transition" v-model="showDialog">
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
					<v-img cover style="height: 35vh" :src="dialogSrc">
						<v-toolbar color="accent" :title="toolbarTitleAndMessage">
							<v-tooltip location="bottom" v-model="toolbarIconShowTooltip">
								<template #activator="{ props }">
									<v-btn icon class="text-inverted" :id="dialogCardBtnID" v-bind="props" @click.stop="showDialog = !showDialog">
										<v-icon>{{ toolbarIcon }}</v-icon>
									</v-btn>
								</template>
								<span>{{ toolbarIconTooltip }}</span>
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
		toolbarTitleAndMessage(): string {
			return this.data.toolbar.title.toUpperCase() + " - " + this.data.toolbar.message;
		},
		toolbarIconTooltip(): string {
			return this.data.toolbar.icon.tooltip;
		},

		// IMGs
		dialogSrc(): string {
			return this.data.src;
		},

		// Icons
		toolbarIcon(): string {
			return this.data.toolbar.icon.mdi;
		},

		// Conditional
		showDialog: {
			get(): boolean {
				return this.data.showDialog;
			},
			set(newValue: boolean): void {
				this.data.showDialog = newValue;
			},
		},
		toolbarIconShowTooltip: {
			get(): boolean {
				return this.data.toolbar.icon.showTooltip;
			},
			set(newValue: boolean): void {
				this.data.toolbar.icon.showTooltip = newValue;
			},
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
