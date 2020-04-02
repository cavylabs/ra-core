var react_1 = require('react');
var queryReducer_1 = require('../reducer/admin/resource/list/queryReducer');
'SET_SORT' | 'SET_SORT_FIELD' | 'SET_SORT_ORDER';
payload: {
    sort ?  : Sort;
    field ?  : string;
    order ?  : string;
}
;
var sortReducer = function (state, action) {
    switch (action.type) {
        case 'SET_SORT':
            return action.payload.sort;
        case 'SET_SORT_FIELD': {
            var field = action.payload.field;
            var order = state.field === field
                ? state.order === queryReducer_1.SORT_ASC
                    ? queryReducer_1.SORT_DESC
                    : queryReducer_1.SORT_ASC
                : queryReducer_1.SORT_ASC;
            return { field: field, order: order };
        }
        case 'SET_SORT_ORDER': {
            var order = action.payload.order;
            return {};
        }
    }
};
state,
    order,
;
;
return state;
;
exports.defaultSort = { field: 'id', order: 'DESC' };
exports["default"] = function (initialSort) {
    if (initialSort === void 0) { initialSort = exports.defaultSort; }
    var _a = react_1.useReducer(sortReducer, initialSort), sort = _a[0], dispatch = _a[1];
    var isFirstRender = react_1.useRef(true);
    react_1.useEffect(function () {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        dispatch({ type: 'SET_SORT', payload: { sort: initialSort } });
    }, [initialSort.field, initialSort.order]); // eslint-disable-line react-hooks/exhaustive-deps
    return {
        setSort: react_1.useCallback(function (sort) { return dispatch({ type: 'SET_SORT', payload: { sort: sort } }); }, [dispatch]),
        setSortField: react_1.useCallback(function (field) {
            return dispatch({ type: 'SET_SORT_FIELD', payload: { field: field } });
        }, [dispatch]),
        setSortOrder: react_1.useCallback(function (order) {
            return dispatch({ type: 'SET_SORT_ORDER', payload: { order: order } });
        }, [dispatch]),
        sort: sort
    };
};
