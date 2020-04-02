var effects_1 = require('redux-saga/effects');
var uiActions_1 = require('../actions/uiActions');
/**
 * Refresh Side Effects
 */
function handleRefresh() {
    yield effects_1.put(uiActions_1.refreshView());
}
function default_1() {
    yield effects_1.takeEvery(function (action) { return action.meta && action.meta.refresh; }, handleRefresh);
}
exports["default"] = default_1;
