<template>
	<v-navigation-drawer temporary location="top" v-model="drawer">
		<v-list nav>
			<v-list-item
				:prepend-icon="item.icon"
				:title="item.title"
				:to="item.link"
				:key="index"
				v-for="(item, index) in navigation"
			></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { childStores } from "@plugins/pinia/pinia";

// Interface
import { IHeaderNavigation } from "@interfaces/common/header/navigation/interface-header-navigation";

export default defineComponent({
	name: "navigation-component",
	props: {
		navigation: { type: Object as () => IHeaderNavigation, required: true },
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
		const storeHeader = childStores.useHeaderStore();
		return { storeHeader };
	},
});
</script>
