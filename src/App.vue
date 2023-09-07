<template>
	<v-layout class="d-flex flex-column">
		<header-component></header-component>
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-component></footer-component>
	</v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "@plugins/pinia/pinia";

// Components
import Header from "@components/header/header.vue";
import Footer from "@components/footer/footer.vue";

export default defineComponent({
	name: "app-component",
	components: {
		"header-component": Header,
		"footer-component": Footer,
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>

<style lang="scss">
*,
.v-card-title {
	font-family: Arial, "Roboto", "Lato", sans-serif !important;
}

.border {
	border: 2px solid blue;
}

// Buttons
.v-btn {
	background: transparent;
	color: rgb(var(--v-theme-default));

	&:hover {
		background: rgb(var(--v-theme-accent));
		color: rgb(var(--v-theme-inverted));
	}
}

/*
#prev,
#next {
	background: rgb(var(--v-theme-inverted));
	color: rgb(var(--v-theme-default));

	&:hover {
		background: rgb(var(--v-theme-accent));
		color: rgb(var(--v-theme-inverted));
	}
}
*/

// Lists
.v-list-item {
	color: rgb(var(--v-theme-default));
	background: transparent;

	&:hover {
		color: rgb(var(--v-theme-inverted));
		background: rgb(var(--v-theme-accent));
	}
}
.v-list-item--active {
	color: rgb(var(--v-theme-accent));
	background: rgb(var(--v-theme-inverted));
}

// Dropdown
.v-select {
	background: transparent;
	color: rgb(var(--v-theme-default));
}

// Carousel
.v-carousel__controls {
	.v-btn {
		&:hover {
			background-color: transparent;

			i {
				color: rgb(var(--v-theme-accent));
			}
		}

		#prev {
			background-color: red;
		}
	}

	.v-btn--active {
		background-color: rgb(var(--v-theme-accent));
	}

	i {
		color: rgb(var(--v-theme-inverted));
	}
}

// Window
.v-window__controls {
	.v-window__left,
	.v-window__right {
		background-color: rgb(var(--v-theme-inverted));

		&:hover {
			background-color: rgb(var(--v-theme-accent));
		}
	}
}
</style>
