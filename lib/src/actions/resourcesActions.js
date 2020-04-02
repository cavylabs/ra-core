exports.REGISTER_RESOURCE = 'RA/REGISTER_RESOURCE';
readonly;
name: string;
readonly;
options ?  : any;
readonly;
hasList ?  : boolean;
readonly;
hasEdit ?  : boolean;
readonly;
hasShow ?  : boolean;
readonly;
hasCreate ?  : boolean;
readonly;
icon ?  : any;
readonly;
type: typeof exports.REGISTER_RESOURCE;
readonly;
payload: ResourceDefinition;
exports.registerResource = function (resource) {
    return ({
        type: exports.REGISTER_RESOURCE,
        payload: resource
    });
};
exports.UNREGISTER_RESOURCE = 'RA/UNREGISTER_RESOURCE';
readonly;
type: typeof exports.UNREGISTER_RESOURCE;
readonly;
payload: string;
exports.unregisterResource = function (resourceName) {
    return ({
        type: exports.UNREGISTER_RESOURCE,
        payload: resourceName
    });
};
