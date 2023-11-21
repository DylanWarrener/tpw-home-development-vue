<template>
	<v-layout>
		<header-component></header-component>
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-component></footer-component>
	</v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "@plugins/pinia/pinia";

// Components
import Header from "@components/common/header/common-header.vue";
import Footer from "@components/common/footer/common-footer.vue";

// Interfaces
import { ICommonData } from "@interfaces/common/interfaces-common";

export default defineComponent({
	name: "app-component",
	components: {
		"header-component": Header,
		"footer-component": Footer,
	},
	data(): ICommonData {
		return {};
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
	created(): void {
		//// Body
		this.storeCommon.setDropdownOptions();
		// Sections
		this.storeCommon.setAvailableKitchenStyles();
		this.storeCommon.setAvailableBathroomStyles();
		this.storeCommon.setAvailableNewbuildStyles();
		this.storeCommon.setAvailableExtensionStyles();
		this.storeCommon.setAvailableRefurbishmentStyles();
	},
});
</script>
@src/interfaces/common/interfaces-common @src/interfaces/common/interfaces-common-sections
