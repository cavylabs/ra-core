var redux_1 = require('redux');
var oneToMany_1 = require('./oneToMany');
var possibleValues_1 = require('./possibleValues');
var defaultReducer = function () { return null; };
exports["default"] = redux_1.combineReducers({
    /**
     * ts-jest does some aggressive module mocking when unit testing reducers individually.
     * To avoid 'No reducer provided for key "..."' warnings,
     * we pass default reducers. Sorry for legibility.
     *
     * @see https://stackoverflow.com/questions/43375079/redux-warning-only-appearing-in-tests
     */
    oneToMany: oneToMany_1["default"] || defaultReducer,
    possibleValues: possibleValues_1["default"] || defaultReducer
});
exports.getPossibleReferenceValues = function (state, props) {
    return possibleValues_1.getPossibleReferenceValues(state.possibleValues, props);
};
exports.getPossibleReferences = possibleValues_1.getPossibleReferences;
