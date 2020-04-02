import { Record } from '../../types';
export declare const crudDelete: (resource: string, id: string | number, previousData: Record, basePath: string, redirectTo?: any, refresh?: any) => CrudDeleteAction;
export declare const CRUD_DELETE: string;
export interface CrudDeleteAction {
}
export declare const CRUD_DELETE_LOADING: string;
export interface CrudDeleteLoadingAction {
}
export declare const CRUD_DELETE_FAILURE: string;
export interface CrudDeleteFailureAction {
}
export declare const CRUD_DELETE_SUCCESS: string;
export interface CrudDeleteSuccessAction {
}
