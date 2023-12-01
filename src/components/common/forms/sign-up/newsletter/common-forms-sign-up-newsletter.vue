<template>
	<!-- First name -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			:prepend-inner-icon="firstnameIcon"
			:label="data.name.firstname.label"
			:placeholder="data.name.firstname.placeholder"
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
		></common-text-field-component>
	</v-col>

	<!-- Email address -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			type="email"
			color="inverted"
			:prepend-inner-icon="emailIcon"
			:label="data.email.label"
			:placeholder="data.email.placeholder"
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

export default defineComponent({
	name: "sign-up-form-newsletter-component",
	components: {
		"common-text-field-component": CommonTextField,
	},
	props: {
		// First name properties
		firstnameIcon: { type: String, required: false, default: "mdi-rename" },

		// Last name properties
		lastnameIcon: { type: String, required: false, default: "mdi-rename" },

		// Email properties
		emailIcon: { type: String, required: false, default: "mdi-email" },
	},
	computed: {
		// Forms data
		data(): ICommonFormsSignUpNewsletterData {
			return this.storeCommon.getFormsData.signUp.newsletter;
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
});
</script>
