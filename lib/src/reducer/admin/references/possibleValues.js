var dataActions_1 = require('../../../actions/dataActions');
var initialState = {};
var possibleValuesreducer = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    switch (action.type) {
        case dataActions_1.CRUD_GET_MATCHING_SUCCESS:
            return {};
    }
};
previousState,
    [action.meta.relatedTo];
action.payload.data.map(function (record) { return record.id; }),
;
;
CRUD_GET_MATCHING_FAILURE: return (_a = {
        previousState: previousState
    },
    _a[action.meta.relatedTo] = { error: action.error },
    _a
);
return previousState;
;
exports.getPossibleReferenceValues = function (state, props) {
    return state[props.referenceSource(props.resource, props.source)];
};
exports.getPossibleReferences = function (referenceState, possibleValues, selectedIds) {
    if (selectedIds === void 0) { selectedIds = []; }
    if (!possibleValues) {
        return null;
    }
    if (possibleValues.error) {
        return possibleValues;
    }
    possibleValues = Array.from(possibleValues);
    selectedIds.forEach(function (id) {
        return possibleValues.some(function (value) { return value === id; }) ||
            possibleValues.unshift(id);
    });
    return possibleValues
        .map(function (id) { return referenceState.data[id]; })
        .filter(function (r) { return typeof r !== 'undefined'; });
};
exports["default"] = possibleValuesreducer;
var _a;
