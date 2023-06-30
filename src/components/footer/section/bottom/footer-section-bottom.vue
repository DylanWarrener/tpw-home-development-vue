<template>
	<v-row no-gutters>
		<v-col>
			<p class="text-center">&copy; {{ new Date().getFullYear() }} TPW Home Developments</p>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "footer-section-bottom-component",
});
</script>
