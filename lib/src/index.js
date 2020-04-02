function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var queryReducer_1 = require('./reducer/admin/resource/list/queryReducer');
exports.queryReducer = queryReducer_1["default"];
__export(require('./core'));
__export(require('./actions'));
__export(require('./auth'));
__export(require('./dataProvider'));
__export(require('./export'));
__export(require('./i18n'));
__export(require('./inference'));
__export(require('./loading'));
__export(require('./util'));
__export(require('./controller'));
__export(require('./form'));
var oneToMany_1 = require('./reducer/admin/references/oneToMany');
exports.getIds = oneToMany_1.getIds;
exports.getReferences = oneToMany_1.getReferences;
exports.getReferencesByIds = oneToMany_1.getReferencesByIds;
exports.nameRelatedTo = oneToMany_1.nameRelatedTo;
__export(require('./sideEffect'));
__export(require('./types'));
