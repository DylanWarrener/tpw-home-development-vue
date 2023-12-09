<template></template>

<script lang="ts">
/* The HTML
<v-row style="border: 2px solid green">
		<v-col cols="12" style="border: 2px solid blue">
			<h4>{{ section.title }}</h4>
		</v-col>
		<v-col cols="12" style="border: 2px solid blue">
			<v-row style="border: 2px solid green">
				<template :key="index" v-for="(articles, index) in section.articles">
					<news-articles-component :articles="articles"></news-articles-component>
					<!-- <v-col style="border: 2px solid blue" v-else>
						<div>This shows because there are no articles for this section</div>
					</v-col> -->
				</template>
			</v-row>
		</v-col>
	</v-row>
	*/
import { defineComponent } from "vue";

// Components
//import NewsArticles from "@components/containers/news/articles/news-articles.vue";

// Interfaces
//import INewsSectionsState from "@interfaces/news/sections/interface-news-sections";

export default defineComponent({
	name: "news-by-section-component",
	components: {
		//"news-articles-component": NewsArticles,
	},
	props: {
		//section: { type: Object as () => INewsSectionsState, required: true },
	},
});
</script>
