var inflection_1 = require('inflection');
exports["default"] = function (options) {
    if (!options) {
        return [''];
    }
    var label = options.label, resource = options.resource, source = options.source;
    return typeof label !== 'undefined'
        ? [label, { _: label }]
        : typeof source !== 'undefined'
            ? [
                ("resources." + resource + ".fields." + source),
                {
                    _: inflection_1["default"].transform(source, ['underscore', 'humanize'])
                },
            ]
            : [''];
};
