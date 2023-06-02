<template>
	<v-app-bar>{{ $t("welcome") }}</v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "header-component",
});
</script>
