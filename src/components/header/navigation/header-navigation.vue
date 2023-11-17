<template>
	<navigation-component :navigation="navigation"></navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { childStores } from "@plugins/pinia/pinia";

// Components
import Nav from "@components/containers/navigation/navigation.vue";

// Interfaces
import { IHeaderNavigation } from "@interfaces/header/interface-header";

export default defineComponent({
	name: "header-navigation-component",
	components: {
		"navigation-component": Nav,
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
