export declare const crudUpdate: (resource: string, id: string | number, data: any, previousData: any, basePath: string, redirectTo?: any, refresh?: any) => CrudUpdateAction;
export declare const CRUD_UPDATE: string;
export interface CrudUpdateAction {
}
export declare const CRUD_UPDATE_LOADING: string;
export interface CrudUpdateLoadingAction {
}
export declare const CRUD_UPDATE_FAILURE: string;
export interface CrudUpdateFailureAction {
}
export declare const CRUD_UPDATE_SUCCESS: string;
export interface CrudUpdateSuccessAction {
}
