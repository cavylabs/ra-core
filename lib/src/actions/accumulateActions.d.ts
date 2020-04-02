import { Pagination, Sort } from '../types';
export declare const CRUD_GET_MANY_ACCUMULATE: string;
export interface CrudGetManyAccumulateAction {
}
export declare const crudGetManyAccumulate: (resource: string, ids: (string | number)[]) => CrudGetManyAccumulateAction;
export declare const CRUD_GET_MATCHING_ACCUMULATE: string;
export interface CrudGetMatchingAccumulateAction {
}
export declare const crudGetMatchingAccumulate: (reference: string, relatedTo: string, pagination: Pagination, sort: Sort, filter: any) => CrudGetMatchingAccumulateAction;
