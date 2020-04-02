export declare const CRUD_SHOW_FILTER: string;
export interface ShowFilterAction {
}
export declare const showFilter: (resource: string, field: string) => ShowFilterAction;
export declare const CRUD_HIDE_FILTER: string;
export interface HideFilterAction {
}
export declare const hideFilter: (resource: string, field: string) => HideFilterAction;
export declare const CRUD_SET_FILTER: string;
export interface SetFilterAction {
}
export declare const setFilter: (resource: string, field: string, value: any) => SetFilterAction;
