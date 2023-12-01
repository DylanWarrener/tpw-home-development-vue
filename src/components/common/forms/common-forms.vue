<template>
	<v-container fluid class="forms">
		<!-- Form -->
		<v-form class="d-flex flex-row flex-wrap text-inverted">
			<!-- Message -->
			<v-col cols="12">
				<p>{{ msgInfo }}</p>
			</v-col>

			<!-- All input fields -->
			<v-col cols="12">
				<v-row dense>
					<slot name="form-content"></slot>
				</v-row>
			</v-col>

			<!-- Terms message -->
			<v-col cols="12">
				<i>{{ msgTermsAndConditions }}</i>
			</v-col>
		</v-form>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "@plugins/pinia/pinia";

// Interfaces
import { ICommonFormsData } from "@interfaces/common/interfaces-common";

export default defineComponent({
	name: "common-forms-component",
	props: {
		msgTermsAndConditions: { type: String, required: false },
	},
	computed: {
		// Text
		msgInfo(): string {
			return this.data.msgInfo[0].toUpperCase() + this.data.msgInfo.slice(1) + " " + this.asterisks;
		},

		// Data
		data(): ICommonFormsData {
			return this.storeCommon.getFormsData;
		},

		// Utility
		asterisks(): string {
			return this.storeCommon.getAsterisk;
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>

<style lang="scss">
.forms {
	.v-col {
		.v-input {
			.v-input__control {
				.v-field {
					// For the title dropdown
					.v-field__field {
						.v-field__input {
							.v-select__selection {
								color: rgb(var(--v-theme-inverted));
							}
						}
					}

					// For title dropdown
					.v-field__outline {
						.v-field-label {
							color: rgb(var(--v-theme-inverted));
						}
					}
				}
			}
		}
	}
}

.forms_dropdown {
	.v-field__prepend-inner {
		cursor: pointer;

		.v-icon {
			cursor: pointer;
		}
	}
}

.forms_input {
	.v-field__prepend-inner {
		cursor: text;

		.v-icon {
			cursor: text;
		}
	}
}
</style>
