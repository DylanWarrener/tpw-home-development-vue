<template>
	<p>{{ title }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "section-content-component",
	props: ["title"],
});
</script>
