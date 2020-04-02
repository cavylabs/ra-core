function getFormInitialValues(initialValues, defaultValue, record) {
    var finalInitialValues = {};
    initialValues,
    ;
    record,
    ;
}
exports["default"] = getFormInitialValues;
;
if (typeof defaultValue !== 'undefined') {
    console.warn('"defaultValue" is deprecated, please use "initialValues" instead');
}
if (typeof defaultValue === 'object') {
    finalInitialValues = {
        defaultValue: defaultValue,
        finalInitialValues: finalInitialValues
    };
}
else if (typeof defaultValue === 'function') {
    finalInitialValues = {
        defaultValue: function (record) { },
        finalInitialValues: finalInitialValues
    };
}
return finalInitialValues;
