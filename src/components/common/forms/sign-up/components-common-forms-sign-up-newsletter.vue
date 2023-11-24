<template>
	<v-container fluid id="sign_up_newsletter_form">
		<!-- Form -->
		<v-form class="d-flex flex-row flex-wrap text-inverted">
			<!-- Message -->
			<v-col cols="12">
				<p>Required fields are marked with *</p>
			</v-col>

			<!-- First name & Last name -->
			<v-col cols="12" lg="6" xl="6" xxl="6">
				<v-row dense>
					<!-- First name -->
					<v-col cols="12" md="6" lg="6" xl="6" xxl="6">
						<v-text-field
							clearable
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
					<v-col cols="12" md="6" lg="6" xl="6" xxl="6">
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
				</v-row>
			</v-col>

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
				<i
					>By clicking SUBMIT you are agreeing to recieve communication from TPW via email and/or telephone. We do not store your
					personal information.</i
				>
			</v-col>
		</v-form>
	</v-container>
</template>

<script lang="ts">
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
