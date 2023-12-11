<template>
	<v-row dense style="border: 2px solid red">
		<!-- Logo -->
		<v-col cols="12" sm="4" md="4" lg="4" xl="4" xxl="4">
			<svg-component height="10rem" :svg-content="data.logo.src" @svg-clicked="internalNavigate(txtPageHome)"></svg-component>
		</v-col>

		<!-- Socials -->
		<v-col cols="12" sm="8" md="8" lg="8" xl="8" xxl="8" class="d-flex justify-space-evenly align-center" style="border: 2px solid blue">
			<p>{{ data.socials.title }}</p>
			<template v-for="social in data.socials.items">
				<v-btn icon variant="flat" @click="externalNavigate(social.link)">
					<v-icon>
						<template #default>
							<svg-component :svg-content="social.icon"></svg-component>
						</template>
					</v-icon>
				</v-btn>
			</template>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import SVG from "@components/common/svg/common-svg.vue";

// Interfaces
import { IFooterStateTopSectionData } from "@declaration/common/interfaces/footer/interface-common-footer";

// Utils
import { pageInfoNames } from "@constants/common/objects/constants-common-utils-objects";

export default defineComponent({
	name: "footer-section-top-component",
	components: {
		"svg-component": SVG,
	},
	props: {
		data: { type: Object as () => IFooterStateTopSectionData, required: true },
	},
	computed: {
		// Text
		txtPageHome(): string {
			return pageInfoNames.home;
		},
	},
	methods: {
		internalNavigate(routeName: string): void {
			this.$router.push(routeName);
		},
		externalNavigate(url: string): void {
			window.open(url, "_blank");
		},
	},
});
</script>
