var react_redux_1 = require('react-redux');
var get_1 = require('lodash/get');
var useQueryWithStore_1 = require('./useQueryWithStore');
var defaultData = {};
/**
 * Call the dataProvider.getList() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false }
 * - success: { data: [data from store], ids: [ids from response], total: [total from response], loading: false, loaded: true }
 * - error: { error: [error from response], loading: false, loaded: true }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { title: 'hello, world' }
 * @param {Object} options Options object to pass to the dataProvider. May include side effects to be executed upon success of failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded }.
 *
 * @example
 *
 * import { useGetList } from 'react-admin';
 *
 * const LatestNews = () => {
 *     const { data, ids, loading, error } = useGetList(
 *         'posts',
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' }
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{ids.map(id =>
 *         <li key={id}>{data[id].title}</li>
 *     )}</ul>;
 * };
 */
var useGetList = function (resource, pagination, sort, filter, options) {
    var requestSignature = JSON.stringify({ pagination: pagination, sort: sort, filter: filter });
    var _a = useQueryWithStore_1["default"]({ type: 'getList', resource: resource, payload: { pagination: pagination, sort: sort, filter: filter } }, options, 
    // data selector (may return [])
    // data selector (may return [])
    function (state) {
        return get_1["default"](state.admin.resources, [resource, 'list', 'cachedRequests', requestSignature, 'ids'], []);
    }, 
    // total selector (may return undefined)
    // total selector (may return undefined)
    function (state) {
        return get_1["default"](state.admin.resources, [
            resource,
            'list',
            'cachedRequests',
            requestSignature,
            'total',
        ]);
    }), ids = _a.data, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded;
    var data = react_redux_1.useSelector(function (state) {
        if (!ids)
            return defaultData;
        var allResourceData = get_1["default"](state.admin.resources, [resource, 'data'], defaultData);
        return ids
            .map(function (id) { return allResourceData[id]; })
            .reduce(function (acc, record) {
            if (!record)
                return acc;
            acc[record.id] = record;
            return acc;
        }, {});
    }, react_redux_1.shallowEqual);
    return { data: data, ids: ids, total: total, error: error, loading: loading, loaded: loaded };
};
exports["default"] = useGetList;
