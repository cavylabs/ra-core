var inferElementFromValues_1 = require('./inferElementFromValues');
var getValuesFromRecords_1 = require('./getValuesFromRecords');
exports["default"] = function (records, types) {
    var fieldValues = getValuesFromRecords_1["default"](records);
    return Object.keys(fieldValues)
        .reduce(function (fields, fieldName) {
        return fields.concat(inferElementFromValues_1["default"](fieldName, fieldValues[fieldName], types));
    }, [])
        .filter(function (inferredElement) { return inferredElement.isDefined(); });
};
