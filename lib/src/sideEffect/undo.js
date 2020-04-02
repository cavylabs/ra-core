var effects_1 = require('redux-saga/effects');
var undoActions_1 = require('../actions/undoActions');
function handleUndoRace(undoableAction) {
    var action = undoableAction.payload.action;
    var _a = action.meta, onSuccess = _a.onSuccess, onFailure = _a.onFailure, metaWithoutSideEffects = _a.metaWithoutSideEffects;
    yield effects_1.put(undoActions_1.startOptimisticMode());
    // dispatch action in optimistic mode (no fetch), with success side effects
    yield effects_1.put.apply(void 0, [{}].concat(action, [type, action.type + "_OPTIMISTIC", meta, {}], metaWithoutSideEffects, onSuccess, [optimistic, true]));
}
exports.handleUndoRace = handleUndoRace;
;
// wait for undo or delay
var complete = (yield effects_1.race({
    undo: effects_1.take(undoActions_1.UNDO),
    complete: effects_1.take(undoActions_1.COMPLETE)
})).complete;
yield effects_1.put(undoActions_1.stopOptimisticMode());
if (complete) {
    // if not cancelled, redispatch the action, this time immediate, and without success side effect
    yield effects_1.put.apply(void 0, [{}].concat(action, [meta, {}], metaWithoutSideEffects, [onSuccess, { refresh: true }, onFailure, {}], onFailure, [refresh, true]));
}
;
{
    yield effects_1.put(notificationActions_1.showNotification('ra.notification.canceled'));
    yield effects_1.put(uiActions_1.refreshView());
}
function watchUndoable() {
    // @ts-ignore
    yield effects_1.takeEvery(undoActions_1.UNDOABLE, handleUndoRace);
}
exports["default"] = watchUndoable;
