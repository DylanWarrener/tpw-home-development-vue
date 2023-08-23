<template>
	<v-row no-gutters>
		<!-- Logo stuff -->
		<v-col class="pa-4">
			<h3 class="pb-4 text-default text-uppercase text-center">Logo here</h3>
			<p><i>Some text that display information about TPW Home Developments.</i></p>
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
		<v-divider vertical></v-divider>

		<!-- Navigation stuff -->
		<v-col class="pa-4" cols="5">
			<v-row no-gutters>
				<v-col class="">
					<h3 class="text-default text-uppercase text-center">Pages</h3>
					<v-list
						density="compact"
						base-color="default"
						bg-color="primary"
						:items="pageItems"
					></v-list>
				</v-col>
				<v-col class="">
					<h3 class="text-default text-uppercase text-center">Information</h3>
					<v-list class="bg-primary" density="compact" :items="informationItems"></v-list>
				</v-col>
			</v-row>
		</v-col>
		<v-divider vertical></v-divider>

		<!-- Get in touch stuff -->
		<v-col class="pa-4">
			<h3 class="pb-4 text-default text-uppercase text-center">Get in Touch</h3>
			<!-- Address -->
			<v-row no-gutters>
				<v-col class="d-flex justify-center align-center" cols="2">
					<v-icon icon="mdi-map-marker-radius"></v-icon>
				</v-col>
				<v-col>
					<p>41 Snowley Park, Whittlesey</p>
					<p>Peterborough, Cambridgeshire</p>
					<p>PE7 1JQ</p>
				</v-col>
			</v-row>
			<v-divider class="my-4"></v-divider>

			<!-- Email -->
			<v-row no-gutters>
				<v-col class="d-flex justify-center align-center" cols="2">
					<v-icon icon="mdi-email-fast"></v-icon>
				</v-col>
				<v-col>
					<p>somepersonemail@gmail.com</p>
				</v-col>
			</v-row>
			<v-divider class="my-4"></v-divider>

			<!-- Mobile -->
			<v-row no-gutters>
				<v-col class="d-flex justify-center align-center" cols="2">
					<v-icon icon="mdi-phone"></v-icon>
				</v-col>
				<v-col>
					<p>(+44) 07464 599 396</p>
				</v-col>
			</v-row>
			<v-divider class="my-4"></v-divider>

			<!-- Socials -->
			<v-row no-gutters>
				<v-col class="d-flex justify-center align-center" cols="4">
					<p>Follow Us:</p>
				</v-col>
				<v-col class="d-flex flex-row" style="gap: 16px">
					<v-btn icon density="comfortable">
						<v-icon>
							<template #default>
								<svg-component to="/" :svg-content="facebookSvg"></svg-component>
							</template>
						</v-icon>
					</v-btn>
					<v-btn icon density="comfortable">
						<v-icon>
							<template #default>
								<svg-component to="/" :svg-content="facebookSvg"></svg-component>
							</template>
						</v-icon>
					</v-btn>
					<v-btn icon density="comfortable">
						<v-icon>
							<template #default>
								<svg-component to="/" :svg-content="facebookSvg"></svg-component>
							</template>
						</v-icon>
					</v-btn>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script lang="ts">
/*
<v-col cols="12">
			<v-row no-gutters>
				<v-col cols="2">
					<h3 class="text-default border-bottom">Logo here</h3>
				</v-col>
				<v-col>
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
				<v-col class="pa-4" cols="2">
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
				<v-col class="pa-4">
					<v-row no-gutters>
						<v-col>
							<h5 class="text-default">Pages</h5>
							<v-list
								density="compact"
								base-color="default"
								bg-color="primary"
								:items="pageItems"
							></v-list>
						</v-col>
						<v-col>
							<h5 class="text-default">Information</h5>
							<v-list
								class="bg-primary"
								density="compact"
								:items="informationItems"
							></v-list>
						</v-col>
					</v-row>
				</v-col>

				<!-- Col 3 -->
				<v-col class="pa-4">
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
						<v-col class="d-flex align-center" cols="5">
							<h5 class="pr-4 text-default">Follow us:</h5>
						</v-col>
						<v-col>
							<v-btn icon density="comfortable">
								<v-icon>
									<template #default>
										<svg-component :svg-content="facebookSvg"></svg-component>
									</template>
								</v-icon>
							</v-btn>
						</v-col>
						<v-col>
							<v-btn icon density="comfortable">
								<v-icon>
									<template #default>
										<svg-component :svg-content="facebookSvg"></svg-component>
									</template>
								</v-icon>
							</v-btn>
						</v-col>
						<v-col>
							<v-btn icon density="comfortable">
								<v-icon>
									<template #default>
										<svg-component :svg-content="facebookSvg"></svg-component>
									</template>
								</v-icon>
							</v-btn>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-col>
*/
import { defineComponent } from "vue";

// Component
import FooterSectionInteractiveDefaultFirst from "@components/footer/section/interactive/defaults/footer-section-interactive-default-first.vue";
import FooterSectionInteractiveDefaultSecond from "@components/footer/section/interactive/defaults/footer-section-interactive-default-second.vue";
import FooterSectionInteractiveDefaultThird from "@components/footer/section/interactive/defaults/footer-section-interactive-default-third.vue";
import Button from "@components/containers/buttons/button.vue";
import SVG from "@components/containers/svg/svg.vue";
import Facebook from "@assets/svg/socials/facebook.svg?raw";

export default defineComponent({
	name: "footer-section-interactive-component",
	components: {
		"footer-section-interactive-default-first-component": FooterSectionInteractiveDefaultFirst,
		"footer-section-interactive-default-second-component": FooterSectionInteractiveDefaultSecond,
		"footer-section-interactive-default-third-component": FooterSectionInteractiveDefaultThird,
		"button-component": Button,
		"svg-component": SVG,
	},
	computed: {
		facebookSvg() {
			return Facebook;
		},
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
