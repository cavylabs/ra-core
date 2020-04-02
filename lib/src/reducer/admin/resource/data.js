var isEqual_1 = require('lodash/isEqual');
var actions_1 = require('../../../actions');
var core_1 = require('../../../core');
var getFetchedAt_1 = require('../../../util/getFetchedAt');
/**
 * Make the fetchedAt property non enumerable
 */
exports.hideFetchedAt = function (records) {
    Object.defineProperty(records, 'fetchedAt', {
        enumerable: false,
        configurable: false,
        writable: false
    });
    return records;
};
/**
 * Add new records to the pool, and remove outdated ones.
 *
 * This is the equivalent of a stale-while-revalidate caching strategy:
 * The cached data is displayed before fetching, and stale data is removed
 * only once fresh data is fetched.
 */
exports.addRecordsAndRemoveOutdated = function (newRecords, oldRecords) {
    if (newRecords === void 0) { newRecords = []; }
    var newRecordsById = {};
    newRecords.forEach(function (record) { return (newRecordsById[record.id] = record); });
    var newFetchedAt = getFetchedAt_1["default"](newRecords.map(function (_a) {
        var id = _a.id;
        return id;
    }), oldRecords.fetchedAt);
    var records = { fetchedAt: newFetchedAt };
    Object.keys(newFetchedAt).forEach(function (id) {
        return (records[id] = newRecordsById[id]
            ? isEqual_1["default"](newRecordsById[id], oldRecords[id])
                ? oldRecords[id] // do not change the record to avoid a redraw
                : newRecordsById[id]
            : oldRecords[id]);
    });
    return exports.hideFetchedAt(records);
};
/**
 * Add new records to the pool, without touching the other ones.
 */
exports.addRecords = function (newRecords, oldRecords) {
    if (newRecords === void 0) { newRecords = []; }
    var newRecordsById = { oldRecords: oldRecords };
    newRecords.forEach(function (record) {
        newRecordsById[record.id] = isEqual_1["default"](record, oldRecords[record.id])
            ? (oldRecords[record.id]) : as;
        Record;
    });
};
record;
;
var updatedFetchedAt = getFetchedAt_1["default"](newRecords.map(function (_a) {
    var id = _a.id;
    return id;
}), oldRecords.fetchedAt);
Object.defineProperty.apply(Object, [newRecordsById, 'fetchedAt', {
    value: {} }].concat(oldRecords.fetchedAt, updatedFetchedAt, [, enumerable, false]));
return newRecordsById;
;
exports.addOneRecord = function (newRecord, oldRecords, date) {
    if (date === void 0) { date = new Date(); }
    var newRecordsById = {};
};
oldRecords,
    [newRecord.id];
isEqual_1["default"](newRecord, oldRecords[newRecord.id])
    ? oldRecords[newRecord.id] // do not change the record to avoid a redraw
    : newRecord,
;
;
return Object.defineProperty.apply(Object, [newRecordsById, 'fetchedAt', {
    value: {} }].concat(oldRecords.fetchedAt, [[newRecord.id], date, , enumerable, false]));
;
var includesNotStrict = function (items, element) {
    return items.some(function (item) { return item == element; });
};
/**
 * Remove records from the pool
 */
exports.removeRecords = function (removedRecordIds, oldRecords) {
    if (removedRecordIds === void 0) { removedRecordIds = []; }
    var records = (_a = Object.entries(oldRecords)
        .filter(function (_a) {
        var key = _a[0];
        return !includesNotStrict(removedRecordIds, key);
    })).reduce.apply(_a, [function (obj, _a) {
        var key = _a[0], val = _a[1];
        return ({});
    }].concat(obj, [[key], val]));
    var _a;
};
records.fetchedAt = (_a = Object.entries(oldRecords.fetchedAt)
    .filter(function (_a) {
    var key = _a[0];
    return !includesNotStrict(removedRecordIds, key);
})).reduce.apply(_a, [function (obj, _a) {
    var key = _a[0], val = _a[1];
    return ({});
}].concat(obj, [[key], val])), {};
;
return exports.hideFetchedAt(records);
;
var initialState = exports.hideFetchedAt({ fetchedAt: {} });
var dataReducer = function (previousState, _a) {
    if (previousState === void 0) { previousState = initialState; }
    var payload = _a.payload, meta = _a.meta;
    if (meta && meta.optimistic) {
        if (meta.fetch === core_1.UPDATE) {
            var updatedRecord = {};
        }
    }
};
previousState[payload.id],
;
payload.data,
;
;
return exports.addOneRecord(updatedRecord, previousState);
if (meta.fetch === core_1.UPDATE_MANY) {
    var updatedRecords = (_b = payload.ids).map.apply(_b, [function (id) { return ({}); }].concat(previousState[id], payload.data));
}
;
return exports.addRecordsAndRemoveOutdated(updatedRecords, previousState);
if (meta.fetch === core_1.DELETE) {
    return exports.removeRecords([payload.id], previousState);
}
if (meta.fetch === core_1.DELETE_MANY) {
    return exports.removeRecords(payload.ids, previousState);
}
if (!meta || !meta.fetchResponse || meta.fetchStatus !== actions_1.FETCH_END) {
    return previousState;
}
switch (meta.fetchResponse) {
    case core_1.GET_LIST:
        return exports.addRecordsAndRemoveOutdated(payload.data, previousState);
    case core_1.GET_MANY:
    case core_1.GET_MANY_REFERENCE:
        return exports.addRecords(payload.data, previousState);
    case core_1.UPDATE:
    case core_1.CREATE:
    case core_1.GET_ONE:
        return exports.addOneRecord(payload.data, previousState);
    default:
        return previousState;
}
;
exports.getRecord = function (state, id) { return state[id]; };
exports["default"] = dataReducer;
var _a, _b;
