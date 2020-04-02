var renderHook_1 = require('../util/renderHook');
var usePaginationState_1 = require('./usePaginationState');
var react_1 = require('@testing-library/react');
describe('usePaginationState', function () {
    it('should initialize pagination state with default', function () {
        var hookValue = renderHook_1["default"](function () { return usePaginationState_1["default"](); }).hookValue;
        expect(hookValue.pagination).toEqual({ page: 1, perPage: 25 });
    });
    it('should take given page and perPage props to initalize', function () {
        var hookValue = renderHook_1["default"](function () {
            return usePaginationState_1["default"]({ perPage: 50, page: 10 });
        }).hookValue;
        expect(hookValue.pagination).toEqual({ page: 10, perPage: 50 });
    });
    it('should update perPage state when the perPage props update', function () {
        var _a = renderHook_1["default"](function () {
            return usePaginationState_1["default"]({ perPage: 50, page: 10 });
        }), hookValue = _a.hookValue, childrenMock = _a.childrenMock, rerender = _a.rerender;
        expect(hookValue.pagination).toEqual({ page: 10, perPage: 50 });
        rerender(function () { return usePaginationState_1["default"]({ perPage: 100, page: 10 }); });
        expect(childrenMock).toBeCalledTimes(3);
        expect(childrenMock.mock.calls[2][0].pagination).toEqual({
            page: 10,
            perPage: 100
        });
    });
    it('should provide a setPagination function to update the pagination state (page + perPage)', function () {
        var _a = renderHook_1["default"](function () {
            return usePaginationState_1["default"]();
        }), hookValue = _a.hookValue, childrenMock = _a.childrenMock;
        expect(hookValue.pagination).toEqual({ page: 1, perPage: 25 });
        react_1.act(function () { return hookValue.setPagination({ perPage: 100, page: 20 }); });
        expect(childrenMock).toBeCalledTimes(2);
        expect(childrenMock.mock.calls[1][0].pagination).toEqual({
            page: 20,
            perPage: 100
        });
    });
    it('should provide setPage function to update the page state', function () {
        var _a = renderHook_1["default"](function () {
            return usePaginationState_1["default"]();
        }), hookValue = _a.hookValue, childrenMock = _a.childrenMock;
        expect(hookValue.pagination).toEqual({ page: 1, perPage: 25 });
        react_1.act(function () { return hookValue.setPage(20); });
        expect(childrenMock).toBeCalledTimes(2);
        expect(childrenMock.mock.calls[1][0].pagination).toEqual({
            page: 20,
            perPage: 25
        });
    });
    it('should provide a setPerPage function to update the perPage state', function () {
        var _a = renderHook_1["default"](function () {
            return usePaginationState_1["default"]();
        }), hookValue = _a.hookValue, childrenMock = _a.childrenMock;
        expect(hookValue.pagination).toEqual({ page: 1, perPage: 25 });
        react_1.act(function () { return hookValue.setPerPage(100); });
        expect(childrenMock).toBeCalledTimes(2);
        expect(childrenMock.mock.calls[1][0].pagination).toEqual({
            page: 1,
            perPage: 100
        });
    });
});
