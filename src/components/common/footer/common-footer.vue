<template>
	<v-container fluid class="bg-inverted container">
		<v-row no-gutters>
			<!-- Logo stuff -->
			<v-col class="pa-4 d-flex flex-column justify-space-between align-center">
				<svg-component
					width="100%"
					height="100px"
					:svg-content="dataFooter.logo.src"
					@svg-clicked="internalNavigate(txtPageHome)"
				></svg-component>
				<p>{{ dataFooter.message }}</p>
				<div class="w-75">
					<v-text-field
						clearable
						:label="dataFooter.input.label"
						:placeholder="dataFooter.input.placeholder"
						variant="underlined"
					></v-text-field>
					<v-btn class="w-100" variant="outlined">{{ dataFooter.btnText }}</v-btn>
				</div>
			</v-col>

			<v-divider vertical></v-divider>

			<!-- Navigation stuff -->
			<v-col class="pa-4" cols="5">
				<v-row no-gutters class="h-100">
					<v-col>
						<h4 class="text-center">{{ dataFooter.navigation.service.title }}</h4>
						<v-list density="compact" :items="dataFooter.navigation.service.items"></v-list>
					</v-col>
					<v-col>
						<h4 class="text-center">{{ dataFooter.navigation.info.title }}</h4>
						<v-list density="compact" :items="dataFooter.navigation.info.items"></v-list>
					</v-col>
				</v-row>
			</v-col>

			<v-divider vertical></v-divider>

			<!-- Get in touch stuff -->
			<v-col class="pa-4">
				<h4 class="pb-2 text-center">{{ dataFooter.socials.title }}</h4>
				<!-- Address -->
				<v-row no-gutters>
					<v-col class="d-flex justify-center align-center" cols="2">
						<v-icon icon="mdi-map-marker-radius"></v-icon>
					</v-col>
					<v-col>
						<p class="text-capitalize">{{ dataFooter.contact.addressLine1 }}</p>
						<p class="text-capitalize">{{ dataFooter.contact.addressLine2 }}</p>
						<p class="text-uppercase">{{ dataFooter.contact.addressLine3 }}</p>
					</v-col>
				</v-row>

				<v-divider class="my-4"></v-divider>

				<!-- Email -->
				<v-row no-gutters>
					<v-col class="d-flex justify-center align-center" cols="2">
						<v-icon icon="mdi-email-fast"></v-icon>
					</v-col>
					<v-col>
						<p>{{ dataFooter.contact.email }}</p>
					</v-col>
				</v-row>

				<v-divider class="my-4"></v-divider>

				<!-- Mobile -->
				<v-row no-gutters>
					<v-col class="d-flex justify-center align-center" cols="2">
						<v-icon icon="mdi-phone"></v-icon>
					</v-col>
					<v-col>
						<p>{{ dataFooter.contact.number }}</p>
					</v-col>
				</v-row>

				<v-divider class="my-4"></v-divider>

				<!-- Socials -->
				<v-row no-gutters>
					<p class="py-4 w-100 text-center">{{ dataFooter.socials.socialTitle }}</p>
					<v-col class="d-flex justify-space-evenly">
						<template v-for="social in dataFooter.socials.items">
							<v-btn icon variant="flat" density="comfortable" @click="externalNavigate(social.link)">
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

		<v-row no-gutters>
			<v-col>
				<p class="text-center">&copy; {{ new Date().getFullYear() }} {{ dataFooter.copyright.title }}</p>
				<p class="text-center">{{ dataFooter.copyright.location }}</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { useCommonStore } from "@plugins/pinia/pinia";
import useFooterStore from "@stores/footer/store-footer";
import useGlobalEventStore from "@stores/events/store-events";

// Components
import SVG from "@components/common/svg/common-svg.vue";

// Interfaces
import { IFooterData, IFooterStateData } from "@declaration/common/interfaces/footer/interface-common-footer";

// Utils
import { pageInfoNames } from "@constants/common/objects/constants-common-utils-objects";

export default defineComponent({
	name: "footer-component",
	components: {
		"svg-component": SVG,
	},
	data(): IFooterData {
		return {};
	},
	computed: {
		// Text
		txtPageHome(): string {
			return pageInfoNames.home;
		},

		// Data
		dataFooter(): IFooterStateData {
			return this.storeFooter.getFooterData;
		},
	},
	methods: {
		// Utils
		internalNavigate(routeName: string): void {
			this.$router.push(routeName);
		},
		externalNavigate(url: string): void {
			window.open(url, "_blank");
		},
	},
	setup() {
		const storeCommon = useCommonStore();
		const storeFooter = useFooterStore();
		const storeEvent = useGlobalEventStore();
		return { storeCommon, storeFooter, storeEvent };
	},
});
</script>
