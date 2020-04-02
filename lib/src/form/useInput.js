var react_final_form_1 = require('react-final-form');
var validate_1 = require('./validate');
var react_1 = require('react');
 | 'children'
    > {
        source: string,
        name: string,
        id: string,
        defaultValue: any,
        validate: Validator | Validator[],
        onBlur: function (event) { return void ; },
        onChange: function (event) { return void ; },
        onFocus: function (event) { return void ; },
        options: T,
        input: react_final_form_1.FieldInputProps(),
        meta: any
    };
var useInput = ({
    defaultValue: defaultValue,
    id: id,
    name: name,
    source: source,
    validate: validate,
    onBlur: customOnBlur,
    onChange: customOnChange,
    onFocus: customOnFocus });
options;
InputProps;
(function (ComputedInputProps) {
    var finalName = name || source;
    var sanitizedValidate = Array.isArray(validate)
        ? validate_1.composeValidators(validate)
        : validate;
    var _a = react_final_form_1.useField.apply(void 0, [finalName, {
        initialValue: defaultValue,
        validate: sanitizedValidate }].concat(options)), input = _a.input, meta = _a.meta;
});
;
// Extract the event handlers so that we can provide ours
// allowing users to provide theirs without breaking the form
var onBlur = input.onBlur, onChange = input.onChange, onFocus = input.onFocus, inputProps = input.inputProps;
var handleBlur = react_1.useCallback(function (event) {
    onBlur(event);
    if (typeof customOnBlur === 'function') {
        customOnBlur(event);
    }
}, [onBlur, customOnBlur]);
var handleChange = react_1.useCallback(function (event) {
    onChange(event);
    if (typeof customOnChange === 'function') {
        customOnChange(event);
    }
}, [onChange, customOnChange]);
var handleFocus = react_1.useCallback(function (event) {
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
        isRequired: isRequired_1["default"](validate)
    };
}
return {
    id: id || source,
    input: {
        inputProps: inputProps,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: handleFocus
    },
    meta: meta,
    isRequired: isRequired_1["default"](validate)
};
;
exports["default"] = useInput;
