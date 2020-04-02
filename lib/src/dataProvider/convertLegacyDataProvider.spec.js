var expect_1 = require('expect');
var convertLegacyDataProvider_1 = require('./convertLegacyDataProvider');
describe('convertLegacyDataProvider', function () {
    it('should return a function allowing old style calls', function () {
        var legacyProvider = jest.fn();
        var convertedProvider = convertLegacyDataProvider_1["default"](legacyProvider);
        convertedProvider('GET_LIST', 'posts', { filter: { foo: 'bar' } });
        expect_1["default"](legacyProvider).toHaveBeenCalledWith('GET_LIST', 'posts', {
            filter: { foo: 'bar' }
        });
    });
    it('should return an object allowing new style calls', function () {
        var legacyProvider = jest.fn();
        var convertedProvider = convertLegacyDataProvider_1["default"](legacyProvider);
        convertedProvider.getList('posts', { filter: { foo: 'bar' } });
        expect_1["default"](legacyProvider).toHaveBeenCalledWith('GET_LIST', 'posts', {
            filter: { foo: 'bar' }
        });
    });
});
