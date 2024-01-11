<template>
	<v-layout ref="app" style="width: 100vw; border: 4px solid black">
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
import { useCommonStore } from "@plugins/pinia/pinia";

// Components
import Header from "@components/common/header/common-header.vue";
import Footer from "@components/common/footer/common-footer.vue";

// Interfaces
import { ICommonData } from "@declaration/common/interfaces/interface-common";

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
		const storeCommon = useCommonStore();
		return { storeCommon };
	},
	created(): void {
		/* Set inital localisation data in store */
		//// Sections
		// Be-inspired
		this.storeCommon.setDropdownOptions();
		this.storeCommon.setAvailableKitchenStyles();
		this.storeCommon.setAvailableBathroomStyles();
		this.storeCommon.setAvailableNewbuildStyles();
		this.storeCommon.setAvailableExtensionStyles();
		this.storeCommon.setAvailableRefurbishmentStyles();

		//// Forms
		this.storeCommon.setFormsData();
	},
});
</script>
