var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect, useRef, useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
var defaultFilterToQuery = function (v) { return ({ q: v }); };
var emptyFilter = {};
/**
 * Hooks to provide filter state and setFilter which update the query part of the filter
 *
 * @example
 *
 * const { filter, setFilter } = useFilter({
 *      filterToQuery: v => ({ query: v }),
 *      permanentFilter: { foo: 'bar' },
 *      debounceTime: 500,
 * });
 * // filter inital value:
 * {
 *      query: '',
 *      foo: 'bar'
 * }
 *  // after updating filter
 *  setFilter('needle');
 *  {
 *      query: 'needle',
 *      foo: 'bar'
 *  }
 *
 * @param {Object} option
 * @param {Function} option.filterToQuery Function to convert the filter string to a filter object. Defaults to v => ({ q: v }).
 * @param {Object} option.permanentFilter Permanent filter to be merged with the filter string. Defaults to {}.
 * @param {number} option.debounceTime Time in ms between filter updates - used to debounce the search. Defaults to 500ms.
 *
 * @returns {UseFilterStateOptions} The filter props
 */
export default (function (_a) {
    var _b = _a.filterToQuery, filterToQuery = _b === void 0 ? defaultFilterToQuery : _b, _c = _a.permanentFilter, permanentFilter = _c === void 0 ? emptyFilter : _c, _d = _a.debounceTime, debounceTime = _d === void 0 ? 500 : _d;
    var permanentFilterProp = useRef(permanentFilter);
    var latestValue = useRef();
    var _e = useState(__assign(__assign({}, permanentFilter), filterToQuery(''))), filter = _e[0], setFilterValue = _e[1];
    useEffect(function () {
        if (permanentFilterProp.current !== permanentFilter) {
            permanentFilterProp.current = permanentFilter;
            setFilterValue(__assign(__assign({}, permanentFilter), filterToQuery(latestValue.current)));
        }
    }, [permanentFilter, permanentFilterProp, filterToQuery]);
    var setFilter = useCallback(debounce(function (value) {
        setFilterValue(__assign(__assign({}, permanentFilter), filterToQuery(value)));
        latestValue.current = value;
    }, debounceTime), [permanentFilter]);
    return {
        filter: filter,
        setFilter: setFilter,
    };
});
