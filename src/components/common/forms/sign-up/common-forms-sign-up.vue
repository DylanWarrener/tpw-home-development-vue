<template>
	<!-- Title -->
	<v-col cols="12">
		<common-dropdown-component
			class="forms_dropdown"
			:prepend-inner-icon="titleIcon"
			:label="data.signUp.title.label"
			:items="data.signUp.title.titles"
		></common-dropdown-component>
	</v-col>

	<!-- First name, Last name & Address -->
	<common-forms-sign-up-newsletter></common-forms-sign-up-newsletter>

	<!-- Password -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			type="password"
			:prepend-inner-icon="passwordIcon"
			:label="data.signUp.password.label"
			:placeholder="data.signUp.password.placeholder"
		></common-text-field-component>
	</v-col>

	<!-- Repeat password -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			type="password"
			:prepend-inner-icon="passwordIcon"
			:label="data.signUp.password.repeat.label"
			:placeholder="data.signUp.password.repeat.placeholder"
		></common-text-field-component>
	</v-col>

	<!-- Date of birth -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			:prepend-inner-icon="dobIcon"
			:label="data.signUp.dateOfBirth.label"
			:placeholder="data.signUp.dateOfBirth.placeholder"
		></common-text-field-component>
	</v-col>

	<!-- Telephone -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			:prepend-inner-icon="telephoneIcon"
			:label="data.signUp.telephone.label"
			:placeholder="data.signUp.telephone.placeholder"
		></common-text-field-component>
	</v-col>

	<!-- Address -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			:prepend-inner-icon="addressIcon"
			:label="data.signUp.address.label"
			:placeholder="data.signUp.address.placeholder"
		></common-text-field-component>
	</v-col>

	<!-- Postcode -->
	<v-col>
		<common-text-field-component
			class="forms_input"
			color="inverted"
			:prepend-inner-icon="postcodeIcon"
			:label="data.signUp.postcode.label"
			:placeholder="data.signUp.postcode.placeholder"
		></common-text-field-component>
	</v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";

// Components
import CommonDropdown from "@components/common/dropdown/common-dropdown.vue";
import CommonTextField from "@components/common/text-field/common-text-field.vue";
import CommonFormsSignUp from "@components/common/forms/sign-up/newsletter/common-forms-sign-up-newsletter.vue";

// Interfaces
import { ICommonFormsData } from "@interfaces/common/interfaces-common";

export default defineComponent({
	name: "sign-up-form-component",
	components: {
		"common-dropdown-component": CommonDropdown,
		"common-text-field-component": CommonTextField,
		"common-forms-sign-up-newsletter": CommonFormsSignUp,
	},
	props: {
		// Title properties
		titleIcon: { type: String, required: false, default: "mdi-format-title" },

		// Password properties
		passwordIcon: { type: String, required: false, default: "mdi-lock" },

		// Date of birth properties
		dobIcon: { type: String, required: false, default: "mdi-calendar-range" },

		// Telephone properties
		telephoneIcon: { type: String, required: false, default: "mdi-phone" },

		// Address properties
		addressIcon: { type: String, required: false, default: "mdi-home" },

		// Postcode properties
		postcodeIcon: { type: String, required: false, default: "mdi-map-marker" },
	},
	computed: {
		// Forms data
		data(): ICommonFormsData {
			return this.storeCommon.getFormsData;
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
});
</script>
