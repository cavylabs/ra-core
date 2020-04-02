var react_1 = require('react');
var react_redux_1 = require('react-redux');
var fetchActions_1 = require('../actions/fetchActions');
exports["default"] = function () {
    var dispatch = react_redux_1.useDispatch();
    var startLoading = react_1.useCallback(function () {
        dispatch(fetchActions_1.fetchStart());
    }, [dispatch]);
    var stopLoading = react_1.useCallback(function () {
        dispatch(fetchActions_1.fetchEnd());
    }, [dispatch]);
    return { startLoading: startLoading, stopLoading: stopLoading };
};
