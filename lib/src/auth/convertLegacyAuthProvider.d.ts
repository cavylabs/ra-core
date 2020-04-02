declare var _default: (legacyAuthProvider: (type: any, params?: any) => any) => {
    [key: string]: any;
    login: (params: any) => any;
    logout: (params: any) => any;
    checkAuth: (params: any) => any;
    checkError: (error: any) => any;
    getPermissions: (params: any) => any;
};
export default _default;
