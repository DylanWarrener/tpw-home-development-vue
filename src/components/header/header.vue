<template>
	<!--<v-system-bar color="blue"></v-system-bar>-->
	<v-app-bar prominent color="primary" scroll-behavior="hide" :height="height">
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
		title(): string {
			const txtHome: string = this.$t("header.appBar.text.home");
			const txtKitchen: string = this.$t("header.appBar.text.kitchen");
			const txtBathroom: string = this.$t("header.appBar.text.bathroom");
			const txtNewbuild: string = this.$t("header.appBar.text.newbuild");
			const txtExtension: string = this.$t("header.appBar.text.extension");
			const txtRefurbishment: string = this.$t("header.appBar.text.refurbishment");
			const txtContact: string = this.$t("header.appBar.text.contact");
			const txtAbout: string = this.$t("header.appBar.text.about");
			let retVal: string = "";
			switch (this.$route.name) {
				case txtHome:
					retVal = txtHome;
					break;
				case txtKitchen:
					retVal = txtKitchen;
					break;
				case txtBathroom:
					retVal = txtBathroom;
					break;
				case txtNewbuild:
					retVal = txtNewbuild;
					break;
				case txtExtension:
					retVal = txtExtension;
					break;
				case txtRefurbishment:
					retVal = txtRefurbishment;
					break;
				case txtContact:
					retVal = txtContact;
					break;
				case txtAbout:
					retVal = txtAbout;
					break;
			}
			return retVal;
		},

		// Style
		height: {
			get(): number {
				return this.storeCommon.getAppBarHeight;
			}, 
			set(newValue: number): void{
				this.storeCommon.setAppBarHeight(newValue);
			}
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
