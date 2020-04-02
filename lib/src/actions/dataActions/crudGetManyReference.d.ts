import { Pagination, Sort } from '../../types';
export declare const crudGetManyReference: (reference: string, target: string, id: string | number, relatedTo: string, pagination: Pagination, sort: Sort, filter: any, source: string) => CrudGetManyReferenceAction;
export declare const CRUD_GET_MANY_REFERENCE: string;
export interface CrudGetManyReferenceAction {
}
export declare const CRUD_GET_MANY_REFERENCE_LOADING: string;
export interface CrudGetManyReferenceLoadingAction {
}
export declare const CRUD_GET_MANY_REFERENCE_FAILURE: string;
export interface CrudGetManyReferenceFailureAction {
}
export declare const CRUD_GET_MANY_REFERENCE_SUCCESS: string;
export interface CrudGetManyReferenceSuccessAction {
}
