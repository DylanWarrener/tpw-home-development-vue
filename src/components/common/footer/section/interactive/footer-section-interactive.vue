<template></template>

<script lang="ts">
/* The HTML
<v-row no-gutters>
		<!-- Logo stuff -->
		<v-col class="pa-4 d-flex flex-column justify-space-between align-center">
			<svg-component
				width="100%"
				height="100px"
				:svg-content="firstColData.src"
				@svg-clicked="navigateTo('logo', linkHome)"
			></svg-component>
			<p>{{ firstColData.message }}</p>
			<div class="w-75">
				<v-text-field
					clearable
					:label="firstColData.input.label"
					:placeholder="firstColData.input.placeholder"
					variant="underlined"
				></v-text-field>
				<v-btn class="w-100" variant="outlined">{{ firstColData.btnText }}</v-btn>
			</div>
		</v-col>

		<v-divider vertical></v-divider>

		<!-- Navigation stuff -->
		<v-col class="pa-4" cols="5">
			<v-row no-gutters class="h-100">
				<v-col>
					<h4 class="text-center">{{ secondColData.pageNavItems.title }}</h4>
					<v-list density="compact" :items="secondColData.pageNavItems.items"></v-list>
				</v-col>
				<v-col>
					<h4 class="text-center">{{ secondColData.infoNavItems.title }}</h4>
					<v-list density="compact" :items="secondColData.infoNavItems.items"></v-list>
				</v-col>
			</v-row>
		</v-col>

		<v-divider vertical></v-divider>

		<!-- Get in touch stuff -->
		<v-col class="pa-4">
			<h4 class="pb-2 text-center">{{ thirdColData.title }}</h4>
			<!-- Address -->
			<v-row no-gutters>
				<v-col class="d-flex justify-center align-center" cols="2">
					<v-icon icon="mdi-map-marker-radius"></v-icon>
				</v-col>
				<v-col>
					<p class="text-capitalize">{{ thirdColData.addressLine1 }}</p>
					<p class="text-capitalize">{{ thirdColData.addressLine2 }}</p>
					<p class="text-uppercase">{{ thirdColData.addressLine3 }}</p>
				</v-col>
			</v-row>

			<v-divider class="my-4"></v-divider>

			<!-- Email -->
			<v-row no-gutters>
				<v-col class="d-flex justify-center align-center" cols="2">
					<v-icon icon="mdi-email-fast"></v-icon>
				</v-col>
				<v-col>
					<p>{{ thirdColData.email }}</p>
				</v-col>
			</v-row>

			<v-divider class="my-4"></v-divider>

			<!-- Mobile -->
			<v-row no-gutters>
				<v-col class="d-flex justify-center align-center" cols="2">
					<v-icon icon="mdi-phone"></v-icon>
				</v-col>
				<v-col>
					<p>{{ thirdColData.number }}</p>
				</v-col>
			</v-row>

			<v-divider class="my-4"></v-divider>

			<!-- Socials -->
			<v-row no-gutters>
				<p class="py-4 w-100 text-center">{{ thirdColData.socialTitle }}</p>
				<v-col class="d-flex justify-space-evenly">
					<template v-for="social in thirdColData.socials">
						<v-btn icon variant="flat" density="comfortable" @click="navigateTo(`${social.name}`, `${social.link}`)">
							<v-icon>
								<template #default>
									<svg-component :svg-content="social.icon"></svg-component>
								</template>
							</v-icon>
						</v-btn>
					</template>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
*/
import { defineComponent } from "vue";

// Component
//import FooterSectionInteractiveDefaultFirst from "@components/footer/section/interactive/defaults/footer-section-interactive-default-first.vue";
//import FooterSectionInteractiveDefaultSecond from "@components/footer/section/interactive/defaults/footer-section-interactive-default-second.vue";
//import FooterSectionInteractiveDefaultThird from "@components/footer/section/interactive/defaults/footer-section-interactive-default-third.vue";
//import SVG from "@components/containers/svg/svg.vue";

// Interfaces
//import { IFooterFirstColData, IFooterSecondColData, IFooterThirdColData } from "@interfaces/footer/interface-footer";

export default defineComponent({
	name: "footer-section-interactive-component",
	components: {
		//"footer-section-interactive-default-first-component": FooterSectionInteractiveDefaultFirst,
		//"footer-section-interactive-default-second-component": FooterSectionInteractiveDefaultSecond,
		//"footer-section-interactive-default-third-component": FooterSectionInteractiveDefaultThird,
		//"svg-component": SVG,
	},
	props: {
		//firstColData: { type: Object as () => IFooterFirstColData, required: true },
		//secondColData: { type: Object as () => IFooterSecondColData, required: true },
		//thirdColData: { type: Object as () => IFooterThirdColData, required: true },
		//message: { type: String, required: false },
	},
	computed: {
		// Names
		nameHome(): string {
			return this.$t("$vuetify.pages.home.name");
		},

		// Links
		linkHome(): string {
			return this.$t("$vuetify.pages.home.link");
		},
	},
	methods: {
		// Events
		navigateTo(name: string, link: string): void {
			name === "logo" ? this.$router.push({ name: this.nameHome }) : window.open(link, "_blank");
		},
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
