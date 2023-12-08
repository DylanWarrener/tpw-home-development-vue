<template>
	<v-navigation-drawer temporary location="top" v-model="drawer">
		<v-list nav>
			<v-list-item :prepend-icon="item.icon" :title="item.title.toUpperCase()" :to="item.link" :key="index" v-for="(item, index) in navigation">
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import useHeaderStore from "@stores/header/stores-header";

// Interface
import IHeaderNavigation from "@interfaces/common/header/navigation/interfaces-common-header-navigation";

export default defineComponent({
	name: "navigation-component",
	props: {
		navigation: { type: Array<IHeaderNavigation>, required: true },
	},
	computed: {
		// Read & Write
		drawer: {
			get(): boolean {
				return this.storeHeader.getDrawer;
			},
			set(newValue: boolean) {
				this.storeHeader.setDrawer(newValue);
			},
		},
	},
	setup() {
		const storeHeader = useHeaderStore();
		return { storeHeader };
	},
});
</script>
@src/stores/header/store-header
