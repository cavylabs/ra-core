var react_1 = require('react');
var paginationReducer = function (prevState, nextState) {
    return {};
};
prevState,
;
nextState,
;
;
;
var defaultPagination = {
    page: 1,
    perPage: 25
};
exports["default"] = function (initialPagination) {
    if (initialPagination === void 0) { initialPagination = {}; }
    var _a = react_1.useReducer.apply(void 0, [paginationReducer, {}].concat(defaultPagination, initialPagination)), pagination = _a[0], setPagination = _a[1];
};
;
var isFirstRender = react_1.useRef(true);
var setPerPage = react_1.useCallback(function (perPage) { return setPagination({ perPage: perPage }); }, []);
var setPage = react_1.useCallback(function (page) { return setPagination({ page: page }); }, []);
react_1.useEffect(function () {
    if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
    }
    setPerPage(initialPagination.perPage || 25);
}, [initialPagination.perPage, setPerPage]);
return {
    page: pagination.page,
    perPage: pagination.perPage,
    pagination: pagination,
    setPage: setPage,
    setPerPage: setPerPage,
    setPagination: setPagination
};
;
