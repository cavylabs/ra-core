var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useTranslate } from '../i18n';
var ValidationError = function (_a) {
    var error = _a.error;
    var translate = useTranslate();
    if (error.message) {
        var _b = error, message = _b.message, args = _b.args;
        return React.createElement(React.Fragment, null, translate(message, __assign({ _: message }, args)));
    }
    return React.createElement(React.Fragment, null, translate(error, { _: error }));
};
export default ValidationError;
