<template>
	<div>
		<v-row no-gutters class="mb-4" style="flex: 0 1 auto">
			<h3 class="text-default border-bottom">Navigation</h3>
		</v-row>
		<div>
			<v-row no-gutters style="flex: 0 1 auto">
				<v-col>
					<h5 class="py-2 text-default">Pages</h5>
					<v-list
						density="compact"
						base-color="default"
						active-color="accent"
						bg-color="primary"
						:items="pageItems"
					></v-list>
				</v-col>
				<v-col>
					<h5 class="py-2 text-default">Information</h5>
					<v-list
						class="bg-primary"
						density="compact"
						active-color="accent"
						:items="informationItems"
					></v-list>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "footer-section-interactive-default-first-component",
	data() {
		return {
			pageItems: [
				{
					title: "Kitchens",
					value: 1,
				},
				{
					title: "Bathrooms",
					value: 2,
				},
				{
					title: "Newbuilds",
					value: 3,
				},
				{
					title: "Extensions",
					value: 4,
				},
				{
					title: "Refurbishments",
					value: 5,
				},
			],
			informationItems: [
				{
					title: "Home",
					value: 1,
				},
				{
					title: "About",
					value: 2,
				},
				{
					title: "Contact",
					value: 3,
				},
			],
		};
	},
});
</script>
