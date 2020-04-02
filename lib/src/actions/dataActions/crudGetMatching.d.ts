import { Pagination, Sort } from '../../types';
export declare const crudGetMatching: (reference: string, relatedTo: string, pagination: Pagination, sort: Sort, filter: any) => CrudGetMatchingAction;
export declare const CRUD_GET_MATCHING: string;
export interface CrudGetMatchingAction {
}
export declare const CRUD_GET_MATCHING_LOADING: string;
export interface CrudGetMatchingLoadingAction {
}
export declare const CRUD_GET_MATCHING_FAILURE: string;
export interface CrudGetMatchingFailureAction {
}
export declare const CRUD_GET_MATCHING_SUCCESS: string;
export interface CrudGetMatchingSuccessAction {
}
