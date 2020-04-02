var actions_1 = require('../../../actions');
var data_1 = require('./data');
var list_1 = require('./list');
var validity_1 = require('./validity');
var initialState = {};
exports["default"] = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    if (action.type === actions_1.REGISTER_RESOURCE) {
        var resourceState = {
            props: action.payload,
            data: data_1["default"](undefined, action),
            list: list_1["default"](undefined, action),
            validity: validity_1["default"](undefined, action)
        };
        return (_a = {
                previousState: previousState
            },
            _a[action.payload.name] = resourceState,
            _a
        );
    }
    if (action.type === actions_1.UNREGISTER_RESOURCE) {
        return (_b = Object.keys(previousState)).reduce.apply(_b, [function (acc, key) {
            if (key === action.payload) {
                return acc;
            }
            return {};
        }].concat(acc, [[key], previousState[key]]));
    }
    ;
    var _a, _b;
};
{ }
;
if (action.type !== actions_1.REFRESH_VIEW &&
    (!action.meta || !action.meta.resource)) {
    return previousState;
}
var resources = Object.keys(previousState);
var newState = resources.reduce.apply(resources, [function (acc, resource) { return ({}); }].concat(acc, [[resource], action.type === actions_1.REFRESH_VIEW ||
    action.meta.resource === resource
    ? {
        props: previousState[resource].props,
        data: data_1["default"](previousState[resource].data, action),
        list: list_1["default"](previousState[resource].list, action),
        validity: validity_1["default"](previousState[resource].validity, action)
    }
    : previousState[resource]]));
{ }
;
return newState;
;
exports.getResources = function (state) {
    return Object.keys(state).map(function (key) { return state[key].props; });
};
exports.getReferenceResource = function (state, props) { return state[props.reference]; };
