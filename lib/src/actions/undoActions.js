exports.UNDOABLE = 'RA/UNDOABLE';
readonly;
type: typeof exports.UNDOABLE;
readonly;
payload: any;
exports.startUndoable = function (action) { return ({
    type: exports.UNDOABLE,
    payload: { action: action }
}); };
exports.UNDO = 'RA/UNDO';
readonly;
type: typeof exports.UNDO;
exports.undo = function () { return ({
    type: exports.UNDO
}); };
exports.COMPLETE = 'RA/COMPLETE';
readonly;
type: typeof exports.COMPLETE;
exports.complete = function () { return ({
    type: exports.COMPLETE
}); };
exports.START_OPTIMISTIC_MODE = 'RA/START_OPTIMISTIC_MODE';
readonly;
type: typeof exports.START_OPTIMISTIC_MODE;
exports.startOptimisticMode = function () { return ({
    type: exports.START_OPTIMISTIC_MODE
}); };
exports.STOP_OPTIMISTIC_MODE = 'RA/STOP_OPTIMISTIC_MODE';
readonly;
type: typeof exports.STOP_OPTIMISTIC_MODE;
exports.stopOptimisticMode = function () { return ({
    type: exports.STOP_OPTIMISTIC_MODE
}); };
