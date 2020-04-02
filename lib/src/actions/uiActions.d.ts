export declare const TOGGLE_SIDEBAR: string;
export interface ToggleSidebarAction {
}
export declare const toggleSidebar: () => ToggleSidebarAction;
export declare const SET_SIDEBAR_VISIBILITY: string;
export interface SetSidebarVisibilityAction {
}
export declare const setSidebarVisibility: (isOpen: boolean) => SetSidebarVisibilityAction;
export declare const REFRESH_VIEW: string;
export interface RefreshViewAction {
}
export declare const refreshView: () => RefreshViewAction;
