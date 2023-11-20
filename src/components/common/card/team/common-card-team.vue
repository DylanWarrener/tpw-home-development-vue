<template>
	<div class="cards w-100 h-100">
		<card-component max-width="300px" card-class="bg-accent" :key="employeeIndex" v-for="(employee, employeeIndex) in employees">
			<template #img>
				<v-img cover aspect-ratio="1" class="h-100" :src="employee.picture">
					<div class="employee">
						<h4 class="name" :style="toggleOpacity(employee)" v-if="employee.name">{{ employee.name }}</h4>
						<div class="btn">
							<v-btn variant="flat" :icon="icon" :style="toggleRotate(employee)" @click="emitShowInfo(employeeIndex)"></v-btn>
						</div>
					</div>
				</v-img>
			</template>
			<template #other>
				<div class="info" :style="toggleTransform(employee)">
					<h5 v-if="employee.role">{{ employee.role }}</h5>
					<h6 v-if="employee.info">"{{ employee.info }}"</h6>
					<div class="socials" v-if="employee.socials">
						<template v-for="social in employee.socials">
							<v-btn icon variant="flat" density="comfortable" v-if="social.link" @click="goTo(social.link)">
								<v-icon>
									<svg-component id="svg" :svg-content="social.icon"></svg-component>
								</v-icon>
							</v-btn>
						</template>
					</div>
				</div>
			</template>
		</card-component>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Stores
import { parentStore } from "@plugins/pinia/pinia";

// Components
import SVG from "@components/containers/svg/svg.vue";
import Card from "@components/containers/card/card.vue";

// Interface
import { IAboutEmployeeCard } from "@interfaces/about/interface-about";

export default defineComponent({
	name: "card-our-team-component",
	components: {
		"svg-component": SVG,
		"card-component": Card,
	},
	props: {
		employees: { type: Array<IAboutEmployeeCard>, required: true },
	},
	computed: {
		icon(): string {
			return this.$t("$vuetify.icons.chevronUp");
		},
	},
	methods: {
		// Events
		goTo(link: string): void {
			window.open(link, "_blank");
		},
		emitShowInfo(index: number): void {
			this.$emit("show", index);
		},
		toggleOpacity(employee: IAboutEmployeeCard): string {
			return employee.show ? "opacity: 0;" : "opacity: 1;";
		},
		toggleTransform(employee: IAboutEmployeeCard): string {
			return employee.show ? "transform: translateY(0)" : "transform: translateY(300%)";
		},
		toggleRotate(employee: IAboutEmployeeCard): string {
			return employee.show ? "transform: rotate(180deg)" : "transform: rotate(0)";
		},
	},
	setup() {
		const storeCommon = parentStore();
		return { storeCommon };
	},
});
</script>

<style scoped lang="scss">
.cards {
	display: flex;
	justify-content: center;
	color: rgb(var(--v-theme-inverted));

	.v-card {
		position: relative;
		transition: all 0.3s ease-in-out;

		&:hover {
			transform: translateY(-1rem);
			margin-right: 8px;

			.v-img {
				.employee {
					opacity: 1;
				}
			}

			~ .v-card {
				transform: translateX(10rem);
			}
		}

		&:not(:first-child) {
			margin-left: -$spacing_card_about;
		}

		.v-img {
			padding: 4px;

			.employee {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 16px;
				height: 100%;
				color: rgb(var(--v-theme-inverted));
				opacity: 0;
				transition: all 0.3s ease-in-out;

				.name {
					transition: all 0.3s ease-in-out;
				}

				.btn {
					position: absolute;
					bottom: 0;
					width: 100%;
					padding: 8px;
					background-color: rgba(var(--v-theme-default), 0.7);

					.v-btn {
						border: transparent;
						color: rgb(var(--v-theme-inverted));
						align-self: center;
					}
				}
			}
		}

		.info {
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			height: 80%;
			background-color: rgba(var(--v-theme-default), 0.7);
			color: rgb(var(--v-theme-inverted));
			transition: all 0.3s ease-in-out;
			padding: 16px;

			.socials {
				display: flex;
				justify-content: space-evenly;

				.v-btn {
					.v-icon {
						#svg {
							fill: rgb(var(--v-theme-inverted));
						}
					}
				}
			}
		}
	}
}
</style>
