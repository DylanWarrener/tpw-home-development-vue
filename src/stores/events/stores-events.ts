import { defineStore } from "pinia";

//import IEventState from "@interfaces/common/event/interfaces-event";

const useGlobalEventStore = defineStore("event-store", {
	state: () => ({
		eventData: "",
	}),
	getters: {
		getEmittedEvent: (state): string => state.eventData,
	},
	actions: {
		setEmittedEvent(data: string): void {
			this.eventData = data;
		},
	},
});

export default useGlobalEventStore;
