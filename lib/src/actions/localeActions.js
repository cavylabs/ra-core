exports.CHANGE_LOCALE = 'RA/CHANGE_LOCALE';
readonly;
type: typeof exports.CHANGE_LOCALE;
readonly;
payload: string;
exports.changeLocale = function (locale) { return ({
    type: exports.CHANGE_LOCALE,
    payload: locale
}); };
exports.CHANGE_LOCALE_SUCCESS = 'RA/CHANGE_LOCALE_SUCCESS';
readonly;
type: typeof exports.CHANGE_LOCALE_SUCCESS;
readonly;
payload: {
    locale: string;
    messages: any;
}
;
exports.changeLocaleSuccess = function (locale, messages) {
    return ({
        type: exports.CHANGE_LOCALE_SUCCESS,
        payload: {
            locale: locale,
            messages: messages
        }
    });
};
exports.CHANGE_LOCALE_FAILURE = 'RA/CHANGE_LOCALE_FAILURE';
readonly;
type: typeof exports.CHANGE_LOCALE_FAILURE;
readonly;
error: any;
readonly;
payload: {
    locale: string;
}
;
exports.changeLocaleFailure = function (locale, error) {
    return ({
        type: exports.CHANGE_LOCALE_FAILURE,
        error: error,
        payload: {
            locale: locale
        }
    });
};
