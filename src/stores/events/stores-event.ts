import { defineStore } from "pinia";

import IEventState from "@interfaces/event/interface-event";

const useGlobalEventStore = defineStore("event-store", {
    state: (): IEventState => ({
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
