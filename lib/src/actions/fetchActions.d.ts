export declare const FETCH_START: string;
export interface FetchStartAction {
}
export declare const fetchStart: () => FetchStartAction;
export declare const FETCH_END: string;
export interface FetchEndAction {
}
export declare const fetchEnd: () => FetchEndAction;
export declare const FETCH_ERROR: string;
export interface FetchErrorAction {
}
export declare const fetchError: () => FetchErrorAction;
export declare const FETCH_CANCEL: string;
export interface FetchCancelAction {
}
export declare const fetchCancel: () => FetchCancelAction;
