<template>
	<div class="d-flex flex-row sticky-row">
		<!-- Slide title -->
		<div class="flex-0-1 sticky-column">
			<div class="sticky-column-height">
				<div class="sticky-container">
					<slot name="title">
						<h3 class="text-uppercase text-vertical">{{ title }}</h3>
					</slot>
				</div>
			</div>
		</div>

		<!-- Slide content -->
		<div class="d-flex flex-row flex-1-0">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "slide-component",
	props: {
		title: { type: String, required: false },
	},
});
</script>

<style scoped>
.sticky-row {
	border: 2px solid black;
	min-height: 2000px;
}

.sticky-column {
	border: 2px solid blue;
	position: relative;
	min-width: 50px;
	padding-right: 100px;
}

.sticky-column-height {
	border: 2px solid orange;
	position: absolute;
	top: 0;
	left: 0;
	height: 95%;
	width: 100%;
}

.sticky-container {
	border: 2px solid black;
	position: sticky;
	top: 0;
	left: 0;
	padding-top: 100px;
}

.text-vertical {
	border: 2px solid green;
	position: sticky;
	top: 0;
	left: 0;
	transform-origin: top right;
	transform: translate(-50%, 0) rotate(-90deg);
}
</style>
