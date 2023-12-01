import { StoreDefinition } from "pinia";

// Enums
import { StoreIDs } from "@enums/IDs/enums-ids-stores";

export default interface IHomeStore extends StoreDefinition<StoreIDs.HOME_STORE_ID, IHomeState, IHomeGetters, IHomeActions> {}
export interface IHomeState {}
export interface IHomeGetters {}
export interface IHomeActions {}
export interface IHomeData {}
