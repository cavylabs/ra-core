var getValuesFromRecords_1 = require('./getValuesFromRecords');
describe('getValuesFromRecords', function () {
    it('should return an empty object when passed no record', function () {
        expect(getValuesFromRecords_1["default"]([])).toEqual({});
    });
    it('should return a list of values indexed by key', function () {
        var now = new Date();
        var records = [
            { id: 1, foo: 'bar', dob: now },
            { id: 2, foo: 'baz', dob: now },
        ];
        expect(getValuesFromRecords_1["default"](records)).toEqual({
            id: [1, 2],
            foo: ['bar', 'baz'],
            dob: [now, now]
        });
    });
    it('should acept recods with variable fields', function () {
        var records = [{ a: 1, b: 1, c: 1 }, { b: 2, c: 2, d: 2 }];
        expect(getValuesFromRecords_1["default"](records)).toEqual({
            a: [1],
            b: [1, 2],
            c: [1, 2],
            d: [2]
        });
    });
    it('should keep duplicate values', function () {
        var records = [{ a: 1, b: 1 }, { a: 1, b: 1 }];
        expect(getValuesFromRecords_1["default"](records)).toEqual({
            a: [1, 1],
            b: [1, 1]
        });
    });
});
