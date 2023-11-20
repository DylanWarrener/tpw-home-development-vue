<template>
	<v-col style="border: 2px solid blue">
		<card-news-article-component
			:btnText="btnText"
			:type="type"
			:title="title"
			:message="message"
			:date="date"
			:src="src"
		></card-news-article-component>
	</v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CardNewsArticle from "@components/containers/card/card-news-article.vue";

// Interfaces
import { INewsArticlesState } from "@interfaces/news/sections/interface-news-sections";

export default defineComponent({
	name: "news-articles-component",
	components: {
		"card-news-article-component": CardNewsArticle,
	},
	props: {
		articles: { type: Object as () => INewsArticlesState, required: true },
	},
	computed: {
		// Text
		btnText(): string {
			return this.articles.article.img.btnText;
		},
		type(): string {
			return this.articles.article.type;
		},
		title(): string {
			return this.articles.article.title;
		},
		message(): string {
			return this.articles.article.message;
		},
		date(): string {
			return this.articles.article.date;
		},

		// IMGs
		src(): string {
			return this.articles.article.img.src;
		},
	},
});
</script>
