<template>
	<v-col id="contact_info" class="pa-8 d-flex flex-column">
		<v-row style="gap: 16px">
			<v-col cols="12">
				<p class="text-left">{{ infoState.message }}</p>
			</v-col>
			<v-col cols="12" class="d-flex" :key="index" v-for="(item, index) in infoState.icons">
				<v-row>
					<v-col cols="4" class="d-flex justify-center align-center">
						<div class="contact_info-icon_circle d-flex justify-center align-center">
							<v-icon>{{ item.icon }}</v-icon>
						</div>
					</v-col>
					<v-col cols="8">
						<v-row>
							<v-col cols="12">
								<h4 class="text-left">{{ item.title }}</h4>
							</v-col>
							<v-col cols="12">
								<p class="text-wrap text-left">{{ item.info }}</p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Interfaces
import { IContactInfoState } from "@interfaces/contact/interface-contact";

export default defineComponent({
	name: "contact-info-component",
	props: {
		infoState: { type: Object as () => IContactInfoState, required: true },
	},
});
</script>

<style lang="scss">
#contact_info {
	gap: 16px;

	.contact_info-icon_circle {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: rgb(var(--v-theme-accent));

		.v-icon {
			background-color: rgb(var(--v-theme-accent));
			font-size: 40px;
			color: rgb(var(--v-theme-inverted));
		}
	}
}
</style>
