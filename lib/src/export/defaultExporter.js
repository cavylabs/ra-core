var dist_1 = require('jsonexport/dist');
var downloadCSV_1 = require('./downloadCSV');
var defaultExporter = function (data, _, __, resource) {
    return dist_1["default"](data, function (err, csv) { return downloadCSV_1["default"](csv, resource); });
};
exports["default"] = defaultExporter;
