<template>
	<v-row dense class="d-flex" :class="rowPosition">
		<v-col class="d-flex" cols="12" :class="titleColumnPosition">
			<slot name="title">
				<h3 class="border-bottom">{{ title!.toLocaleUpperCase() }}</h3>
			</slot>
		</v-col>
		<v-col class="d-flex pa-4" cols="12" :class="contentColumnPosition">
			<slot name="content"> </slot>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "footer-section-component",
	props: {
		title: { type: String, required: false },
		titleColumnPosition: { type: String, required: false },
		contentColumnPosition: { type: String, required: false },
		rowPosition: { type: String, required: false },
	},
});
</script>
