<template>
	<!-- First name -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			:prepend-inner-icon="firstnameIcon"
			:label="data.name.firstname.label"
			:placeholder="data.name.firstname.placeholder"
			:rules="[isNameValid]"
			v-model="data.name.firstname.value"
		></common-text-field-component>
	</v-col>

	<!-- Last name -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			:prepend-inner-icon="lastnameIcon"
			:label="data.name.lastname.label"
			:placeholder="data.name.lastname.placeholder"
			:rules="[isNameValid]"
			v-model="data.name.lastname.value"
		></common-text-field-component>
	</v-col>

	<!-- Email address -->
	<v-col>
		<common-text-field-component
			persistent-hint
			class="forms_input"
			type="email"
			color="inverted"
			:prepend-inner-icon="emailIcon"
			:label="data.email.label"
			:placeholder="data.email.placeholder"
			:rules="[isEmailValid]"
			v-model="data.email.value"
		></common-text-field-component>
	</v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";

// Components
import CommonTextField from "@components/common/text-field/common-text-field.vue";

// Interfaces
import { ICommonFormsSignUpNewsletterData } from "@interfaces/common/interfaces-common";

// Utils
import { isNameValid, isEmailValid } from "@utils/functions/validation/utils-functions-validation";

export default defineComponent({
	name: "sign-up-form-newsletter-component",
	components: {
		"common-text-field-component": CommonTextField,
	},
	props: {
		// Input properties
		data: { type: Object as () => ICommonFormsSignUpNewsletterData, required: true },

		// First name properties
		firstnameIcon: { type: String, required: false, default: "mdi-rename" },

		// Last name properties
		lastnameIcon: { type: String, required: false, default: "mdi-rename" },

		// Email properties
		emailIcon: { type: String, required: false, default: "mdi-email" },
	},
	methods: {
		// Validation
		isNameValid(newValue: string): boolean | string {
			return isNameValid(this.$t, newValue);
		},
		isEmailValid(newValue: string): boolean | string {
			return isEmailValid(this.$t, newValue);
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
});
</script>
