<template>
	<v-row dense>
		<!-- Contact info -->
		<v-col cols="12" sm="12" md="12" lg="4" xl="4" xxl="4" class="d-flex flex-column" style="border: 4px solid blue">
			<v-container fluid style="border: 4px solid blue">
				<v-row dense style="border: 4px solid green">
					<h4 class="w-100 text-center" style="border: 4px solid red">{{ data.contact.title }}</h4>

					<!-- Address -->
					<v-col cols="12" md="6" lg="12" xl="12" xxl="12" style="border: 4px solid purple">
						<v-row dense style="border: 4px solid orange">
							<v-col cols="3" class="d-flex justify-center align-center">
								<v-icon :icon="data.contact.address.icon"></v-icon>
							</v-col>
							<v-col cols="9" class="d-flex flex-column justify-center">
								<p>{{ data.contact.address.line1 }}</p>
								<p>{{ data.contact.address.line2 }}</p>
								<p>{{ data.contact.address.line3 }}</p>
							</v-col>
						</v-row>
					</v-col>

					<!-- Number & Email -->
					<v-col cols="12" md="6" lg="12" xl="12" xxl="12" style="border: 4px solid black">
						<v-row dense class="d-flex" style="height: 100%; border: 4px solid red">
							<!-- Number -->
							<v-col cols="3" class="d-flex justify-center align-center">
								<v-icon :icon="data.contact.number.icon"></v-icon>
							</v-col>
							<v-col cols="9" class="d-flex flex-column justify-center">
								<p>{{ data.contact.number.value }}</p>
							</v-col>

							<!-- Email -->
							<v-col cols="3" class="d-flex justify-center align-center">
								<v-icon :icon="data.contact.email.icon"></v-icon>
							</v-col>
							<v-col cols="9" class="d-flex flex-column justify-center">
								<p>{{ data.contact.email.value }}</p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</v-col>
		<v-divider vertical v-if="isDisplayLargeAndUp"></v-divider>
		<v-divider v-else></v-divider>

		<!-- Navigation -->
		<template v-for="item in data.navigation">
			<v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4">
				<h4 class="text-center">{{ item.title }}</h4>
				<v-list nav class="d-flex flex-column justify-center align-center" style="border: 2px solid red">
					<v-list-item
						class="pl-8"
						min-width="20rem"
						:title="navItem"
						:key="index"
						v-for="(navItem, index) in item.items"
						style="border: 2px solid blue"
					></v-list-item>
				</v-list>
			</v-col>
			<v-divider vertical v-if="item.divider"></v-divider>
			<v-divider v-else></v-divider>
		</template>
	</v-row>
</template>

<script lang="ts">
/*
<!-- Navigation -->
		<template v-for="item in data.navigation">
			<v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4">
				<h4 class="text-center">{{ item.title }}</h4>
				<v-list nav>
					<v-list-item :title="navItem" :key="index" v-for="(navItem, index) in item.items"></v-list-item>
				</v-list>
			</v-col>
			<v-divider vertical v-if="item.divider"></v-divider>
			<v-divider v-else></v-divider>
		</template>

<!-- Navigation - service pages -->
		<v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4">
			<h4 class="text-center">{{ data.navigation.service.title }}</h4>
			<v-list>
				<v-list-item :title="item" :key="index" v-for="(item, index) in data.navigation.service.items"></v-list-item>
			</v-list>
		</v-col>
		<v-divider vertical></v-divider>

		<!-- Navigation - info pages -->
		<v-col cols="12" sm="6" md="6" lg="4" xl="4" xxl="4">
			<h4 class="text-center">{{ data.navigation.information.title }}</h4>
			<v-list>
				<v-list-item :title="item" :key="index" v-for="(item, index) in data.navigation.information.items"></v-list-item>
			</v-list>
		</v-col>
		<v-divider></v-divider>
*/
import { defineComponent } from "vue";

// Interfaces
import { IFooterStateMiddleSectionData } from "@declaration/common/interfaces/footer/interface-common-footer";

export default defineComponent({
	name: "footer-section-middle-component",
	props: {
		data: { type: Object as () => IFooterStateMiddleSectionData, required: true },
	},
	computed: {
		isDisplayLargeAndUp(): boolean {
			return this.$vuetify.display.lgAndUp;
		},
	},
});
</script>
