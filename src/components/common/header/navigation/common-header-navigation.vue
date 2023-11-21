<template>
	<navigation-component :navigation="navigation"></navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { childStores } from "@plugins/pinia/pinia";

// Components
import Nav from "@components/common/navigation/common-navigation.vue";

// Interfaces
import IHeaderNavigationData, { IHeaderNavigation } from "@interfaces/common/header/navigation/interfaces-common-header-navigation";

export default defineComponent({
	name: "header-navigation-component",
	components: {
		"navigation-component": Nav,
	},
	data(): IHeaderNavigationData {
		return {};
	},
	computed: {
		navigation(): IHeaderNavigation {
			return this.storeHeader.getNavigationItems;
		},
	},
	setup() {
		const storeHeader = childStores.useHeaderStore();
		return { storeHeader };
	},
});
</script>
@src/interfaces/common/header/navigation/interfaces-header-navigation
