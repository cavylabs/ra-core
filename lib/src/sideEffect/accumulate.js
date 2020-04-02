var effects_1 = require('redux-saga/effects');
/**
 * Distinct reducer on ids
 *
 * @example
 * addIds([1, 2, 3], { payload: { ids: [3, 4] } })
 *   => [1, 2, 3, 4]
 */
var addIds = function (oldIds, _a) {
    var ids = _a.payload.ids;
    // Using a Set ensure we only keep distinct values
    var oldIdsSet = new Set(oldIds);
    ids.forEach(function (id) { return oldIdsSet.add(id); });
    return Array.from(oldIdsSet);
};
// We need a factory for this saga in order to unit test it by providing its context (current tasks and accumulations)
exports.finalizeFactory = function (tasks, accumulations) {
    /**
     * Fetch the accumulated value after a delay
     *
     * As this gets canceled by subsequent calls to accumulate(), only the last
     * call to finalize() will not be canceled. The delay acts as a
     * debounce.
     *
     * @see https://redux-saga.js.org/docs/recipes/#debouncing
     */
    return 
    /**
     * Fetch the accumulated value after a delay
     *
     * As this gets canceled by subsequent calls to accumulate(), only the last
     * call to finalize() will not be canceled. The delay acts as a
     * debounce.
     *
     * @see https://redux-saga.js.org/docs/recipes/#debouncing
     */
    /**
     * Fetch the accumulated value after a delay
     *
     * As this gets canceled by subsequent calls to accumulate(), only the last
     * call to finalize() will not be canceled. The delay acts as a
     * debounce.
     *
     * @see https://redux-saga.js.org/docs/recipes/#debouncing
     */
    function finalize(key, actionCreator) {
        // combined with cancel(), this debounces the calls
        yield effects_1.delay(50);
        // Get the latest accumulated value for the provided key
        var accumulatedValue = accumulations[key];
        // Remove the latest accumulated value so that they do not interfere with later calls
        delete accumulations[key];
        // For backward compatibility, we pass the key (which may be a resource name) as the first parameter
        var action = actionCreator(key, accumulatedValue);
        yield effects_1.put(action);
        delete tasks[key];
    };
};
// We need a factory for this saga in order to unit test it by providing its context (current tasks and accumulations)
exports.accumulateFactory = function (tasks, accumulations, finalize) {
    /**
     * Accumulate actions and eventually redispatch an action with the accumulated payload
     *
     * @example
     * accumulate({
     *    type: CRUD_GET_MANY_ACCUMULATE,
     *    payload: { ids: [1, 2, 3], resource: 'posts' },
     *    meta: { accumulate: crudGetMany }
     * });
     * accumulate({
     *    type: CRUD_GET_MANY_ACCUMULATE,
     *    payload: { ids: [4, 5], resource: 'posts' },
     *    meta: { accumulate: crudGetMany }
     * });
     *   => crudGetMany({ ids: [1, 2, 3, 4, 5], resource: 'posts' })
     *
     * @example
     * accumulate({
     *    type: CRUD_GET_MATCHING_ACCUMULATE,
     *    meta: {
     *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
     *      accumulateValues: () => true,
     *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
     *    }
     * });
     * accumulate({
     *    type: CRUD_GET_MATCHING_ACCUMULATE,
     *    meta: {
     *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
     *      accumulateValues: () => true,
     *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
     *    }
     * });
     *   => crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {})
     */
    return 
    /**
     * Accumulate actions and eventually redispatch an action with the accumulated payload
     *
     * @example
     * accumulate({
     *    type: CRUD_GET_MANY_ACCUMULATE,
     *    payload: { ids: [1, 2, 3], resource: 'posts' },
     *    meta: { accumulate: crudGetMany }
     * });
     * accumulate({
     *    type: CRUD_GET_MANY_ACCUMULATE,
     *    payload: { ids: [4, 5], resource: 'posts' },
     *    meta: { accumulate: crudGetMany }
     * });
     *   => crudGetMany({ ids: [1, 2, 3, 4, 5], resource: 'posts' })
     *
     * @example
     * accumulate({
     *    type: CRUD_GET_MATCHING_ACCUMULATE,
     *    meta: {
     *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
     *      accumulateValues: () => true,
     *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
     *    }
     * });
     * accumulate({
     *    type: CRUD_GET_MATCHING_ACCUMULATE,
     *    meta: {
     *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
     *      accumulateValues: () => true,
     *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
     *    }
     * });
     *   => crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {})
     */
    /**
     * Accumulate actions and eventually redispatch an action with the accumulated payload
     *
     * @example
     * accumulate({
     *    type: CRUD_GET_MANY_ACCUMULATE,
     *    payload: { ids: [1, 2, 3], resource: 'posts' },
     *    meta: { accumulate: crudGetMany }
     * });
     * accumulate({
     *    type: CRUD_GET_MANY_ACCUMULATE,
     *    payload: { ids: [4, 5], resource: 'posts' },
     *    meta: { accumulate: crudGetMany }
     * });
     *   => crudGetMany({ ids: [1, 2, 3, 4, 5], resource: 'posts' })
     *
     * @example
     * accumulate({
     *    type: CRUD_GET_MATCHING_ACCUMULATE,
     *    meta: {
     *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
     *      accumulateValues: () => true,
     *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
     *    }
     * });
     * accumulate({
     *    type: CRUD_GET_MATCHING_ACCUMULATE,
     *    meta: {
     *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
     *      accumulateValues: () => true,
     *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
     *    }
     * });
     *   => crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {})
     */
    function accumulate(action) {
        // For backward compatibility, if no accumulateKey is provided, we fallback to the resource
        var key = action.meta.accumulateKey || action.payload.resource;
        if (tasks[key]) {
            yield effects_1.cancel(tasks[key]);
        }
        // For backward compatibility, if no accumulateValues function is provided, we fallback to the old
        // addIds function (used by the crudGetManyAccumulate action for example)
        var accumulateValues = action.meta.accumulateValues || addIds;
        // accumulateValues is a reducer function, it receives the previous accumulatedValues for
        // the provided key, and must return the updated accumulatedValues
        accumulations[key] = accumulateValues(accumulations[key], action);
        tasks[key] = yield effects_1.fork(finalize, key, action.meta.accumulate);
    };
};
function default_1() {
    /**
     * Example
     *
     * const accumulations = {
     *   posts: [4, 7, 345 ], // a CRUD_GET_MANY_ACCUMULATE action
     *   authors: [23, 47, 78 ], // another CRUD_GET_MANY_ACCUMULATE action
     *   '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}': true, // a CRUD_GET_MATCHING_ACCUMULATE action
     *   '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{"hasValidEmail":true}}': true, // another CRUD_GET_MATCHING_ACCUMULATE action
     * }
     */
    var accumulations = {};
    var tasks = {};
    yield effects_1.takeEvery(function (action) { return action.meta && action.meta.accumulate; }, exports.accumulateFactory(tasks, accumulations, exports.finalizeFactory(tasks, accumulations)));
}
exports["default"] = default_1;
