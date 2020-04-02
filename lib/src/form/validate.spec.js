var assert_1 = require('assert');
var validate_1 = require('./validate');
describe('Validators', function () {
    var test = function (validator, inputs, message) {
        return assert_1["default"].deepEqual(inputs
            .map(function (input) { return validator(input, null); })
            .map(function (error) { return (error && error.message ? error.message : error); }), Array.apply(void 0, Array(inputs.length)).map(function () { return message; }));
    };
    describe('composeValidators', function () {
        it('Correctly composes validators passed as an array', function () {
            test(validate_1.composeValidators([validate_1.required(), validate_1.minLength(5)]), [''], 'ra.validation.required');
            test(validate_1.composeValidators([validate_1.required(), validate_1.minLength(5)]), ['abcd'], 'ra.validation.minLength');
            test(validate_1.composeValidators([validate_1.required(), validate_1.minLength(5)]), ['abcde'], undefined);
        });
        it('Correctly composes validators passed as many arguments', function () {
            test(validate_1.composeValidators(validate_1.required(), validate_1.minLength(5)), [''], 'ra.validation.required');
            test(validate_1.composeValidators(validate_1.required(), validate_1.minLength(5)), ['abcd'], 'ra.validation.minLength');
            test(validate_1.composeValidators(validate_1.required(), validate_1.minLength(5)), ['abcde'], undefined);
        });
    });
    describe('required', function () {
        it('should return undefined if the value is not empty', function () {
            test(validate_1.required(), ['foo', 12, [1]], undefined);
        });
        it('should return an error message if the value is empty', function () {
            test(validate_1.required(), [undefined, '', null, []], 'ra.validation.required');
        });
        it('should have a `isRequired` prop for allowing the UI to add a required marker', function () {
            expect(validate_1.required().isRequired).toEqual(true);
        });
        it('should allow message to be a callback', function () {
            var message = jest.fn(function () { return 'ra.validation.required'; });
            test(validate_1.required(message), [undefined, '', null, []], 'ra.validation.required');
            expect(message).toHaveBeenCalledTimes(4);
            expect(message).toHaveBeenLastCalledWith({
                args: undefined,
                value: [],
                values: null
            });
        });
    });
    describe('minLength', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.minLength(5), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is not a string', function () {
            test(validate_1.minLength(5), [1234, 123456], undefined);
        });
        it('should return undefined if the value has equal or higher length than the given minimum', function () {
            test(validate_1.minLength(5), ['12345', '123456'], undefined);
        });
        it('should return an error message if the value has smaller length than the given minimum', function () {
            test(validate_1.minLength(5), ['1234', '12'], 'ra.validation.minLength');
        });
        it('should allow message to be a callback', function () {
            var message = jest.fn(function () { return 'ra.validation.minLength'; });
            test(validate_1.minLength(5, message), ['1234', '12'], 'ra.validation.minLength');
            expect(message).toHaveBeenCalledTimes(2);
            expect(message).toHaveBeenLastCalledWith({
                args: { min: 5 },
                value: '12',
                values: null
            });
        });
    });
    describe('maxLength', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.maxLength(5), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is not a string', function () {
            test(validate_1.maxLength(5), [1234, 123456], undefined);
        });
        it('should return undefined if the value has equal or smaller length than the given maximum', function () {
            test(validate_1.maxLength(5), ['12345', '123'], undefined);
        });
        it('should return an error message if the value has higher length than the given maximum', function () {
            test(validate_1.maxLength(10), ['12345678901'], 'ra.validation.maxLength');
        });
        it('should allow message to be a callback', function () {
            var message = jest.fn(function () { return 'ra.validation.maxLength'; });
            test(validate_1.maxLength(10, message), ['12345678901'], 'ra.validation.maxLength');
            expect(message).toHaveBeenCalledTimes(1);
            expect(message).toHaveBeenLastCalledWith({
                args: { max: 10 },
                value: '12345678901',
                values: null
            });
        });
    });
    describe('minValue', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.minValue(5), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is equal or higher than the given minimum', function () {
            test(validate_1.minValue(5), [5, 10, 5.5, '10'], undefined);
        });
        it('should return an error message if the value is lower than the given minimum', function () {
            test(validate_1.minValue(10), [1, 9.5, '5'], 'ra.validation.minValue');
        });
        it('should return an error message if the value is 0', function () {
            test(validate_1.minValue(10), [0], 'ra.validation.minValue');
        });
        it('should allow message to be a callback', function () {
            var message = jest.fn(function () { return 'ra.validation.minValue'; });
            test(validate_1.minValue(10, message), [0], 'ra.validation.minValue');
            expect(message).toHaveBeenCalledTimes(1);
            expect(message).toHaveBeenLastCalledWith({
                args: { min: 10 },
                value: 0,
                values: null
            });
        });
    });
    describe('maxValue', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.maxValue(5), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is equal or less than the given maximum', function () {
            test(validate_1.maxValue(5), [5, 4, 4.5, '4'], undefined);
        });
        it('should return an error message if the value is higher than the given maximum', function () {
            test(validate_1.maxValue(10), [11, 10.5, '11'], 'ra.validation.maxValue');
        });
        it('should return undefined if the value is 0', function () {
            test(validate_1.maxValue(10), [0], undefined);
        });
        it('should allow message to be a callback', function () {
            var message = jest.fn(function () { return 'ra.validation.maxValue'; });
            test(validate_1.maxValue(10, message), [11, 10.5, '11'], 'ra.validation.maxValue');
            expect(message).toHaveBeenCalledTimes(3);
            expect(message).toHaveBeenLastCalledWith({
                args: { max: 10 },
                value: '11',
                values: null
            });
        });
    });
    describe('number', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.number(), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is a number', function () {
            test(validate_1.number(), [123, '123', new Date(), 0, 2.5, -5], undefined);
        });
        it('should return an error message if the value is not a number', function () {
            test(validate_1.number(), ['foo'], 'ra.validation.number');
        });
        it('should allow message to be a callback', function () {
            var message = jest.fn(function () { return 'ra.validation.number'; });
            test(validate_1.number(message), ['foo'], 'ra.validation.number');
            expect(message).toHaveBeenCalledTimes(1);
            expect(message).toHaveBeenLastCalledWith({
                args: undefined,
                value: 'foo',
                values: null
            });
        });
    });
    describe('regex', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.regex(/foo/, 'not foo'), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is not a string', function () {
            test(validate_1.regex(/foo/, 'not foo'), [1234, new Date()], undefined);
        });
        it('should return undefined if the value matches the pattern', function () {
            test(validate_1.regex(/foo/, 'not foo'), ['foobar', 'barfoo', 'barfoobar', 'foofoo'], undefined);
        });
        it('should return an error message if the value does not match the pattern', function () {
            test(validate_1.regex(/foo/, 'not foo'), ['bar', 'barfo', 'hello, world'], 'not foo');
        });
        it('should memoize the validator when the regex pattren and message are the same', function () {
            expect(validate_1.regex(/foo/, 'placeholder')).toBe(validate_1.regex(/foo/, 'placeholder'));
        });
        it('should create new validator when the regex pattren is different', function () {
            expect(validate_1.regex(/foo/, 'placeholder')).not.toBe(validate_1.regex(/notfoo/, 'placeholder'));
        });
        it('should create new validator when message is different', function () {
            expect(validate_1.regex(/foo/, 'placeholder')).not.toBe(validate_1.regex(/foo/, 'another placeholder'));
        });
    });
    describe('email', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.email(), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is not a string', function () {
            test(validate_1.email(), [1234, new Date()], undefined);
        });
        it('should return undefined if the value is a valid email', function () {
            test(validate_1.email(), ['foo@bar.com', 'john.doe@mydomain.co.uk'], undefined);
        });
        it('should return an error if the value is not a valid email', function () {
            test(validate_1.email(), ['foo@bar', 'hello, world'], 'ra.validation.email');
        });
    });
    describe('choices', function () {
        it('should return undefined if the value is empty', function () {
            test(validate_1.choices([1, 2], 'error'), [undefined, '', null], undefined);
        });
        it('should return undefined if the value is in the choice list', function () {
            test(validate_1.choices([1, 2], 'error'), [1, 2], undefined);
        });
        it('should return an error message if the value is not in the choice list', function () {
            test(validate_1.choices([1, 2], 'error'), ['hello', 3], 'error');
        });
    });
});
