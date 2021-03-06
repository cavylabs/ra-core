import { ReactNode, ReactElement, ComponentType } from 'react';
import { RouteProps, RouteComponentProps, match as Match } from 'react-router-dom';
import { Location, History } from 'history';
import { WithPermissionsChildrenParams } from './auth/WithPermissions';
import { AuthActionType } from './auth/types';
/**
 * data types
 */
export declare type Identifier = string | number;
export interface Record {
    id: Identifier;
    [key: string]: any;
}
export interface RecordMap<RecordType = Record> {
    [id: string]: RecordType;
    [id: number]: RecordType;
}
export interface Sort {
    field: string;
    order: string;
}
export interface Filter {
    [k: string]: any;
}
export interface Pagination {
    page: number;
    perPage: number;
}
export declare type ValidUntil = Date;
/**
 * i18nProvider types
 */
export declare const I18N_TRANSLATE = "I18N_TRANSLATE";
export declare const I18N_CHANGE_LOCALE = "I18N_CHANGE_LOCALE";
export declare type Translate = (key: string, options?: any) => string;
export declare type I18nProvider = {
    translate: Translate;
    changeLocale: (locale: string, options?: any) => Promise<void>;
    getLocale: () => string;
    [key: string]: any;
};
/**
 * authProvider types
 */
export declare type AuthProvider = {
    login: (params: any) => Promise<any>;
    logout: (params: any) => Promise<void | string>;
    checkAuth: (params: any) => Promise<void>;
    checkError: (error: any) => Promise<void>;
    getPermissions: (params: any) => Promise<any>;
    [key: string]: any;
};
export declare type LegacyAuthProvider = (type: AuthActionType, params?: any) => Promise<any>;
/**
 * dataProvider types
 */
export declare type DataProvider = {
    getList: (resource: string, params: GetListParams) => Promise<GetListResult>;
    getOne: (resource: string, params: GetOneParams) => Promise<GetOneResult>;
    getMany: (resource: string, params: GetManyParams) => Promise<GetManyResult>;
    getManyReference: (resource: string, params: GetManyReferenceParams) => Promise<GetManyReferenceResult>;
    update: (resource: string, params: UpdateParams) => Promise<UpdateResult>;
    updateMany: (resource: string, params: UpdateManyParams) => Promise<UpdateManyResult>;
    create: (resource: string, params: CreateParams) => Promise<CreateResult>;
    delete: (resource: string, params: DeleteParams) => Promise<DeleteResult>;
    deleteMany: (resource: string, params: DeleteManyParams) => Promise<DeleteManyResult>;
    [key: string]: any;
};
export interface GetListParams {
    pagination: Pagination;
    sort: Sort;
    filter: any;
}
export interface GetListResult {
    data: Record[];
    total: number;
    validUntil?: ValidUntil;
}
export interface GetOneParams {
    id: Identifier;
}
export interface GetOneResult {
    data: Record;
    validUntil?: ValidUntil;
}
export interface GetManyParams {
    ids: Identifier[];
}
export interface GetManyResult {
    data: Record[];
    validUntil?: ValidUntil;
}
export interface GetManyReferenceParams {
    target: string;
    id: Identifier;
    pagination: Pagination;
    sort: Sort;
    filter: any;
}
export interface GetManyReferenceResult {
    data: Record[];
    total: number;
    validUntil?: ValidUntil;
}
export interface UpdateParams {
    id: Identifier;
    data: any;
    previousData: Record;
}
export interface UpdateResult {
    data: Record;
    validUntil?: ValidUntil;
}
export interface UpdateManyParams {
    ids: Identifier[];
    data: any;
}
export interface UpdateManyResult {
    data?: Identifier[];
    validUntil?: ValidUntil;
}
export interface CreateParams {
    data: any;
}
export interface CreateResult {
    data: Record;
    validUntil?: ValidUntil;
}
export interface DeleteParams {
    id: Identifier;
}
export interface DeleteResult {
    data?: Record;
}
export interface DeleteManyParams {
    ids: Identifier[];
}
export interface DeleteManyResult {
    data?: Identifier[];
}
export declare type DataProviderResult = CreateResult | DeleteResult | DeleteManyResult | GetListResult | GetManyResult | GetManyReferenceResult | GetOneResult | UpdateResult | UpdateManyResult;
export declare type DataProviderProxy = {
    getList: (resource: string, params: GetListParams, options?: UseDataProviderOptions) => Promise<GetListResult>;
    getOne: (resource: string, params: GetOneParams, options?: UseDataProviderOptions) => Promise<GetOneResult>;
    getMany: (resource: string, params: GetManyParams, options?: UseDataProviderOptions) => Promise<GetManyResult>;
    getManyReference: (resource: string, params: GetManyReferenceParams, options?: UseDataProviderOptions) => Promise<GetManyReferenceResult>;
    update: (resource: string, params: UpdateParams, options?: UseDataProviderOptions) => Promise<UpdateResult>;
    updateMany: (resource: string, params: UpdateManyParams, options?: UseDataProviderOptions) => Promise<UpdateManyResult>;
    create: (resource: string, params: CreateParams, options?: UseDataProviderOptions) => Promise<CreateResult>;
    delete: (resource: string, params: DeleteParams, options?: UseDataProviderOptions) => Promise<DeleteResult>;
    deleteMany: (resource: string, params: DeleteManyParams, options?: UseDataProviderOptions) => Promise<DeleteManyResult>;
    [key: string]: any;
};
export interface UseDataProviderOptions {
    action?: string;
    fetch?: string;
    meta?: object;
    undoable?: boolean;
    onSuccess?: any;
    onFailure?: any;
}
export declare type LegacyDataProvider = (type: string, resource: string, params: any) => Promise<any>;
/**
 * Redux state type
 */
export interface ReduxState {
    admin: {
        ui: {
            optimistic: boolean;
            sidebarOpen: boolean;
            viewVersion: number;
        };
        resources: {
            [name: string]: {
                data: {
                    [key: string]: Record;
                    [key: number]: Record;
                };
                list: {
                    params: any;
                    ids: Identifier[];
                    loadedOnce: boolean;
                    selectedIds: Identifier[];
                    total: number;
                    cachedRequests?: {
                        ids: Identifier[];
                        total: number;
                        validity: Date;
                    };
                };
                validity: {
                    [key: string]: Date;
                    [key: number]: Date;
                };
            };
        };
        references: {
            oneToMany: {
                [relatedTo: string]: {
                    ids: Identifier[];
                    total: number;
                };
            };
        };
        loading: number;
        customQueries: {
            [key: string]: any;
        };
    };
    router: {
        location: Location;
    };
}
export declare type InitialState = object | (() => object);
/**
 * Misc types
 */
export declare type Dispatch<T> = T extends (...args: infer A) => any ? (...args: A) => void : never;
export declare type ResourceElement = ReactElement<ResourceProps>;
export declare type RenderResourcesFunction = (permissions: any) => ResourceElement[] | Promise<ResourceElement[]>;
export declare type AdminChildren = RenderResourcesFunction | ReactNode;
export interface CustomRoute extends RouteProps {
    noLayout?: boolean;
}
export declare type CustomRoutes = Array<ReactElement<CustomRoute>>;
export declare type TitleComponent = string | ReactElement<any>;
export declare type CatchAllComponent = ComponentType<{
    title?: TitleComponent;
}>;
interface LoginComponentProps extends RouteComponentProps {
    title?: TitleComponent;
    theme?: object;
}
export declare type LoginComponent = ComponentType<LoginComponentProps>;
export declare type DashboardComponent = ComponentType<WithPermissionsChildrenParams>;
export interface LayoutProps {
    dashboard?: DashboardComponent;
    logout: ReactNode;
    menu: ComponentType;
    theme: object;
    title?: TitleComponent;
}
export declare type LayoutComponent = ComponentType<LayoutProps>;
export interface ReactAdminComponentProps {
    basePath: string;
    permissions?: any;
}
export interface ReactAdminComponentPropsWithId {
    basePath: string;
    permissions?: any;
    id: Identifier;
}
export declare type ResourceMatch = Match<{
    id?: string;
}>;
export interface ResourceProps {
    intent?: 'route' | 'registration';
    match?: ResourceMatch;
    name: string;
    list?: ComponentType<ReactAdminComponentProps>;
    create?: ComponentType<ReactAdminComponentProps>;
    edit?: ComponentType<ReactAdminComponentPropsWithId>;
    show?: ComponentType<ReactAdminComponentPropsWithId>;
    icon?: ComponentType<any>;
    options?: object;
}
export interface AdminProps {
    appLayout?: LayoutComponent;
    authProvider?: AuthProvider | LegacyAuthProvider;
    catchAll?: CatchAllComponent;
    children?: AdminChildren;
    customReducers?: object;
    customRoutes?: CustomRoutes;
    customSagas?: any[];
    dashboard?: DashboardComponent;
    dataProvider: DataProvider | LegacyDataProvider;
    history?: History;
    i18nProvider?: I18nProvider;
    initialState?: InitialState;
    layout?: LayoutComponent;
    loading?: ComponentType;
    locale?: string;
    loginPage?: LoginComponent | boolean;
    logoutButton?: ComponentType;
    menu?: ComponentType;
    theme?: object;
    title?: TitleComponent;
}
export declare type Exporter = (data: any, fetchRelatedRecords: (data: any, field: string, resource: string) => Promise<any>, dataProvider: DataProvider, resource?: string) => Promise<void>;
export declare type SetOnSave = (onSave?: (values: object, redirect: any) => void) => void;
export declare type FormFunctions = {
    setOnSave?: SetOnSave;
};
export {};
