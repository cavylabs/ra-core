exports.SET_SORT = 'SET_SORT';
exports.SORT_ASC = 'ASC';
exports.SORT_DESC = 'DESC';
exports.SET_PAGE = 'SET_PAGE';
exports.SET_PER_PAGE = 'SET_PER_PAGE';
exports.SET_FILTER = 'SET_FILTER';
var oppositeOrder = function (direction) {
    return direction === exports.SORT_DESC ? exports.SORT_ASC : exports.SORT_DESC;
};
/**
 * This reducer is for the react-router query string, NOT for redux.
 */
var queryReducer = function (previousState, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case exports.SET_SORT:
            if (payload.sort === previousState.sort) {
                return {};
            }
    }
};
previousState,
    order;
oppositeOrder(previousState.order),
    page;
1,
;
;
return {
    previousState: previousState,
    sort: payload.sort,
    order: payload.order || exports.SORT_ASC,
    page: 1
};
SET_PAGE: return { previousState: previousState, page: payload };
SET_PER_PAGE: return { previousState: previousState, page: 1, perPage: payload };
SET_FILTER: {
    return {
        previousState: previousState,
        page: 1,
        filter: payload.filter,
        displayedFilters: payload.displayedFilters
            ? payload.displayedFilters
            : previousState.displayedFilters
    };
}
return previousState;
;
exports["default"] = queryReducer;
