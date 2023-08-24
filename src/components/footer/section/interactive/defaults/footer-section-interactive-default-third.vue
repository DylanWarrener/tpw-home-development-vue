<template>
	<div class="h-100 d-flex flex-column">
		<v-row no-gutters class="mb-4" style="flex: 0 1 auto">
			<h3 class="text-default border-bottom">Follow Us</h3>
		</v-row>
		<div class="w-100 d-flex flex-column" style="flex: 1 0 auto">
			<v-row no-gutters style="flex: 0 1 auto">
				<v-col class="d-flex justify-center">
					<v-btn class="bg-default text-button" icon="mdi-email-fast" density="comfortable"></v-btn>
				</v-col>
			</v-row>
			<v-divider class="my-4"></v-divider>
			<v-row no-gutters style="flex: 0 1 auto">
				<v-col>
					<h5 class="text-default">Number</h5>
				</v-col>
			</v-row>
			<v-divider class="my-4"></v-divider>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "footer-section-interactive-default-third-component"
});

/*
<div class="d-flex">
    <v-text-field
        clearable
        style="max-width: 250px"
        variant="underlined"
        label="Email address"
        placeholder="name@gmail.com"
    ></v-text-field>
</div>
<button-component style="max-width: 250px" btn-text="Subscribe"></button-component>
*/
</script>
