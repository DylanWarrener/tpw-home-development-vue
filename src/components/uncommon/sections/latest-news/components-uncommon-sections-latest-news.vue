<template>
	<section-component class="bg-white" :title="sectionTitle" :subtitle="sectionSubtitle">
		<template #content>
			<v-container fluid style="border: 2px solid red">
				<v-row style="border: 2px solid green">
					<!--<v-col cols="12" style="border: 2px solid blue" :key="index" v-for="(section, index) in newsSections">
						<news-by-section-component :section="section"></news-by-section-component>
					</v-col>-->
				</v-row>
			</v-container>
		</template>
	</section-component>
</template>

<script lang="ts">
/*
newsSections: [
	{
		title: "Kitchens",
		articles: [
			{
				img: {
					src: "",
					btnText: ""
				},
				article: {
					type: "kitchens"
					title: "kitchens",
					message: "",
					date: ""
				}
			}
		]
	}
]
*/
import { defineComponent } from "vue";

// Stores
import { parentStore, childStores } from "@plugins/pinia/pinia";

// Components
import Section from "@components/common/sections/common-sections.vue";
//import NewsBySection from "@components/containers/news/news-by-section.vue";

// Interfaces
//import INewsSectionsState from "@interfaces/news/sections/interface-news-sections";

export default defineComponent({
	name: "news-component",
	components: {
		"section-component": Section,
		//"news-by-section-component": NewsBySection,
	},
	computed: {
		// Text
		sectionTitle(): string {
			return this.$t("$vuetify.common.sections.latestNews.title");
		},
		sectionSubtitle(): string {
			return this.$t("$vuetify.common.sections.latestNews.subtitle");
		},

		// Data
		/*newsSections(): INewsSectionsState[] {
			return this.storeNews.getNewsSectionsState;
		},
		*/
	},
	setup() {
		const storeCommon = parentStore();
		const storeNews = childStores.useNewsStore();
		return { storeCommon, storeNews };
	},
});
</script>
