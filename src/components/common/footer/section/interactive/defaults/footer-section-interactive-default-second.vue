<template>
	<div class="d-flex flex-column h-100" style="flex: 1 0 auto">
		<v-row no-gutters class="mb-4" style="flex: 0 1 auto">
			<h3 class="text-default border-bottom">Contact Us</h3>
		</v-row>
		<div>
			<v-row no-gutters style="flex: 0 1 auto">
				<v-col>
					<h5 class="py-2 text-default">Address</h5>
					<i class="pl-4">Address here</i>
				</v-col>
			</v-row>
			<v-row no-gutters style="flex: 0 1 auto">
				<v-col>
					<h5 class="py-2 text-default">Number</h5>
				</v-col>
			</v-row>
			<v-row no-gutters style="flex: 0 1 auto">
				<v-col>
					<h5 class="py-2 text-default">Email</h5>
				</v-col>
			</v-row>
			<v-row no-gutters style="flex: 0 1 auto">
				<v-col>
					<h5 class="py-2 text-default">Follow Us</h5>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "footer-section-interactive-default-second-component"
});
</script>
