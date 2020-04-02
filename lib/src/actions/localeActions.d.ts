export declare const CHANGE_LOCALE: string;
export interface ChangeLocaleAction {
}
export declare const changeLocale: (locale: string) => ChangeLocaleAction;
export declare const CHANGE_LOCALE_SUCCESS: string;
export interface ChangeLocaleSuccessAction {
}
export declare const changeLocaleSuccess: (locale: string, messages: any) => ChangeLocaleSuccessAction;
export declare const CHANGE_LOCALE_FAILURE: string;
export interface ChangeLocaleFailureAction {
}
export declare const changeLocaleFailure: (locale: string, error: any) => ChangeLocaleFailureAction;
