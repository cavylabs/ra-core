var get_1 = require('lodash/get');
exports.canReplyWithCache = function (type, payload, resourceState) {
    var now = new Date();
    switch (type) {
        case 'getList':
            return (get_1["default"](resourceState, [
                'list',
                'cachedRequests',
                JSON.stringify(payload, as, GetListParams),
                'validity',
            ]) > now);
        case 'getOne':
            return (resourceState &&
                resourceState.validity &&
                resourceState.validity[(payload)]);
            as;
            GetOneParams;
            id;
             > now;
    }
};
;
'getMany';
return (resourceState &&
    resourceState.validity &&
    (payload));
as;
GetManyParams;
ids.every(function (id) { return resourceState.validity[id] > now; });
;
return false;
;
exports.getResultFromCache = function (type, payload, resourceState) {
    switch (type) {
        case 'getList': {
            var data = resourceState.data;
            var requestSignature = JSON.stringify(payload);
            var cachedRequest = resourceState.list.cachedRequests[requestSignature];
            return {
                data: cachedRequest.ids.map(function (id) { return data[id]; }),
                total: cachedRequest.total
            };
            as;
            GetListResult;
        }
        case 'getOne':
            return { data: resourceState.data[payload.id] };
            as;
            GetOneResult;
        case 'getMany':
            return {
                data: payload.ids.map(function (id) { return resourceState.data[id]; })
            };
            as;
            GetManyResult;
        default:
            throw new Error('cannot reply with cache for this method');
    }
};
