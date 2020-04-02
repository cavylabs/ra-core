exports["default"] = function (records) {
    return records.reduce(function (values, record) {
        Object.keys(record).forEach(function (fieldName) {
            if (!values[fieldName]) {
                values[fieldName] = [];
            }
            if (record[fieldName] != null) {
                var value = Array.isArray(record[fieldName])
                    ? [record[fieldName]]
                    : record[fieldName];
                values[fieldName] = values[fieldName].concat(value);
            }
        });
        return values;
    }, {});
};
