<template>
	<!--<v-system-bar color="blue"></v-system-bar>-->
	<v-app-bar prominent color="primary" density="compact" scroll-behavior="hide">
		<template #prepend>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</template>
		<v-app-bar-title>
			{{ title }}
		</v-app-bar-title>
		<template #append>
			<v-btn :icon="icon"></v-btn>
		</template>
	</v-app-bar>
	<header-navigation-component></header-navigation-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "../../plugins/pinia/pinia";

// Components
import HeaderNav from "./navigation/header-navigation.vue";

export default defineComponent({
	name: "header-component",
	components: {
		"header-navigation-component": HeaderNav,
	},
	computed: {
		// Text
		txtHome(): string {
			return this.$t("header.appBar.titles.home");
		},
		txtKitchen(): string {
			return this.$t("header.appBar.titles.kitchen");
		},
		txtBathroom(): string {
			return this.$t("header.appBar.titles.bathroom");
		},
		txtNewbuild(): string {
			return this.$t("header.appBar.titles.newbuild");
		},
		txtExtension(): string {
			return this.$t("header.appBar.titles.extension");
		},
		txtRefurbishment(): string {
			return this.$t("header.appBar.titles.refurbishment");
		},
		txtContact(): string {
			return this.$t("header.appBar.titles.contact");
		},
		txtAbout(): string {
			return this.$t("header.appBar.titles.about");
		},
		title(): string {
			let retVal: string = "";
			switch (this.$route.name) {
				case this.txtHome:
					retVal = this.txtHome;
					break;
				case this.txtKitchen:
					retVal = this.txtKitchen;
					break;
				case this.txtBathroom:
					retVal = this.txtBathroom;
					break;
				case this.txtNewbuild:
					retVal = this.txtNewbuild;
					break;
				case this.txtExtension:
					retVal = this.txtExtension;
					break;
				case this.txtRefurbishment:
					retVal = this.txtRefurbishment;
					break;
				case this.txtContact:
					retVal = this.txtContact;
					break;
				case this.txtAbout:
					retVal = this.txtAbout;
					break;
			}
			return retVal;
		},

		// Icons
		icon(): string {
			return this.$t("header.appBar.icons.verticalDots");
		},

		// Conditional
		drawer: {
			get(): boolean {
				return this.storeCommon.getDrawer;
			},
			set(newValue: boolean): void {
				this.storeCommon.setDrawer(newValue);
			},
		}
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	}
});
</script>
