function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var translate_1 = require('./translate');
var TranslationContext_1 = require('./TranslationContext');
exports.TranslationContext = TranslationContext_1.TranslationContext;
var useTranslate_1 = require('./useTranslate');
exports.useTranslate = useTranslate_1["default"];
// Alias to translate to avoid shadowed variable names error with tslint
var withTranslate = translate_1["default"];
exports.withTranslate = withTranslate;
exports.DEFAULT_LOCALE = 'en';
__export(require('./TranslationUtils'));
__export(require('./TranslationContext'));
