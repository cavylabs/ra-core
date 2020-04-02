var react_1 = require('react');
var react_redux_1 = require('react-redux');
var resolveRedirectTo_1 = require('../util/resolveRedirectTo');
var uiActions_1 = require('../actions/uiActions');
var react_router_dom_1 = require('react-router-dom');
/**
 * Hook for Redirection Side Effect
 *
 * @example
 *
 * const redirect = useRedirect();
 * // redirect to list view
 * redirect('list', '/posts');
 * // redirect to edit view
 * redirect('edit', '/posts', 123);
 * // do not redirect (resets the record form)
 * redirect(false);
 * // redirect to the result of a function
 * redirect((redirectTo, basePath, is, data) => ...)
 */
var useRedirect = function () {
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory(); // Note: history is mutable. This prevents render loops in useCallback.
    return react_1.useCallback(function (redirectTo, basePath, id, data) {
        if (basePath === void 0) { basePath = ''; }
        if (!redirectTo) {
            if (history.location.state || history.location.search) {
                history.replace.apply(history, [{}].concat(history.location, [state, {}, search, undefined]));
            }
        }
    });
}, _a = (void 0).dispatch, dispatch = _a === void 0 ? (uiActions_1.refreshView()) : _a;
return;
history.push(resolveRedirectTo_1["default"](redirectTo, basePath, id, data));
[dispatch, history];
;
;
exports["default"] = useRedirect;
