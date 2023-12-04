import { StoreDefinition } from "pinia";

// Interfaces
import { ICommonState, ICommonGetters, ICommonActions } from "@interfaces/common/interfaces-common";
import { IHeaderState, IHeaderGetters, IHeaderActions } from "@interfaces/common/header/interfaces-common-header";
import {
	IHomeState,
	IHomeGetters,
	IHomeActions,
} from "@interfaces/common/pages/info/home/interfaces-common-pages-info-home";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export type TCommonStore = StoreDefinition<StoreIDs.COMMON_STORE_ID, ICommonState, ICommonGetters, ICommonActions>;
export type THeaderStore = StoreDefinition<StoreIDs.HEADER_STORE_ID, IHeaderState, IHeaderGetters, IHeaderActions>;
export type THomeStore = StoreDefinition<StoreIDs.HOME_STORE_ID, IHomeState, IHomeGetters, IHomeActions>;
