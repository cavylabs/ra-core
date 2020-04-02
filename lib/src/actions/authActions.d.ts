export declare const USER_LOGIN: string;
export declare const USER_LOGIN_LOADING: string;
export declare const USER_LOGIN_FAILURE: string;
export declare const USER_LOGIN_SUCCESS: string;
export interface UserLoginAction {
}
export declare const userLogin: (payload: any, pathName: string) => UserLoginAction;
export declare const USER_CHECK: string;
export declare const USER_CHECK_SUCCESS: string;
export interface UserCheckAction {
}
export declare const userCheck: (payload: any, pathName: string, routeParams?: any) => UserCheckAction;
export declare const USER_LOGOUT: string;
export interface UserLogoutAction {
}
/**
 * Action to trigger logout of the current user. The entire redux state will be cleared
 * thanks to the resettableAppReducer in Admin.
 * @see: Admin.js
 * @param redirectTo Path to direct to after logout
 * @return {{type: string, payload: {redirectTo: string}, meta: {auth: boolean}}}
 */
export declare const userLogout: (redirectTo?: string) => UserLogoutAction;
