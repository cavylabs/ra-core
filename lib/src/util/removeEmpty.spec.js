var assert_1 = require('assert');
var removeEmpty_1 = require('./removeEmpty');
describe('removeEmpty', function () {
    it('should not remove any properties with no empty values', function () {
        var obj = { foo: 'fooval', bar: 'barval' };
        assert_1["default"].deepEqual(removeEmpty_1["default"].apply(void 0, [{}].concat(obj)));
    }), obj;
});
;
it('should remove the empty values with empty values', function () {
    var input = { foo: '', bar: null };
    assert_1["default"].deepEqual(removeEmpty_1["default"](input), {});
});
it('should remove whole empty object with a nested empty value', function () {
    var input = { foo: 'val', bar: { baz: '' } };
    assert_1["default"].deepEqual(removeEmpty_1["default"](input), { foo: 'val' });
});
it('should preserve dates', function () {
    var date = new Date();
    var input = { foo: 'val', bar: { baz: '' }, date: date };
    assert_1["default"].deepEqual(removeEmpty_1["default"](input), { foo: 'val', date: date });
});
;
