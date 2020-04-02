export declare const crudGetMany: (resource: string, ids: (string | number)[]) => CrudGetManyAction;
export declare const CRUD_GET_MANY: string;
export interface CrudGetManyAction {
}
export declare const CRUD_GET_MANY_LOADING: string;
export interface CrudGetManyLoadingAction {
}
export declare const CRUD_GET_MANY_FAILURE: string;
export interface CrudGetManyFailureAction {
}
export declare const CRUD_GET_MANY_SUCCESS: string;
export interface CrudGetManySuccessAction {
}
