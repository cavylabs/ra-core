var react_1 = require('react');
var inflection_1 = require('inflection');
var react_router_dom_1 = require('react-router-dom');
var react_redux_1 = require('react-redux');
var get_1 = require('lodash/get');
var checkMinimumRequiredProps_1 = require('./checkMinimumRequiredProps');
var useListParams_1 = require('./useListParams');
var useRecordSelection_1 = require('./useRecordSelection');
var useVersion_1 = require('./useVersion');
var i18n_1 = require('../i18n');
var queryReducer_1 = require('../reducer/admin/resource/list/queryReducer');
var sideEffect_1 = require('../sideEffect');
var useGetList_1 = require('../dataProvider/useGetList');
var defaultSort = {
    field: 'id',
    order: queryReducer_1.SORT_ASC
};
var defaultData = {};
/**
 * Prepare data for the List view
 *
 * @param {Object} props The props passed to the List component.
 *
 * @return {Object} controllerProps Fetched and computed data for the List view
 *
 * @example
 *
 * import { useListController } from 'react-admin';
 * import ListView from './ListView';
 *
 * const MyList = props => {
 *     const controllerProps = useListController(props);
 *     return <ListView {...controllerProps} {...props} />;
 * }
 */
var useListController = function (props) {
    checkMinimumRequiredProps_1.useCheckMinimumRequiredProps('List', ['basePath', 'resource'], props);
    var basePath = props.basePath, resource = props.resource, hasCreate = props.hasCreate, filterDefaultValues = props.filterDefaultValues, _a = props.sort, sort = _a === void 0 ? defaultSort : _a, _b = props.perPage, perPage = _b === void 0 ? 10 : _b, filter = props.filter, _c = props.debounce, debounce = _c === void 0 ? 500 : _c;
    if (filter && react_1.isValidElement(filter)) {
        throw new Error('<List> received a React element as `filter` props. If you intended to set the list filter elements, use the `filters` (with an s) prop instead. The `filter` prop is internal and should not be set by the developer.');
    }
    var location = react_router_dom_1.useLocation();
    var translate = i18n_1.useTranslate();
    var notify = sideEffect_1.useNotify();
    var version = useVersion_1["default"]();
    var _d = useListParams_1["default"]({
        resource: resource,
        location: location,
        filterDefaultValues: filterDefaultValues,
        sort: sort,
        perPage: perPage,
        debounce: debounce
    }), query = _d[0], queryModifiers = _d[1];
    var _e = useRecordSelection_1["default"](resource), selectedIds = _e[0], selectionModifiers = _e[1];
    /**
     * We want the list of ids to be always available for optimistic rendering,
     * and therefore we need a custom action (CRUD_GET_LIST) that will be used.
     */
    var _f = useGetList_1["default"].apply(void 0, [resource, {
        page: query.page,
        perPage: query.perPage
    }, { field: query.sort, order: query.order }, {}].concat(query.filter, filter)), ids = _f.ids, total = _f.total, loading = _f.loading, loaded = _f.loaded;
}, _a = void 0, CRUD_GET_LIST = _a.action, version = _a.version, error = _a.onFailure;
notify(typeof error === 'string'
    ? error
    : error.message || 'ra.notification.http_error', 'warning'),
;
;
var data = react_redux_1.useSelector(function (state) {
    return get_1["default"](state.admin.resources, [resource, 'data'], defaultData);
});
// When the user changes the page/sort/filter, this controller runs the
// useGetList hook again. While the result of this new call is loading,
// the ids and total are empty. To avoid rendering an empty list at that
// moment, we override the ids and total with the latest loaded ones.
var defaultIds = react_redux_1.useSelector(function (state) {
    return get_1["default"](state.admin.resources, [resource, 'list', 'ids'], []);
});
var defaultTotal = react_redux_1.useSelector(function (state) {
    return get_1["default"](state.admin.resources, [resource, 'list', 'total'], 0);
});
react_1.useEffect(function () {
    if (query.page <= 0 ||
        (!loading && query.page > 1 && (ids || []).length === 0)) {
        // query for a page that doesn't exist, set page to 1
        queryModifiers.setPage(1);
    }
}, [loading, query.page, ids, queryModifiers]);
var currentSort = react_1.useMemo(function () { return ({
    field: query.sort,
    order: query.order
}); }, [query.sort, query.order]);
var resourceName = translate("resources." + resource + ".name", {
    smart_count: 2,
    _: inflection_1["default"].humanize(inflection_1["default"].pluralize(resource))
});
var defaultTitle = translate('ra.page.list', {
    name: resourceName
});
return {
    basePath: basePath,
    currentSort: currentSort,
    data: data,
    defaultTitle: defaultTitle,
    displayedFilters: query.displayedFilters,
    filterValues: query.filterValues,
    hasCreate: hasCreate,
    hideFilter: queryModifiers.hideFilter,
    ids: typeof total === 'undefined' ? defaultIds : ids,
    loaded: loaded || defaultIds.length > 0,
    loading: loading,
    onSelect: selectionModifiers.select,
    onToggleItem: selectionModifiers.toggle,
    onUnselectItems: selectionModifiers.clearSelection,
    page: query.page,
    perPage: query.perPage,
    resource: resource,
    selectedIds: selectedIds,
    setFilters: queryModifiers.setFilters,
    setPage: queryModifiers.setPage,
    setPerPage: queryModifiers.setPerPage,
    setSort: queryModifiers.setSort,
    showFilter: queryModifiers.showFilter,
    total: typeof total === 'undefined' ? defaultTotal : total,
    version: version
};
;
exports.injectedProps = [
    'basePath',
    'currentSort',
    'data',
    'defaultTitle',
    'displayedFilters',
    'filterValues',
    'hasCreate',
    'hideFilter',
    'ids',
    'loading',
    'loaded',
    'onSelect',
    'onToggleItem',
    'onUnselectItems',
    'page',
    'perPage',
    'refresh',
    'resource',
    'selectedIds',
    'setFilters',
    'setPage',
    'setPerPage',
    'setSort',
    'showFilter',
    'total',
    'version',
];
/**
 * Select the props injected by the useListController hook
 * to be passed to the List children need
 * This is an implementation of pick()
 */
exports.getListControllerProps = function (props) {
    return exports.injectedProps.reduce.apply(exports.injectedProps, [function (acc, key) { return ({}); }].concat(acc, [[key], props[key]]));
};
{ }
;
/**
 * Select the props not injected by the useListController hook
 * to be used inside the List children to sanitize props injected by List
 * This is an implementation of omit()
 */
exports.sanitizeListRestProps = function (props) {
    return (_a = Object.keys(props)
        .filter(function (propName) { return !exports.injectedProps.includes(propName); })).reduce.apply(_a, [function (acc, key) { return ({}); }].concat(acc, [[key], props[key]]));
    var _a;
};
{ }
;
exports["default"] = useListController;
