import { Reducer } from 'redux';
import { ListParams } from '../../../../actions';
export declare const SET_SORT: string;
export declare const SORT_ASC: string;
export declare const SORT_DESC: string;
export declare const SET_PAGE: string;
export declare const SET_PER_PAGE: string;
export declare const SET_FILTER: string;
/**
 * This reducer is for the react-router query string, NOT for redux.
 */
declare const queryReducer: Reducer<ListParams>;
export default queryReducer;
