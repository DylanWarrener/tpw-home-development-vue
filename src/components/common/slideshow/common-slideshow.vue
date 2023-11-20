<template>
	<div class="my-4 d-flex flex-row sticky-row">
		<!-- Slide title -->
		<div class="sticky-column">
			<div class="sticky-column-height">
				<div class="sticky-container">
					<slot name="title">
						<h3 class="text-uppercase text-vertical">
							<b class="pr-4" style="font-size: 30px">{{ slideNumber }}.</b>{{ title }}
						</h3>
					</slot>
				</div>
			</div>
		</div>

		<!-- Slide content -->
		<div
			class="pr-4 d-flex flex-column flex-1-1 justify-space-evenly align-left overflow-hidden"
			style="gap: 16px; padding-left: 25%; border: 2px solid white"
		>
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
		slideNumber: { type: String, required: false },
	},
});
</script>

<style scoped>
.sticky-row {
	border: 2px solid green;
	min-height: 300px;
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
	height: 100%;
	width: 100%;
}

.sticky-container {
	border: 2px solid black;
	position: sticky;
	top: 0;
	left: 0;
	padding-top: 200%;
}

.text-vertical {
	border: 2px solid green;
	position: sticky;
	top: 0;
	left: 0;
	transform-origin: right center;
	transform: translate(0, -100%) rotate(-90deg);
	letter-spacing: 2px;
}
</style>
