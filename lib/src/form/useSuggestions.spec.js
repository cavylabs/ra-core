var expect_1 = require('expect');
var useSuggestions_1 = require('./useSuggestions');
describe('getSuggestions', function () {
    var choices = [
        { id: 1, value: 'one' },
        { id: 2, value: 'two' },
        { id: 3, value: 'three' },
    ];
    var defaultOptions = {
        choices: choices,
        allowEmpty: false,
        emptyText: '',
        emptyValue: null,
        getChoiceText: function (_a) {
            var value = _a.value;
            return value;
        },
        getChoiceValue: function (_a) {
            var id = _a.id;
            return id;
        },
        limitChoicesToValue: false,
        matchSuggestion: undefined,
        optionText: 'value',
        optionValue: 'id',
        selectedItem: undefined
    };
    it('should return all suggestions when filtered by empty string', function () {
        expect_1["default"](useSuggestions_1.getSuggestionsFactory(defaultOptions)('')).toEqual(choices);
    });
    it('should filter choices according to the filter argument', function () {
        expect_1["default"](useSuggestions_1.getSuggestionsFactory(defaultOptions)('o')).toEqual([
            { id: 1, value: 'one' },
            { id: 2, value: 'two' },
        ]);
        expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [choices, [{ id: 0, value: '0' }, { id: 1, value: 'one' }]])));
    })('0');
}).toEqual([{ id: 0, value: '0' }]);
;
it('should filter choices according to the filter argument when it contains RegExp reserved characters', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [choices, [
        { id: 1, value: '**one' },
        { id: 2, value: 'two' },
        { id: 3, value: 'three' },
    ]])));
})('**o');
toEqual([{ id: 1, value: '**one' }]);
;
it('should filter choices according to the currently selected values if selectedItem is an array', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [selectedItem, [choices[0]]])));
})('');
toEqual(choices.slice(1));
;
it('should not filter choices according to the currently selected value if selectedItem is not an array and limitChoicesToValue is false', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [limitChoicesToValue, false, selectedItem, choices[0]])));
})('o'); // should not filter 'two'
toEqual([{ id: 2, value: 'two' }, { id: 3, value: 'three' }]);
;
it('should filter choices according to the currently selected value if selectedItem is not an array and limitChoicesToValue is true', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [limitChoicesToValue, true, selectedItem, choices[0]])));
})('one');
toEqual([choices[0]]);
;
it('should add emptySuggestion if allowEmpty is true', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [allowEmpty, true])));
})('');
toEqual([
    { id: null, value: '' },
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three' },
]);
;
it('should limit the number of choices', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [suggestionLimit, 2])));
})('');
toEqual([{ id: 1, value: 'one' }, { id: 2, value: 'two' }]);
expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [suggestionLimit, 2, allowEmpty, true]))('')).toEqual([
    { id: null, value: '' },
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
]);
;
it('should return all choices on empty/falsy values', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory(defaultOptions)(undefined)).toEqual(choices);
    expect_1["default"](useSuggestions_1.getSuggestionsFactory(defaultOptions)(false)).toEqual(choices);
    expect_1["default"](useSuggestions_1.getSuggestionsFactory(defaultOptions)(null)).toEqual(choices);
});
it('should return all choices if allowDuplicates is true', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [allowDuplicates, true, selectedItem, choices[0]])));
})('');
toEqual([
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three' },
]);
;
it('should return all the filtered choices if allowDuplicates is true', function () {
    expect_1["default"](useSuggestions_1.getSuggestionsFactory.apply(void 0, [{}].concat(defaultOptions, [allowDuplicates, true, selectedItem, [choices[0]]])));
})('o');
toEqual([{ id: 1, value: 'one' }, { id: 2, value: 'two' }]);
;
;
