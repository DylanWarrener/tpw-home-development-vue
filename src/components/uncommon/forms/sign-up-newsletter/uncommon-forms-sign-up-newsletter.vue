<template>
	<common-forms-component :msg-info="msgInfo" :msg-terms-and-conditions="msgTermsAndConditions">
		<template #form-content>
			<common-forms-sign-up-newsletter-component :data="formsSignUpNewsletterData"></common-forms-sign-up-newsletter-component>
		</template>
	</common-forms-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";

// Components
import CommonForms from "@components/common/forms/common-forms.vue";
import CommonFormsSignUpNewsletter from "@components/common/forms/sign-up/newsletter/common-forms-sign-up-newsletter.vue";

// Interfaces
import { ICommonFormsSignUpNewsletterData } from "@declaration/common/interfaces/interface-common";

export default defineComponent({
	name: "sign-up-newsletter-form-component",
	components: {
		"common-forms-component": CommonForms,
		"common-forms-sign-up-newsletter-component": CommonFormsSignUpNewsletter,
	},
	props: {
		msgInfo: { type: String, required: true },
		msgTermsAndConditions: { type: String, required: true },
	},
	computed: {
		formsSignUpNewsletterData(): ICommonFormsSignUpNewsletterData {
			return this.storeCommon.getFormsData.signUp.newsletter;
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
});
</script>
