var possibleValues_1 = require('./possibleValues');
describe('possibleValues reducer', function () {
    describe('getPossibleReferenceValues selector', function () {
        it('should return references', function () {
            var state = {
                'foo@bar': [1, 2, 3]
            };
            var props = {
                resource: 'foo',
                source: 'bar',
                referenceSource: function (resource, source) { return (resource + "@" + source); }
            };
            expect(possibleValues_1.getPossibleReferenceValues(state, props)).toEqual([1, 2, 3]);
        });
    });
    describe('getPossibleReferences', function () {
        var referenceState = {
            data: {
                1: { name: 'object name 1' },
                2: { name: 'object name 2' },
                3: { name: 'object name 3' },
                4: { name: 'object name 4' },
                5: { name: 'object name 5' }
            }
        };
        it('should return null if there is no possibleValues available in state', function () {
            var possibleReferences = possibleValues_1.getPossibleReferences(referenceState, null);
            expect(possibleReferences).toEqual(null);
        });
        it('should return an object with error if the possibleValues in state is an error', function () {
            var possibleReferences = possibleValues_1.getPossibleReferences(referenceState, {
                error: 'error message'
            });
            expect(possibleReferences).toEqual({ error: 'error message' });
        });
        it('should return a empty array if the possibleValues in state is empty', function () {
            var possibleReferences = possibleValues_1.getPossibleReferences(referenceState, []);
            expect(possibleReferences).toEqual([]);
        });
        it('should return all formated possibleValues in state if selectedIds param is not set', function () {
            var possibleReferences = possibleValues_1.getPossibleReferences(referenceState, [
                1,
                2,
                4,
            ]);
            expect(possibleReferences).toEqual([
                { name: 'object name 1' },
                { name: 'object name 2' },
                { name: 'object name 4' },
            ]);
        });
        it('should return all formated possibleValues in state if selectedIds param is an empty array', function () {
            var possibleReferences = possibleValues_1.getPossibleReferences(referenceState, [1, 2, 4], []);
            expect(possibleReferences).toEqual([
                { name: 'object name 1' },
                { name: 'object name 2' },
                { name: 'object name 4' },
            ]);
        });
        it('should add selectedIds to the formated possibleValues in state if it is not already in', function () {
            var possibleReferences = possibleValues_1.getPossibleReferences(referenceState, [1, 2, 4], [1, 5]);
            expect(possibleReferences).toEqual([
                { name: 'object name 5' },
                { name: 'object name 1' },
                { name: 'object name 2' },
                { name: 'object name 4' },
            ]);
        });
    });
});
