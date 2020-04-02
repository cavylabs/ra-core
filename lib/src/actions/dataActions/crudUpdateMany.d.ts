export declare const crudUpdateMany: (resource: string, ids: (string | number)[], data: any, basePath: string, refresh?: any) => CrudUpdateManyAction;
export declare const CRUD_UPDATE_MANY: string;
export interface CrudUpdateManyAction {
}
export declare const CRUD_UPDATE_MANY_LOADING: string;
export interface CrudUpdateManyLoadingAction {
}
export declare const CRUD_UPDATE_MANY_FAILURE: string;
export interface CrudUpdateManyFailureAction {
}
export declare const CRUD_UPDATE_MANY_SUCCESS: string;
export interface CrudUpdateManySuccessAction {
}
