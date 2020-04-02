import { Pagination, Sort } from '../../types';
export declare const crudGetList: (resource: string, pagination: Pagination, sort: Sort, filter: any) => CrudGetListAction;
export declare const CRUD_GET_LIST: string;
export interface CrudGetListAction {
}
export declare const CRUD_GET_LIST_LOADING: string;
export interface CrudGetListLoadingAction {
}
export declare const CRUD_GET_LIST_FAILURE: string;
export interface CrudGetListFailureAction {
}
export declare const CRUD_GET_LIST_SUCCESS: string;
export interface CrudGetListSuccessAction {
}
