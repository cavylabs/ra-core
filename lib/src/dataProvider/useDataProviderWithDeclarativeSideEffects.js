var useDataProvider_1 = require('./useDataProvider');
var react_1 = require('react');
var useDeclarativeSideEffects_1 = require('./useDeclarativeSideEffects');
/**
 * This version of the useDataProvider hook ensure Query and Mutation components are still usable
 * with side effects declared as objects.
 *
 * @deprecated This is for backward compatibility only and will be removed in next major version.
 */
var useDataProviderWithDeclarativeSideEffects = function () {
    var dataProvider = useDataProvider_1["default"]();
    var getSideEffects = useDeclarativeSideEffects_1["default"]();
    var dataProviderProxy = react_1.useMemo(function () {
        return new Proxy(dataProvider, {
            get: function (target, name) {
                return function (resource, payload, options) {
                    var _a = getSideEffects(resource, options), onSuccess = _a.onSuccess, onFailure = _a.onFailure;
                    try {
                        return target[name.toString()].apply(target, [resource, payload, {}].concat(options, [onSuccess, onFailure]));
                    }
                    finally { }
                };
            } });
    });
    try { }
    catch (e) {
        // turn synchronous exceptions (e.g. in parameter preparation)
        // into async ones, otherwise they'll be lost
        return Promise.reject(e);
    }
};
;
[dataProvider, getSideEffects];
;
return dataProviderProxy;
;
exports["default"] = useDataProviderWithDeclarativeSideEffects;
