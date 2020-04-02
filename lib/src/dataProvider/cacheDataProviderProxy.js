var fiveMinutes = 5 * 60 * 1000;
exports["default"] = function (dataProvider, duration) {
    if (duration === void 0) { duration = fiveMinutes; }
    return new Proxy(dataProvider, {
        get: function (target, name) { return function (resource, params) {
            if (name === 'getList' || name === 'getMany' || name === 'getOne') {
                // @ts-ignore
                return dataProvider[name](resource, params).then(function (response) {
                    var validUntil = new Date();
                    validUntil.setTime(validUntil.getTime() + duration);
                    response.validUntil = validUntil;
                    return response;
                });
            }
            return dataProvider[name](resource, params);
        }; }
    });
};
