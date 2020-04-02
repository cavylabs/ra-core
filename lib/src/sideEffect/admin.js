var effects_1 = require('redux-saga/effects');
var auth_1 = require('./auth');
var callback_1 = require('./callback');
var fetch_1 = require('./fetch');
var notification_1 = require('./notification');
var redirection_1 = require('./redirection');
var accumulate_1 = require('./accumulate');
var refresh_1 = require('./refresh');
var undo_1 = require('./undo');
exports["default"] = function (dataProvider, authProvider) {
    if (authProvider === void 0) { authProvider = null; }
    return function admin() {
        yield effects_1.all([
            auth_1["default"](authProvider)(),
            undo_1["default"](),
            fetch_1["default"](dataProvider)(),
            accumulate_1["default"](),
            redirection_1["default"](),
            refresh_1["default"](),
            notification_1["default"](),
            callback_1["default"](),
        ]);
    };
};
