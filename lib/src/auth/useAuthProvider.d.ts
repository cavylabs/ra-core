export declare const defaultAuthParams: {
    loginUrl: string;
    afterLoginUrl: string;
};
/**
 * Get the authProvider stored in the context
 */
declare const useAuthProvider: () => {
    [key: string]: any;
    login: (params: any) => any;
    logout: (params: any) => any;
    checkAuth: (params: any) => any;
    checkError: (error: any) => any;
    getPermissions: (params: any) => any;
};
export default useAuthProvider;
