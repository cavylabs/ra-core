var react_1 = require('react');
var debounce_1 = require('lodash/debounce');
var defaultFilterToQuery = function (v) { return ({ q: v }); };
var emptyFilter = {};
exports["default"] = function (_a) {
    var _b = _a.filterToQuery, filterToQuery = _b === void 0 ? defaultFilterToQuery : _b, _c = _a.permanentFilter, permanentFilter = _c === void 0 ? emptyFilter : _c, _d = _a.debounceTime, debounceTime = _d === void 0 ? 500 : _d;
    var permanentFilterProp = react_1.useRef(permanentFilter);
    var latestValue = react_1.useRef();
    var _e = react_1.useState.apply(void 0, [{}].concat(permanentFilter, filterToQuery(''))), filter = _e[0], setFilterValue = _e[1];
};
;
react_1.useEffect(function () {
    if (permanentFilterProp.current !== permanentFilter) {
        permanentFilterProp.current = permanentFilter;
        setFilterValue.apply(void 0, [{}].concat(permanentFilter, filterToQuery(latestValue.current)));
    }
});
[permanentFilter, permanentFilterProp, filterToQuery];
;
var setFilter = react_1.useCallback(debounce_1["default"](function (value) {
    setFilterValue.apply(void 0, [{}].concat(permanentFilter, filterToQuery(value)));
}));
latestValue.current = value;
debounceTime;
[permanentFilter];
;
return {
    filter: filter,
    setFilter: setFilter
};
;
