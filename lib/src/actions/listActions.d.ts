export declare const CRUD_CHANGE_LIST_PARAMS: string;
export interface ListParams {
    sort: string;
    order: string;
    page: number;
    perPage: number;
    filter: any;
    displayedFilters: any;
}
export interface ChangeListParamsAction {
}
export declare const changeListParams: (resource: string, params: ListParams) => ChangeListParamsAction;
export declare const SET_LIST_SELECTED_IDS: string;
export interface SetListSelectedIdsAction {
}
export declare const setListSelectedIds: (resource: string, ids: (string | number)[]) => SetListSelectedIdsAction;
export declare const TOGGLE_LIST_ITEM: string;
export interface ToggleListItemAction {
}
export declare const toggleListItem: (resource: string, id: any) => ToggleListItemAction;
