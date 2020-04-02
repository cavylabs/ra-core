var redux_1 = require('redux');
var connected_react_router_1 = require('connected-react-router');
var admin_1 = require('./admin');
var notifications_1 = require('./admin/notifications');
exports.getNotification = notifications_1.getNotification;
exports["default"] = function (customReducers, history) {
    return redux_1.combineReducers.apply(void 0, [{
        admin: admin_1["default"],
        router: connected_react_router_1.connectRouter(history) }].concat(customReducers));
};
exports.getPossibleReferenceValues = function (state, props) {
    return admin_1.getPossibleReferenceValues(state.admin, props);
};
exports.getResources = function (state) { return admin_1.getResources(state.admin); };
exports.getReferenceResource = function (state, props) {
    return admin_1.getReferenceResource(state.admin, props);
};
