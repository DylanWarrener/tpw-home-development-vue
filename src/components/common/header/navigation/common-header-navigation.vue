<template>
	<navigation-component :navigation="navigation"></navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import useHeaderStore from "@stores/header/store-header";

// Components
import Nav from "@components/common/navigation/common-navigation.vue";

// Interfaces
import { IHeaderNavigationData } from "@declaration/common/interfaces/header/interface-common-header";

export default defineComponent({
	name: "header-navigation-component",
	components: {
		"navigation-component": Nav,
	},
	computed: {
		navigation(): IHeaderNavigationData[] {
			return this.storeHeader.getNavigationItems;
		},
	},
	setup() {
		const storeHeader = useHeaderStore();
		return { storeHeader };
	},
});
</script>
