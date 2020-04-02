export declare const REGISTER_RESOURCE: string;
export interface ResourceDefinition {
}
export interface RegisterResourceAction {
}
export declare const registerResource: (resource: ResourceDefinition) => RegisterResourceAction;
export declare const UNREGISTER_RESOURCE: string;
export interface UnregisterResourceAction {
}
export declare const unregisterResource: (resourceName: string) => UnregisterResourceAction;
