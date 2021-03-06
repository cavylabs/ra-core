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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useField as useFinalFormField, } from 'react-final-form';
import { composeValidators } from './validate';
import isRequired from './isRequired';
import { useCallback } from 'react';
var useInput = function (_a) {
    var defaultValue = _a.defaultValue, id = _a.id, name = _a.name, source = _a.source, validate = _a.validate, customOnBlur = _a.onBlur, customOnChange = _a.onChange, customOnFocus = _a.onFocus, options = __rest(_a, ["defaultValue", "id", "name", "source", "validate", "onBlur", "onChange", "onFocus"]);
    var finalName = name || source;
    var sanitizedValidate = Array.isArray(validate)
        ? composeValidators(validate)
        : validate;
    var _b = useFinalFormField(finalName, __assign({ initialValue: defaultValue, validate: sanitizedValidate }, options)), input = _b.input, meta = _b.meta;
    // Extract the event handlers so that we can provide ours
    // allowing users to provide theirs without breaking the form
    var onBlur = input.onBlur, onChange = input.onChange, onFocus = input.onFocus, inputProps = __rest(input, ["onBlur", "onChange", "onFocus"]);
    var handleBlur = useCallback(function (event) {
        onBlur(event);
        if (typeof customOnBlur === 'function') {
            customOnBlur(event);
        }
    }, [onBlur, customOnBlur]);
    var handleChange = useCallback(function (event) {
        onChange(event);
        if (typeof customOnChange === 'function') {
            customOnChange(event);
        }
    }, [onChange, customOnChange]);
    var handleFocus = useCallback(function (event) {
        onFocus(event);
        if (typeof customOnFocus === 'function') {
            customOnFocus(event);
        }
    }, [onFocus, customOnFocus]);
    // If there is an input prop, this input has already been enhanced by final-form
    // This is required in for inputs used inside other inputs (such as the SelectInput inside a ReferenceInput)
    if (options.input) {
        return {
            id: id || source,
            input: options.input,
            meta: options.meta,
            isRequired: isRequired(validate),
        };
    }
    return {
        id: id || source,
        input: __assign(__assign({}, inputProps), { onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus }),
        meta: meta,
        isRequired: isRequired(validate),
    };
};
export default useInput;
