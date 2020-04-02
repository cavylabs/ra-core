var assert_1 = require('assert');
var queryReducer_1 = require('./queryReducer');
describe('Query Reducer', function () {
    describe('SET_PAGE action', function () {
        it('should update the page', function () {
            var updatedState = queryReducer_1["default"]({
                page: 1
            }, {
                type: 'SET_PAGE',
                payload: 2
            });
            assert_1["default"].equal(updatedState.page, 2);
        });
        it('should not update the filter', function () {
            var initialFilter = {};
            var updatedState = queryReducer_1["default"]({
                filter: initialFilter,
                page: 1
            }, {
                type: 'SET_PAGE',
                payload: 2
            });
            assert_1["default"].equal(updatedState.filter, initialFilter);
        });
    });
    describe('SET_FILTER action', function () {
        it('should add new filter with given value when set', function () {
            var updatedState = queryReducer_1["default"]({}, {
                type: 'SET_FILTER',
                payload: { filter: { title: 'foo' } }
            });
            assert_1["default"].deepEqual(updatedState.filter, { title: 'foo' });
        });
        it('should replace existing filter with given value', function () {
            var updatedState = queryReducer_1["default"]({
                filter: {
                    title: 'foo'
                }
            }, {
                type: 'SET_FILTER',
                payload: { filter: { title: 'bar' } }
            });
            assert_1["default"].deepEqual(updatedState.filter, { title: 'bar' });
        });
        it('should add new filter and displayedFilter with given value when set', function () {
            var updatedState = queryReducer_1["default"]({}, {
                type: 'SET_FILTER',
                payload: {
                    filter: { title: 'foo' },
                    displayedFilters: { title: true }
                }
            });
            assert_1["default"].deepEqual(updatedState.filter, { title: 'foo' });
            assert_1["default"].deepEqual(updatedState.displayedFilters, { title: true });
        });
        it('should reset page to 1', function () {
            var updatedState = queryReducer_1["default"]({ page: 3 }, { type: 'SET_FILTER', payload: {} });
            assert_1["default"].equal(updatedState.page, 1);
        });
    });
    describe('SET_SORT action', function () {
        it('should set SORT_ASC order by default when sort value is new', function () {
            var updatedState = queryReducer_1["default"]({}, {
                type: 'SET_SORT',
                payload: { sort: 'foo' }
            });
            assert_1["default"].deepEqual(updatedState, {
                sort: 'foo',
                order: queryReducer_1.SORT_ASC,
                page: 1
            });
        });
        it('should set order by payload.order value when sort value is new', function () {
            var updatedState = queryReducer_1["default"]({}, {
                type: 'SET_SORT',
                payload: { sort: 'foo', order: queryReducer_1.SORT_DESC }
            });
            assert_1["default"].deepEqual(updatedState, {
                sort: 'foo',
                order: queryReducer_1.SORT_DESC,
                page: 1
            });
        });
        it("should set order as the opposite of the one in previous state when sort hasn't change", function () {
            var updatedState = queryReducer_1["default"]({
                sort: 'foo',
                order: queryReducer_1.SORT_DESC,
                page: 1
            }, {
                type: 'SET_SORT',
                payload: { sort: 'foo' }
            });
            assert_1["default"].deepEqual(updatedState, {
                sort: 'foo',
                order: queryReducer_1.SORT_ASC,
                page: 1
            });
        });
        it("should set order as the opposite of the one in previous state even if order is specified in the payload when sort hasn't change", function () {
            var updatedState = queryReducer_1["default"]({
                sort: 'foo',
                order: queryReducer_1.SORT_DESC,
                page: 1
            }, {
                type: 'SET_SORT',
                payload: { sort: 'foo', order: queryReducer_1.SORT_DESC }
            });
            assert_1["default"].deepEqual(updatedState, {
                sort: 'foo',
                order: queryReducer_1.SORT_ASC,
                page: 1
            });
        });
    });
    describe('SET_PER_PAGE action', function () {
        it('should update per page count', function () {
            var updatedState = queryReducer_1["default"]({
                perPage: 10
            }, {
                type: 'SET_PER_PAGE',
                payload: 25
            });
            assert_1["default"].equal(updatedState.perPage, 25);
        });
        it('should reset page to 1', function () {
            var updatedState = queryReducer_1["default"]({
                page: 5,
                perPage: 10
            }, {
                type: 'SET_PER_PAGE',
                payload: 25
            });
            assert_1["default"].equal(updatedState.page, 1);
        });
    });
});
