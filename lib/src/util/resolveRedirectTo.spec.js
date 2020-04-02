var assert_1 = require('assert');
var resolveRedirectTo_1 = require('./resolveRedirectTo');
describe('resolveRedirectTo', function () {
    it('should accept a view name', function () {
        assert_1["default"].equal(resolveRedirectTo_1["default"]('list', '/books', 1), '/books');
        assert_1["default"].equal(resolveRedirectTo_1["default"]('create', '/books', 1), '/books/create');
        assert_1["default"].equal(resolveRedirectTo_1["default"]('edit', '/books', 1), '/books/1');
        assert_1["default"].equal(resolveRedirectTo_1["default"]('show', '/books', 1), '/books/1/show');
    });
    it('should accept a custom route name', function () {
        assert_1["default"].equal(resolveRedirectTo_1["default"]('home', 'books', 1), 'home');
    });
    it('should accept a function as parameter', function () {
        var redirect = function (basePath, id, data) {
            return ("/related/" + data.related_id + "/show");
        };
        assert_1["default"].equal(resolveRedirectTo_1["default"](redirect, 'books', 1, { related_id: 3 }), '/related/3/show');
    });
});
