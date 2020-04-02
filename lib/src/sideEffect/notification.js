var effects_1 = require('redux-saga/effects');
var notificationActions_1 = require('../actions/notificationActions');
/**
 * Notification Side Effects
 */
function handleNotification(_a) {
    var error = _a.error, _b = _a.meta, notification = _b.notification, optimistic = _b.optimistic;
    var body = notification.body, level = notification.level, _c = notification.messageArgs, messageArgs = _c === void 0 ? {} : _c;
    if (error) {
        return yield effects_1.put(notificationActions_1.showNotification(typeof error === 'string' ? error : error.message || body, level || 'warning', {
            messageArgs: messageArgs,
            undoable: false
        }));
    }
    yield effects_1.put(notificationActions_1.showNotification(body, level || 'info', {
        messageArgs: messageArgs,
        undoable: optimistic
    }));
}
function default_1() {
    yield effects_1.takeEvery(
    // @ts-ignore
    // @ts-ignore
    function (action) { return action.meta && action.meta.notification; }, handleNotification);
}
exports["default"] = default_1;
