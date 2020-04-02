var react_redux_1 = require('react-redux');
exports["default"] = function () {
    return react_redux_1.useSelector(function (state) { return state.admin.loading > 0; });
};
