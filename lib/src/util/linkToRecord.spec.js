var assert_1 = require('assert');
var linkToRecord_1 = require('./linkToRecord');
describe('Linking to a record', function () {
    it('should generate valid edition links by default', function () {
        assert_1["default"].equal(linkToRecord_1["default"]('books', 22), 'books/22');
        assert_1["default"].equal(linkToRecord_1["default"]('books', '/books/13'), 'books/%2Fbooks%2F13');
        assert_1["default"].equal(linkToRecord_1["default"]('blogs', 'https://dunglas.fr'), 'blogs/https%3A%2F%2Fdunglas.fr');
    });
    it('should generate valid show links if requested', function () {
        assert_1["default"].equal(linkToRecord_1["default"]('books', 22, 'show'), 'books/22/show');
        assert_1["default"].equal(linkToRecord_1["default"]('books', '/books/13', 'show'), 'books/%2Fbooks%2F13/show');
        assert_1["default"].equal(linkToRecord_1["default"]('blogs', 'https://dunglas.fr', 'show'), 'blogs/https%3A%2F%2Fdunglas.fr/show');
    });
});
