var expect_1 = require('expect');
var index_1 = require('./index');
describe('TranslationUtils', function () {
    describe('resolveBrowserLocale', function () {
        beforeEach(function () {
            // @ts-ignore
            global.window = {};
        });
        it("should return default locale if there's no available locale in browser", function () {
            // @ts-ignore
            window.navigator = {};
            expect_1["default"](index_1.resolveBrowserLocale()).toEqual(index_1.DEFAULT_LOCALE);
        });
        it('should splice browser language to take first two locale letters', function () {
            // @ts-ignore
            window.navigator = { language: 'en-US' };
            expect_1["default"](index_1.resolveBrowserLocale()).toEqual('en');
        });
    });
    describe('mergeTranslations', function () {
        it('Merge translations modules', function () {
            var defaultMessages = {
                ra: { action: { save: 'Save', edit: 'Edit' } }
            };
            var addonMessages = {
                ra: { tree: { dragPreview: 'Node %id%' } }
            };
            var customPackageWithOverrides = {
                ra: {
                    action: { edit: 'Modify', saveAndAdd: 'Save and add' }
                }
            };
            expect_1["default"](index_1.mergeTranslations(defaultMessages, addonMessages, customPackageWithOverrides)).toEqual({
                ra: {
                    action: {
                        save: 'Save',
                        edit: 'Modify',
                        saveAndAdd: 'Save and add'
                    },
                    tree: { dragPreview: 'Node %id%' }
                }
            });
        });
    });
});
