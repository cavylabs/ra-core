var linkToRecord_1 = require('./linkToRecord');
exports["default"] = function (redirectTo, basePath, id, data) {
    if (typeof redirectTo === 'function') {
        return redirectTo(basePath, id, data);
    }
    switch (redirectTo) {
        case 'list':
            return basePath;
        case 'create':
            return basePath + "/create";
        case 'edit':
            return linkToRecord_1["default"](basePath, id);
        case 'show':
            return linkToRecord_1["default"](basePath, id) + "/show";
        default:
            return redirectTo;
    }
};
