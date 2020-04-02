var renderHook_1 = require('../util/renderHook');
var useSortState_1 = require('./useSortState');
var react_1 = require('@testing-library/react');
describe('useSortState', function () {
    it('should initialize sortState with default sort', function () {
        var hookValue = renderHook_1["default"](function () { return useSortState_1["default"](); }).hookValue;
        expect(hookValue.sort).toEqual(useSortState_1.defaultSort);
    });
    it('should initialize sortState with given sort', function () {
        var hookValue = renderHook_1["default"](function () {
            return useSortState_1["default"]({
                field: 'name',
                order: 'ASC'
            });
        }).hookValue;
        expect(hookValue.sort).toEqual({ field: 'name', order: 'ASC' });
    });
    it('should provide setSort method to change the whole sort', function () {
        var _a = renderHook_1["default"](function () {
            return useSortState_1["default"]({ field: 'id', order: 'DESC' });
        }), hookValue = _a.hookValue, childrenMock = _a.childrenMock;
        expect(hookValue.sort).toEqual({ field: 'id', order: 'DESC' });
        react_1.act(function () { return hookValue.setSort({ field: 'name', order: 'ASC' }); });
        expect(childrenMock.mock.calls[1][0].sort).toEqual({
            field: 'name',
            order: 'ASC'
        });
    });
    describe('setSortField in return value', function () {
        it('should just change the order if receiving the current field', function () {
            var _a = renderHook_1["default"](function () {
                return useSortState_1["default"]({ field: 'id', order: 'DESC' });
            }), hookValue = _a.hookValue, childrenMock = _a.childrenMock;
            expect(hookValue.sort).toEqual({ field: 'id', order: 'DESC' });
            react_1.act(function () { return hookValue.setSortField('id'); });
            expect(childrenMock.mock.calls[1][0].sort).toEqual({
                field: 'id',
                order: 'ASC'
            });
        });
        it('should change the field and set the order to ASC if receiving another field', function () {
            var _a = renderHook_1["default"](function () {
                return useSortState_1["default"]({ field: 'id', order: 'ASC' });
            }), hookValue = _a.hookValue, childrenMock = _a.childrenMock;
            expect(hookValue.sort).toEqual({ field: 'id', order: 'ASC' });
            react_1.act(function () { return hookValue.setSortField('name'); });
            expect(childrenMock.mock.calls[1][0].sort).toEqual({
                field: 'name',
                order: 'ASC'
            });
            react_1.act(function () { return hookValue.setSortField('id'); });
            expect(childrenMock.mock.calls[2][0].sort).toEqual({
                field: 'id',
                order: 'ASC'
            });
        });
    });
});
