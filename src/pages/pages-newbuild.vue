<template>
	<v-container fluid class="pa-0">
		<v-row class="ma-0 pa-0">
			<v-col cols="12" class="d-flex pa-0">
				<page-component :src="src"></page-component>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import parentStore, { childStores } from "../store";

// Components
import Page from "../components/containers/page/page-content.vue";

// Images
import NewbuildPNG from "../assets/png/newbuilds/newbuild.jpg";

export default defineComponent({
	name: "newbuild-page-component",
	components: {
		"page-component": Page,
	},
	computed: {
		src(): string {
			return NewbuildPNG;
		},
	},
	setup() {
		const storeCommon = parentStore();
		const storeNewbuild = childStores.useNewbuildStore();
		return { storeCommon, storeNewbuild };
	},
});
</script>
