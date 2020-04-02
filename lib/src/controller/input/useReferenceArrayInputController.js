var react_1 = require('react');
var react_redux_1 = require('react-redux');
var isEqual_1 = require('lodash/isEqual');
var difference_1 = require('lodash/difference');
var dataProvider_1 = require('../../dataProvider');
var useGetMatching_1 = require('../../dataProvider/useGetMatching');
var i18n_1 = require('../../i18n');
var referenceDataStatus_1 = require('./referenceDataStatus');
/**
 * Prepare data for the ReferenceArrayInput components
 *
 * @example
 *
 * const { choices, error, loaded, loading } = useReferenceArrayInputController({
 *      basePath: 'resource';
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} option
 * @param {string} option.basePath basepath to current resource
 * @param {Object} option.record The The current resource record
 * @param {string} option.reference The linked resource name
 * @param {string} option.resource The current resource name
 * @param {string} option.source The key of the linked resource identifier
 *
 * @return {Object} controllerProps Fetched data and callbacks for the ReferenceArrayInput components
 */
var useReferenceArrayInputController = function (_a) {
    var defaultFilter = _a.filter, _b = _a.filterToQuery, filterToQuery = _b === void 0 ? defaultFilterToQuery : _b, input = _a.input, _c = _a.perPage, perPage = _c === void 0 ? 25 : _c, _d = _a.sort, defaultSort = _d === void 0 ? { field: 'id', order: 'DESC' } : _d, options = _a.options, reference = _a.reference, resource = _a.resource, source = _a.source;
    var translate = i18n_1.useTranslate();
    // We store the current input value in a ref so that we are able to fetch
    // only the missing references when the input value changes
    var inputValue = react_1.useRef(input.value);
    var _e = react_1.useState(input.value), idsToFetch = _e[0], setIdsToFetch = _e[1];
    var _f = react_1.useState([]), idsToGetFromStore = _f[0], setIdsToGetFromStore = _f[1];
    var referenceRecordsFromStore = react_redux_1.useSelector(function (state) {
        return idsToGetFromStore.map(function (id) { return state.admin.resources[reference].data[id]; });
    });
    // optimization: we fetch selected items only once. When the user selects more items,
    // as we already have the past selected items in the store, we don't fetch them.
    react_1.useEffect(function () {
        // Only fetch new ids
        var newIdsToFetch = difference_1["default"](input.value, inputValue.current);
        // Only get from store ids selected and already fetched
        var newIdsToGetFromStore = difference_1["default"](input.value, newIdsToFetch);
        /*
            input.value (current)
                +------------------------+
                | ********************** |
                | ********************** |  inputValue.current (old)
                | ********** +-----------------------+
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                +---|--------|------|----+           |
                    |        |      |                |
                    |        |      |                |
                    |        +------|----------------+
                    |               |
            newIdsToFetch    newIdsToGetFromStore
        */
        // Change states each time input values changes to avoid keeping previous values no more selected
        if (!isEqual_1["default"](idsToFetch, newIdsToFetch)) {
            setIdsToFetch(newIdsToFetch);
        }
        if (!isEqual_1["default"](idsToGetFromStore, newIdsToGetFromStore)) {
            setIdsToGetFromStore(newIdsToGetFromStore);
        }
        inputValue.current = input.value;
    }, [
        idsToFetch,
        idsToGetFromStore,
        input.value,
        setIdsToFetch,
        setIdsToGetFromStore,
    ]);
    var _g = react_1.useState({ page: 1, perPage: perPage }), pagination = _g[0], setPagination = _g[1];
    var _h = react_1.useState(defaultSort), sort = _h[0], setSort = _h[1];
    var _j = react_1.useState(''), filter = _j[0], setFilter = _j[1];
    // Ensure sort can be updated through props too, not just by using the setSort function
    react_1.useEffect(function () {
        if (!isEqual_1["default"](defaultSort, sort)) {
            setSort(defaultSort);
        }
    }, [setSort, defaultSort, sort]);
    // Ensure pagination can be updated through props too, not just by using the setPagination function
    react_1.useEffect(function () {
        var newPagination = {
            page: 1,
            perPage: perPage
        };
        if (!isEqual_1["default"](newPagination, pagination)) {
            setPagination(newPagination);
        }
    }, [setPagination, perPage, pagination]);
    // Merge the user filters with the default ones
    var finalFilter = react_1.useMemo.apply(void 0, [function () { return ({}); }].concat(defaultFilter, filterToQuery(filter)));
}, _a = void 0, defaultFilter = _a[0], filter = _a[1], filterToQuery = _a[2];
;
var _b = dataProvider_1.useGetMany(reference, idsToFetch || []), referenceRecordsFetched = _b.data, loaded = _b.loaded;
var referenceRecords = referenceRecordsFetched
    ? referenceRecordsFetched.concat(referenceRecordsFromStore)
    : referenceRecordsFromStore;
// filter out not found references - happens when the dataProvider doesn't guarantee referential integrity
var finalReferenceRecords = referenceRecords.filter(Boolean);
var matchingReferences = useGetMatching_1["default"](reference, pagination, sort, finalFilter, source, resource, options).data;
// We merge the currently selected records with the matching ones, otherwise
// the component displaying the currently selected records may fail
var finalMatchingReferences = matchingReferences && matchingReferences.length > 0
    ? mergeReferences(matchingReferences, finalReferenceRecords)
    : finalReferenceRecords.length > 0
        ? finalReferenceRecords
        : matchingReferences;
var dataStatus = referenceDataStatus_1.getStatusForArrayInput({
    input: input,
    matchingReferences: finalMatchingReferences,
    referenceRecords: finalReferenceRecords,
    translate: translate
});
return {
    choices: dataStatus.choices,
    error: dataStatus.error,
    loaded: loaded,
    loading: dataStatus.waiting,
    setFilter: setFilter,
    setPagination: setPagination,
    setSort: setSort,
    warning: dataStatus.warning
};
;
// concatenate and deduplicate two lists of records
var mergeReferences = function (ref1, ref2) {
    var res = ref1.slice();
    var ids = ref1.map(function (ref) { return ref.id; });
    ref2.forEach(function (ref) {
        if (!ids.includes(ref.id)) {
            ids.push(ref.id);
            res.push(ref);
        }
    });
    return res;
};
exports["default"] = useReferenceArrayInputController;
var defaultFilterToQuery = function (searchText) { return ({ q: searchText }); };
