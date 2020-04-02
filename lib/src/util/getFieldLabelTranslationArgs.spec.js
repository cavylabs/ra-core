var assert_1 = require('assert');
var getFieldLabelTranslationArgs_1 = require('./getFieldLabelTranslationArgs');
describe('getFieldLabelTranslationArgs', function () {
    it('should return empty span by default', function () {
        return assert_1["default"].deepEqual(getFieldLabelTranslationArgs_1["default"](), ['']);
    });
    it('should return the label when given', function () {
        return assert_1["default"].deepEqual(getFieldLabelTranslationArgs_1["default"]({
            label: 'foo',
            resource: 'posts',
            source: 'title'
        }), ['foo', { _: 'foo' }]);
    });
    it('should return the humanized source when given', function () {
        assert_1["default"].deepEqual(getFieldLabelTranslationArgs_1["default"]({
            resource: 'posts',
            source: 'title'
        }), ["resources.posts.fields.title", { _: 'Title' }]);
        assert_1["default"].deepEqual(getFieldLabelTranslationArgs_1["default"]({
            resource: 'posts',
            source: 'title_with_underscore'
        }), [
            "resources.posts.fields.title_with_underscore",
            { _: 'Title with underscore' },
        ]);
        assert_1["default"].deepEqual(getFieldLabelTranslationArgs_1["default"]({
            resource: 'posts',
            source: 'titleWithCamelCase'
        }), [
            "resources.posts.fields.titleWithCamelCase",
            { _: 'Title with camel case' },
        ]);
    });
    it('should return the source and resource as translate key', function () {
        return assert_1["default"].deepEqual(getFieldLabelTranslationArgs_1["default"]({
            resource: 'posts',
            source: 'title'
        }), ["resources.posts.fields.title", { _: 'Title' }]);
    });
});
