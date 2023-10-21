<template>
	<v-col id="news_article">
		<v-row class="pa-4" style="border-bottom: 2px solid red" :key="index" v-for="(item, index) in articles">
			<!-- IMGs -->
			<v-col class="pa-0 d-flex" style="border: 2px solid yellow">
				<v-img cover :src="item.img.src">
					<div class="w-100 h-100 d-flex justify-center align-center">
						<v-btn variant="flat">{{ item.img.btnText }}</v-btn>
					</div>
				</v-img>
			</v-col>

			<!-- Article -->
			<v-col style="border: 2px solid yellow">
				<v-row class="text-left">
					<template :key="index" v-for="(article, index) in item.article">
						<v-col
							cols="12"
							:key="index"
							v-html="htmlBuilder(article.tag, article.text, article.colour, article.transform)"
							v-if="article.text"
						></v-col>
					</template>
				</v-row>
			</v-col>
		</v-row>
	</v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Interfaces
import INewsArticlesState from "@interfaces/news/articles/interface-news-articles";

// Utils
import { buildHtmlElement } from "@utils/funtions/utils-functions";

export default defineComponent({
	name: "news-articles-component",
	props: {
		articles: { type: Array<INewsArticlesState>, required: true },
	},
	methods: {
		// HTML builders
		htmlBuilder(tag: string, text?: string, colour?: string, transform?: string): string {
			const styles: string = `${colour ? colour : ""} ${transform ? transform : ""}`;
			return buildHtmlElement(tag, styles, text);
		},
	},
});
</script>

<style lang="scss">
#news_article {
	.v-img {
		.v-btn {
			background-color: rgba(var(--v-theme-accent), 0.7);
			color: rgb(var(--v-theme-inverted));

			&:hover {
				background-color: rgb(var(--v-theme-accent));
			}
		}
	}
}
</style>
@src/interfaces/news/sections/interface-news-articles
