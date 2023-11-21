<template>
	<v-row dense>
		<v-col cols="2">
			<card-component
				color="primary"
				class=""
				title="title"
				subtitle="subtitle"
				btnText="Button text"
				actionBtnId="changeMe"
			></card-component>
		</v-col>
		<v-col cols="2">
			<card-component
				color="primary"
				class=""
				title="title"
				subtitle="subtitle"
				btnText="Button text"
				actionBtnId="changeMe"
			></card-component>
		</v-col>
		<v-col cols="2">
			<card-component
				color="primary"
				class=""
				title="title"
				subtitle="subtitle"
				btnText="Button text"
				actionBtnId="changeMe"
			></card-component>
		</v-col>
		<v-col cols="2">
			<card-component
				color="primary"
				class=""
				title="title"
				subtitle="subtitle"
				btnText="Button text"
				actionBtnId="changeMe"
			></card-component>
		</v-col>
		<v-col cols="2">
			<card-component
				color="primary"
				class=""
				title="title"
				subtitle="subtitle"
				btnText="Button text"
				actionBtnId="changeMe"
			></card-component>
		</v-col>
		<v-col cols="2">
			<card-component
				color="primary"
				class=""
				title="title"
				subtitle="subtitle"
				btnText="Button text"
				actionBtnId="changeMe"
			></card-component>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Card from "@components/common/cards/common-cards.vue";

export default defineComponent({
	name: "card-style-component",
	components: {
		"card-component": Card,
	},
});
</script>
