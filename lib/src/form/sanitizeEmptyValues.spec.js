var expect_1 = require('expect');
var sanitizeEmptyValues_1 = require('./sanitizeEmptyValues');
describe('sanitizeEmptyValues', function () {
    it('should set null or undefined values to null', function () {
        expect_1["default"](sanitizeEmptyValues_1["default"]({ foo: 23 }, {})).toEqual({ foo: null });
        expect_1["default"](sanitizeEmptyValues_1["default"]({ foo: 'hello' }, {})).toEqual({
            foo: null
        });
        expect_1["default"](sanitizeEmptyValues_1["default"]({ foo: new Date() }, {})).toEqual({
            foo: null
        });
        expect_1["default"](sanitizeEmptyValues_1["default"]({ foo: { bar: 2 } }, {})).toEqual({
            foo: null
        });
    });
    it('should set null or undefined deep values to null', function () {
        expect_1["default"](sanitizeEmptyValues_1["default"]({ foo: { bar: 1 } }, { foo: {} })).toEqual({
            foo: { bar: null }
        });
    });
    it('should accept string values', function () {
        var str = 'hello';
        expect_1["default"](sanitizeEmptyValues_1["default"]({ str: null }, { str: str })).toEqual({ str: str });
        expect_1["default"](sanitizeEmptyValues_1["default"]({}, { str: str })).toEqual({ str: str });
    });
    it('should accept date values', function () {
        var date = new Date();
        expect_1["default"](sanitizeEmptyValues_1["default"]({ date: null }, { date: date })).toEqual({ date: date });
        expect_1["default"](sanitizeEmptyValues_1["default"]({}, { date: date })).toEqual({ date: date });
    });
    it('should accept array values', function () {
        var arr = [1, 2, 3];
        expect_1["default"](sanitizeEmptyValues_1["default"]({ arr: null }, { arr: arr })).toEqual({ arr: arr });
        expect_1["default"](sanitizeEmptyValues_1["default"]({}, { arr: arr })).toEqual({ arr: arr });
    });
    it('should accept object values', function () {
        var obj = { foo: 1 };
        expect_1["default"](sanitizeEmptyValues_1["default"]({ obj: null }, { obj: obj })).toEqual({ obj: obj });
        expect_1["default"](sanitizeEmptyValues_1["default"]({}, { obj: obj })).toEqual({ obj: obj });
    });
    it('should accept deep object values', function () {
        var obj = { foo: { bar: 1 } };
        expect_1["default"](sanitizeEmptyValues_1["default"]({ obj: { foo: null, foo2: 2 } }, { obj: obj })).toEqual({ obj: { foo: { bar: 1 }, foo2: null } });
    });
    it("should not ignore initial value when it's not of the same type", function () {
        var initialValues = { a: 'foobar' };
        var values = { a: { hello: 'world' } };
        expect_1["default"](sanitizeEmptyValues_1["default"](initialValues, values)).toEqual({
            a: { hello: 'world' }
        });
        expect_1["default"](sanitizeEmptyValues_1["default"](values, initialValues)).toEqual({
            a: 'foobar'
        });
    });
});
