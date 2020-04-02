var assert_1 = require('assert');
var fetch_1 = require('./fetch');
describe('queryParameters', function () {
    it('should generate a query parameter', function () {
        var data = { foo: 'bar' };
        assert_1["default"].equal(fetch_1.queryParameters(data), 'foo=bar');
    });
    it('should generate multiple query parameters', function () {
        var data = { foo: 'fooval', bar: 'barval' };
        var actual = fetch_1.queryParameters(data);
        assert_1["default"](['foo=fooval&bar=barval', 'bar=barval&foo=fooval'].includes(actual));
    });
    it('should generate multiple query parameters with a same name', function () {
        var data = { foo: ['bar', 'baz'] };
        assert_1["default"].equal(fetch_1.queryParameters(data), 'foo=bar&foo=baz');
    });
    it('should generate an encoded query parameter', function () {
        var data = ['foo=bar', 'foo?bar&baz'];
        assert_1["default"].equal(fetch_1.queryParameters((_a = {}, _a[data[0]] = data[1], _a)), data.map(encodeURIComponent).join('='));
        var _a;
    });
});
describe('flattenObject', function () {
    it('should return null with null', function () {
        assert_1["default"].strictEqual(fetch_1.flattenObject(null), null);
    });
    it('should return itself with a string', function () {
        assert_1["default"].equal(fetch_1.flattenObject('foo'), 'foo');
    });
    it('should return itself with an array', function () {
        assert_1["default"].deepEqual(fetch_1.flattenObject(['foo']), ['foo']);
    });
    it('should return a same object with an empty object', function () {
        assert_1["default"].deepEqual(fetch_1.flattenObject({}), {});
    });
    it('should return a same object with a non-nested object', function () {
        var value = { foo: 'fooval', bar: 'barval' };
        assert_1["default"].deepEqual(fetch_1.flattenObject(value), value);
    });
    it('should return a same object with a nested object', function () {
        var input = { foo: 'foo', bar: { baz: 'barbaz' } };
        var expected = { foo: 'foo', 'bar.baz': 'barbaz' };
        assert_1["default"].deepEqual(fetch_1.flattenObject(input), expected);
    });
});
describe('createHeadersFromOptions', function () {
    it('should add a Content-Type header for POST requests', function () {
        var options = {
            method: 'POST'
        };
        var headers = fetch_1.createHeadersFromOptions(options);
        assert_1["default"].strictEqual(headers.get('Content-Type'), 'application/json');
    });
    it('should not add a Content-Type header for GET requests', function () {
        var optionsWithoutMethod = {};
        var optionsWithMethod = {
            method: 'GET'
        };
        var headersWithMethod = fetch_1.createHeadersFromOptions(optionsWithMethod);
        assert_1["default"].strictEqual(headersWithMethod.get('Content-Type'), null);
        var headersWithoutMethod = fetch_1.createHeadersFromOptions(optionsWithoutMethod);
        assert_1["default"].strictEqual(headersWithoutMethod.get('Content-Type'), null);
    });
});
