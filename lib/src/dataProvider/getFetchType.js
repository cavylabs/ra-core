var core_1 = require('../core');
exports["default"] = function (actionType) {
    switch (actionType) {
        case 'getList':
            return core_1.GET_LIST;
        case 'getOne':
            return core_1.GET_ONE;
        case 'getMany':
            return core_1.GET_MANY;
        case 'getManyReference':
            return core_1.GET_MANY_REFERENCE;
        case 'create':
            return core_1.CREATE;
        case 'update':
            return core_1.UPDATE;
        case 'updateMany':
            return core_1.UPDATE_MANY;
        case 'delete':
            return core_1.DELETE;
        case 'deleteMany':
            return core_1.DELETE_MANY;
        default:
            return actionType;
    }
};
