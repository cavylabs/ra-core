var assert_1 = require('assert');
var removeKey_1 = require('./removeKey');
describe('removeKey', function () {
    var target = {
        foo: 'bar',
        deep: {
            foo: '',
            deep2: {
                foo: ''
            },
            deep3: {
                foo: '',
                deep4: ''
            }
        }
    };
    it('remove simple key from target', function () {
        assert_1["default"].deepEqual(removeKey_1["default"](target, 'foo'), {
            deep: {
                foo: '',
                deep2: {
                    foo: ''
                },
                deep3: {
                    foo: '',
                    deep4: ''
                }
            }
        });
    });
    it('remove first level deep key from target', function () {
        assert_1["default"].deepEqual(removeKey_1["default"](target, 'deep.foo'), {
            foo: 'bar',
            deep: {
                deep2: {
                    foo: ''
                },
                deep3: {
                    foo: '',
                    deep4: ''
                }
            }
        });
    });
    it('remove deep key from target', function () {
        assert_1["default"].deepEqual(removeKey_1["default"](target, 'deep.deep2.foo'), {
            foo: 'bar',
            deep: {
                foo: '',
                deep3: {
                    foo: '',
                    deep4: ''
                }
            }
        });
    });
    it('remove deep key from target keeping deep object if not empty', function () {
        assert_1["default"].deepEqual(removeKey_1["default"](target, 'deep.deep3.foo'), {
            foo: 'bar',
            deep: {
                foo: '',
                deep2: {
                    foo: ''
                },
                deep3: {
                    deep4: ''
                }
            }
        });
    });
});
