<template>
	<v-rating half-increments length="5" item-aria-label="Rating {0} of {1}"></v-rating>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "rating-component",
});
</script>
