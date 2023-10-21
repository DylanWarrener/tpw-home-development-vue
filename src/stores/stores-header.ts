import { defineStore } from "pinia";

import { IHeaderState, IAppBarIcons } from "../interfaces/header/interface-header";

const useHeaderStore = defineStore("header-store", {
    state: (): IHeaderState => ({
        drawer: false,
        icons: {
            menu: {
                name: "('$vuetify.header.appBar.icons.name.menu')",
                icon: "this.$t('$vuetify.header.appBar.icons.name.menu')",
                tooltip: "this.$t('$vuetify.header.appBar.icons.tooltips.menu')",
                show: false,
            },
            search: {
                name: "this.$t('header.appBar.icons.name.search')",
                icon: "this.$t('header.appBar.icons.search')",
                tooltip: "this.$t('header.appBar.icons.tooltips.search')",
                show: false,
            },
            theme: {
                name: 'this.$t("header.appBar.icons.name.theme")',
                icon: 'this.$t("header.appBar.icons.theme")',
                tooltip: 'this.$t("header.appBar.icons.tooltips.theme")',
                show: false,
            },
            newAccount: {
                name: 'this.$t("header.appBar.icons.name.newAccount")',
                icon: 'this.$t("header.appBar.icons.newAccount")',
                tooltip: 'this.$t("header.appBar.icons.tooltips.newAccount")',
                show: false,
            },
            account: {
                name: 'this.$t("header.appBar.icons.name.account")',
                icon: 'this.$t("header.appBar.icons.account")',
                tooltip: 'this.$t("header.appBar.icons.tooltips.account")',
                show: false,
            },
            settings: {
                name: 'this.$t("header.appBar.icons.name.settings")',
                icon: 'this.$t("header.appBar.icons.settings")',
                tooltip: 'this.$t("header.appBar.icons.tooltips.settings")',
                show: false,
            },
        },
    }),
    getters: {
        getDrawer: (state: IHeaderState): boolean => state.drawer,
        getAllAppBarIcons: (state: IHeaderState): IAppBarIcons => state.icons,
    },
    actions: {
        // Getters

        // Setters
        setDrawer(newValue: boolean): void {
            this.drawer = newValue;
        },
    },
});

export default useHeaderStore;
