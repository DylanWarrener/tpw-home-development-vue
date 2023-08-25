<template>
    <v-navigation-drawer temporary location="top" v-model="drawer">
        <v-list nav>
            <v-list-item
                :prepend-icon="item.icon"
                :title="item.title"
                :to="item.link"
                :key="index"
                v-for="(item, index) in navigation"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Store
import { parentStore } from "../../../plugins/pinia/pinia";

// Interface
import { ICommonNavigationItem } from "../../../interfaces/header/navigation/interface-header-navigation";

export default defineComponent({
    name: "navigation-component",
    props: {
        navigation: { type: Array<ICommonNavigationItem>, required: true },
    },
    computed: {
        drawer: {
            get(): boolean {
                return this.storeCommon.getDrawer;
            },
            set(newValue: boolean) {
                this.storeCommon.setDrawer(newValue);
            },
        },
    },
    setup() {
        const storeCommon = parentStore();
        return { storeCommon };
    },
});
</script>
