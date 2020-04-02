var getValue_1 = require('./getValue');
var expect_1 = require('expect');
describe('getValue', function () {
    it('returns directly the value if it is not an object', function () {
        expect_1["default"](getValue_1["default"](10, 'foo.bar')).toEqual(10);
    });
    it('returns the value at specified path if it is an object', function () {
        expect_1["default"](getValue_1["default"]({ foo: { bar: 10 } }, 'foo.bar')).toEqual(10);
    });
});
