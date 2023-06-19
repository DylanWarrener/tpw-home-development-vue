<template>
	<v-container fluid>
		<v-row dense class="d-flex flex-column">
			<v-col cols="12" align="center">
				<slot name="title">
					<h1>{{ title }}</h1>
				</slot>
			</v-col>
			<v-col cols="12" align="center">
				<slot name="subtitle">
					<i>{{ subtitle }}</i>
				</slot>
			</v-col>
			<v-col cols="12" align="center">
				<slot name="content"></slot>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "section-content-component",
	props: {
		title: { type: String, required: false },
		subtitle: { type: String, required: false },
	},
});
</script>
