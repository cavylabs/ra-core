declare var _default: (authProvider?: {
    [key: string]: any;
    login: (params: any) => any;
    logout: (params: any) => any;
    checkAuth: (params: any) => any;
    checkError: (error: any) => any;
    getPermissions: (params: any) => any;
}) => () => any;
export default _default;
export declare const handleLogin: (authProvider: {
    [key: string]: any;
    login: (params: any) => any;
    logout: (params: any) => any;
    checkAuth: (params: any) => any;
    checkError: (error: any) => any;
    getPermissions: (params: any) => any;
}) => (action: any) => {};
export declare const handleCheck: (authProvider: {
    [key: string]: any;
    login: (params: any) => any;
    logout: (params: any) => any;
    checkAuth: (params: any) => any;
    checkError: (error: any) => any;
    getPermissions: (params: any) => any;
}) => (action: any) => {};
export declare const handleLogout: (authProvider: {
    [key: string]: any;
    login: (params: any) => any;
    logout: (params: any) => any;
    checkAuth: (params: any) => any;
    checkError: (error: any) => any;
    getPermissions: (params: any) => any;
}) => (action: any) => {};
export declare const handleFetchError: (authProvider: {
    [key: string]: any;
    login: (params: any) => any;
    logout: (params: any) => any;
    checkAuth: (params: any) => any;
    checkError: (error: any) => any;
    getPermissions: (params: any) => any;
}) => (action: any) => {};
