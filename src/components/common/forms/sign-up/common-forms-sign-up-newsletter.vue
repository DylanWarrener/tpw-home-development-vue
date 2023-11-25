<template>
	<v-container fluid id="sign_up_newsletter_form">
		<!-- Form -->
		<v-form class="d-flex flex-row flex-wrap text-inverted">
			<!-- Message -->
			<v-col cols="12">
				<p>Required fields are marked with *</p>
			</v-col>

			<!-- All input fields -->
			<v-col cols="12" style="border: 2px solid red">
				<v-row dense style="border: 2px solid green">
					<!-- First name -->
					<v-col cols="12" md="6" lg="6" xl="3" style="border: 2px solid blue">
						<v-text-field
							clearable
							style="min-width: 40ch"
							hide-details="auto"
							variant="outlined"
							type="input"
							label="First name*"
							placeholder="Your first name"
							color="inverted"
							density="comfortable"
							@click:clear=""
						></v-text-field>
					</v-col>

					<!-- Last name -->
					<v-col cols="12" md="6" lg="6" xl="3" style="border: 2px solid blue">
						<v-text-field
							clearable
							hide-details="auto"
							variant="outlined"
							type="input"
							label="Last name*"
							placeholder="Your last name"
							color="inverted"
							density="comfortable"
							@click:clear=""
						></v-text-field>
					</v-col>

					<!-- Email address -->
					<v-col cols="12" md="6" lg="6" xl="3" style="border: 2px solid blue">
						<v-text-field
							clearable
							hide-details="auto"
							variant="outlined"
							type="email"
							label="Email address*"
							placeholder="Your email address"
							color="inverted"
							density="comfortable"
							@click:clear=""
						></v-text-field>
					</v-col>

					<!-- Telephone -->
					<v-col cols="12" md="6" lg="6" xl="3" style="border: 2px solid blue">
						<v-text-field
							clearable
							hide-details="auto"
							variant="outlined"
							type="input"
							label="Telephone"
							placeholder="Your telephone number"
							color="inverted"
							density="comfortable"
							@click:clear=""
						></v-text-field>
					</v-col>

					<!-- Telephone -->
					<v-col cols="12" md="6" lg="6" xl="3" style="border: 2px solid blue">
						<v-text-field
							clearable
							hide-details="auto"
							variant="outlined"
							type="input"
							label="Telephone"
							placeholder="Your telephone number"
							color="inverted"
							density="comfortable"
							@click:clear=""
						></v-text-field>
					</v-col>
				</v-row>
			</v-col>

			<!-- Terms message -->
			<v-col cols="12">
				<i>
					By subscribing to our newsletter, you agree to receive periodic emails from TPW containing information about our latest
					products, services, promotions, and company updates. We respect your privacy and assure you that your email address and
					personal information will be handled securely and in accordance with our privacy policy. You can unsubscribe from our
					newsletters at any time by using the "Unsubscribe" link provided in the emails or by contacting our support team
					directly. Please note that by unsubscribing, you may no longer receive important updates or exclusive offers from TPW.
				</i>
			</v-col>
		</v-form>
	</v-container>
</template>

<script lang="ts">
/*
<!-- Email address & Telephone -->
<v-col cols="12" lg="6" xl="6" xxl="6">
	<v-row dense>
		<!-- Email address -->
		<v-col cols="12" md="6" lg="6" xl="6" xxl="6">
			<v-text-field
				clearable
				hide-details="auto"
				variant="outlined"
				type="email"
				label="Email address*"
				placeholder="Your email address"
				color="inverted"
				density="comfortable"
				@click:clear=""
			></v-text-field>
		</v-col>

		<!-- Telephone -->
		<v-col cols="12" md="6" lg="6" xl="6" xxl="6">
			<v-text-field
				clearable
				hide-details="auto"
				variant="outlined"
				type="input"
				label="Telephone"
				placeholder="Your telephone number"
				color="inverted"
				density="comfortable"
				@click:clear=""
			></v-text-field>
		</v-col>
	</v-row>
</v-col>

<!-- Terms message -->
<v-col cols="12">
	<i>
		By subscribing to our newsletter, you agree to receive periodic emails from TPW containing information about our latest
		products, services, promotions, and company updates. We respect your privacy and assure you that your email address and
		personal information will be handled securely and in accordance with our privacy policy. You can unsubscribe from our
		newsletters at any time by using the "Unsubscribe" link provided in the emails or by contacting our support team
		directly. Please note that by unsubscribing, you may no longer receive important updates or exclusive offers from TPW.
	</i>
</v-col>
*/
import { defineComponent } from "vue";

export default defineComponent({
	name: "sign-up-newsletter-form-component",
});
</script>

<style lang="scss">
#sign_up_newsletter_form {
	.v-field-label {
		color: rgb(var(--v-theme-inverted));
	}
}
</style>
