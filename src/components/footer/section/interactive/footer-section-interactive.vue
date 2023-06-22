<template>
	<v-row no-gutters>
		<v-col cols="12">
			<v-row no-gutters>
				<v-col cols="2">
					<h3 class="text-default border-bottom">Logo here</h3>
				</v-col>
				<v-col cols="6">
					<h3 class="text-default border-bottom">Navigation</h3>
				</v-col>
				<v-col>
					<h3 class="text-default border-bottom">Get in Touch</h3>
				</v-col>
			</v-row>
		</v-col>

		<v-col cols="12">
			<v-row no-gutters>
				<!-- Col 1 -->
				<v-col class="pl-4" cols="2">
					<p class="pb-4"><i>Some text that display information about TPW Home Developments.</i></p>
					<div style="max-width: 300px">
						<v-text-field
							clearable
							label="Email address"
							placeholder="person@gmail.com"
							variant="underlined"
						></v-text-field>
						<v-btn class="w-100">Subscribe</v-btn>
					</div>
				</v-col>

				<!-- Col 2 -->
				<v-col class="pl-4" cols="6">
					<v-row no-gutters>
						<v-col>
							<h5 class="text-default">Pages</h5>
							<v-list
								density="compact"
								base-color="default"
								active-color="accent"
								bg-color="primary"
								:items="pageItems"
							></v-list>
						</v-col>
						<v-col>
							<h5 class="text-default">Information</h5>
							<v-list
								class="bg-primary"
								density="compact"
								active-color="accent"
								:items="informationItems"
							></v-list>
						</v-col>
					</v-row>
				</v-col>

				<!-- Col 3 -->
				<v-col class="pl-4">
					<v-row no-gutters>
						<v-col class="d-flex" cols="2">
							<v-icon icon="mdi-email-fast"></v-icon>
						</v-col>
						<v-col>
							<p>41 Snowley Park, Whittlesey</p>
							<p>Peterborough</p>
							<p>PE7 1JQ</p>
						</v-col>
					</v-row>
					<v-divider class="my-4" style="max-width: 50%"></v-divider>
					<v-row no-gutters>
						<v-col class="d-flex" cols="2">
							<v-icon icon="mdi-map-marker-radius"></v-icon>
						</v-col>
						<v-col>
							<p>username@gmail.com</p>
						</v-col>
					</v-row>
					<v-divider class="my-4" style="max-width: 50%"></v-divider>
					<v-row no-gutters>
						<v-col class="d-flex" cols="2">
							<v-icon icon="mdi-phone"></v-icon>
						</v-col>
						<v-col>
							<p>07464 599 396</p>
						</v-col>
					</v-row>
					<v-divider class="my-4" style="max-width: 50%"></v-divider>
					<v-row no-gutters>
						<v-col class="d-flex align-center" cols="2">
							<h5 class="text-default">Follow us:</h5>
						</v-col>
						<v-col>
							<v-row no-gutters style="gap: 16px">
								<v-btn icon="mdi-home" density="comfortable"></v-btn>
								<v-btn icon="mdi-home" density="comfortable"></v-btn>
								<v-btn icon="mdi-home" density="comfortable"></v-btn>
							</v-row>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Component
import FooterSectionInteractiveDefaultFirst from "../interactive/defaults/footer-section-interactive-default-first.vue";
import FooterSectionInteractiveDefaultSecond from "../interactive/defaults/footer-section-interactive-default-second.vue";
import FooterSectionInteractiveDefaultThird from "../interactive/defaults/footer-section-interactive-default-third.vue";
import Button from "../../../containers/buttons/button.vue";

// Icons
import Facebook from "../../../../assets/svg/socials/facebook.svg";
import Instagram from "../../../../assets/svg/socials/instagram.svg";
import LinkedIn from "../../../../assets/svg/socials/linkedin.svg";
import Twitter from "../../../../assets/svg/socials/twitter.svg";

export default defineComponent({
	name: "footer-section-interactive-component",
	components: {
		"footer-section-interactive-default-first-component": FooterSectionInteractiveDefaultFirst,
		"footer-section-interactive-default-second-component": FooterSectionInteractiveDefaultSecond,
		"footer-section-interactive-default-third-component": FooterSectionInteractiveDefaultThird,
		"button-component": Button,
	},
	data() {
		return {
			pageItems: [
				{
					title: "Kitchens",
					value: 1,
				},
				{
					title: "Bathrooms",
					value: 2,
				},
				{
					title: "Newbuilds",
					value: 3,
				},
				{
					title: "Extensions",
					value: 4,
				},
				{
					title: "Refurbishments",
					value: 5,
				},
			],
			informationItems: [
				{
					title: "Home",
					value: 1,
				},
				{
					title: "About",
					value: 2,
				},
				{
					title: "Contact",
					value: 3,
				},
			],
		};
	},
});
</script>

<style lang="scss">
.border-bottom {
	position: relative;
	margin-bottom: 16px;
	padding-bottom: 16px;

	&::after {
		position: absolute;
		bottom: 0;
		left: 0;
		content: "";
		background: rgb(var(--v-theme-accent));
		display: block;
		width: 100px;
		height: 2px;
	}
}

.border-right {
	position: relative;

	&::after {
		position: absolute;
		top: 50%;
		right: 0;
		content: "";
		background: white;
		display: block;
		width: 2px;
		height: 100%;
		transform: translateY(-50%);
	}
}

.row {
	max-width: initial;
	width: 100%;
	flex: 1 1 auto !important;
}

.container.fill-height {
	flex-direction: column !important;
	align-items: initial !important;
}
</style>
