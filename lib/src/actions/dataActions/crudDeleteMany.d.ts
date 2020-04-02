export declare const crudDeleteMany: (resource: string, ids: (string | number)[], basePath: string, refresh?: any) => CrudDeleteManyAction;
export declare const CRUD_DELETE_MANY: string;
export interface CrudDeleteManyAction {
}
export declare const CRUD_DELETE_MANY_LOADING: string;
export interface CrudDeleteManyLoadingAction {
}
export declare const CRUD_DELETE_MANY_FAILURE: string;
export interface CrudDeleteMAnyFailureAction {
}
export declare const CRUD_DELETE_MANY_SUCCESS: string;
export interface CrudDeleteManySuccessAction {
}
