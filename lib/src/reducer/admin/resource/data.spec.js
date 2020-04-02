var assert_1 = require('assert');
var core_1 = require('../../../core');
var getFetchedAt_1 = require('../../../util/getFetchedAt');
var data_1 = require('./data');
var actions_1 = require('../../../actions');
jest.mock('../../../util/getFetchedAt');
describe('data reducer', function () {
    describe('addRecordsAndRemoveOutdated', function () {
        it('should call getFetchedAt with newRecords ids and oldRecordFetchedAt and return records returned by getFetchedAt', function () {
            var newRecords = [{ id: 'record1' }, { id: 'record2' }];
            var oldFetchedAt = {};
            var date1 = new Date();
            var date2 = new Date();
            var oldRecords = {
                fetchedAt: oldFetchedAt
            };
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                record1: date1,
                record2: date2
            }); });
            var newState = data_1.addRecordsAndRemoveOutdated(newRecords, oldRecords);
            // @ts-ignore
            assert_1["default"].deepEqual(getFetchedAt_1["default"].mock.calls[0], [
                ['record1', 'record2'],
                oldFetchedAt,
            ]);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1' },
                record2: { id: 'record2' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: date1,
                record2: date2
            });
        });
        it('should discard record that do not have their ids returned by getFetchedAt', function () {
            var newRecords = [{ id: 'record1' }, { id: 'record2' }];
            var oldRecords = {
                record3: { id: 'record3' },
                fetchedAt: { record3: new Date() }
            };
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                record1: new Date(),
                record2: new Date()
            }); });
            var newState = data_1.addRecordsAndRemoveOutdated(newRecords, oldRecords);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1' },
                record2: { id: 'record2' }
            });
        });
        it('should keep record that have their ids returned by getFetchedAt', function () {
            var newRecords = [{ id: 'record1' }, { id: 'record2' }];
            var oldRecords = {
                record3: { id: 'record3' },
                fetchedAt: { record3: new Date() }
            };
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                record1: new Date(),
                record2: new Date(),
                record3: new Date()
            }); });
            var newState = data_1.addRecordsAndRemoveOutdated(newRecords, oldRecords);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1' },
                record2: { id: 'record2' },
                record3: { id: 'record3' }
            });
        });
        it('should replace oldRecord by new record', function () {
            var newRecords = [
                { id: 'record1', title: 'new title' },
                { id: 'record2' },
            ];
            var oldRecords = {
                record1: { id: 'record1', title: 'old title' },
                fetchedAt: { record1: new Date() }
            };
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                record1: new Date(),
                record2: new Date()
            }); });
            var newState = data_1.addRecordsAndRemoveOutdated(newRecords, oldRecords);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', title: 'new title' },
                record2: { id: 'record2' }
            });
        });
    });
    describe('addRecords', function () {
        it('should add new records without changing the old ones', function () {
            var now = new Date();
            var before = new Date(0);
            var newRecords = [
                { id: 'new_record1', title: 'new title 1' },
                { id: 'new_record2', title: 'new title 2' },
            ];
            var oldRecords = {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                fetchedAt: { record1: before, record2: before }
            };
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                new_record1: now,
                new_record2: now
            }); });
            var newState = data_1.addRecords(newRecords, oldRecords);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                new_record1: { id: 'new_record1', title: 'new title 1' },
                new_record2: { id: 'new_record2', title: 'new title 2' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: before,
                record2: before,
                new_record1: now,
                new_record2: now
            });
        });
        it('should update existion records without changing the other ones', function () {
            var now = new Date();
            var before = new Date(0);
            var newRecords = [
                { id: 'new_record1', title: 'new title 1' },
                { id: 'record2', title: 'updated title 2' },
            ];
            var oldRecords = {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                fetchedAt: { record1: before, record2: before }
            };
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                new_record1: now,
                record2: now
            }); });
            var newState = data_1.addRecords(newRecords, oldRecords);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'updated title 2' },
                new_record1: { id: 'new_record1', title: 'new title 1' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: before,
                record2: now,
                new_record1: now
            });
        });
        it('should reuse oldRecord if new record is the same', function () {
            var now = new Date();
            var before = new Date(0);
            var newRecords = [
                { id: 'record1', title: 'title 1' },
            ];
            var oldRecords = {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                fetchedAt: { record1: before, record2: before }
            };
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                record1: now
            }); });
            var newState = data_1.addRecords(newRecords, oldRecords);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' }
            });
            assert_1["default"].equal(newState.record1, oldRecords.record1);
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: now,
                record2: before
            });
        });
    });
    describe('addOneRecord', function () {
        it('should add given record without changing the others', function () {
            var now = new Date();
            var before = new Date(0);
            var newRecord = { id: 'new_record', title: 'new title' };
            var oldRecords = {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                fetchedAt: { record1: before, record2: before }
            };
            var newState = data_1.addOneRecord(newRecord, oldRecords, now);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                new_record: { id: 'new_record', title: 'new title' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: before,
                record2: before,
                new_record: now
            });
        });
        it('should update given record without changing the others', function () {
            var now = new Date();
            var before = new Date(0);
            var newRecord = { id: 'record1', title: 'new title' };
            var oldRecords = {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                fetchedAt: { record1: before, record2: before }
            };
            var newState = data_1.addOneRecord(newRecord, oldRecords, now);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', title: 'new title' },
                record2: { id: 'record2', title: 'title 2' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: now,
                record2: before
            });
        });
    });
    describe('removeRecords', function () {
        it('should remove the records passed as arguments when using integer ids', function () {
            var before = new Date(0);
            var oldRecords = {
                0: { id: 0, title: 'title 1' },
                1: { id: 1, title: 'title 2' },
                fetchedAt: { 0: before, 1: before }
            };
            var newState = data_1.removeRecords([1], oldRecords);
            assert_1["default"].deepEqual(newState, {
                0: { id: 0, title: 'title 1' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                0: before
            });
        });
        it('should remove the records passed as arguments when using string ids', function () {
            var before = new Date(0);
            var oldRecords = {
                record1: { id: 'record1', title: 'title 1' },
                record2: { id: 'record2', title: 'title 2' },
                fetchedAt: { record1: before, record2: before }
            };
            var newState = data_1.removeRecords(['record2'], oldRecords);
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', title: 'title 1' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: before
            });
        });
        it('should remove the records passed as arguments when using mixed ids', function () {
            var before = new Date(0);
            var oldRecords = {
                '0': { id: 0, title: 'title 1' },
                '1': { id: 1, title: 'title 2' },
                fetchedAt: { '0': before, '1': before }
            };
            var newState = data_1.removeRecords(['1'], oldRecords);
            assert_1["default"].deepEqual(newState, {
                '0': { id: 0, title: 'title 1' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                '0': before
            });
        });
    });
    describe('optimistic DELETE', function () {
        it('removes the deleted record', function () {
            var now = new Date();
            var state = {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'value' },
                record3: { id: 'record3', prop: 'value' },
                fetchedAt: {
                    record1: now,
                    record2: now,
                    record3: now
                }
            };
            var newState = data_1["default"](state, {
                type: 'FOO',
                payload: { id: 'record2' },
                meta: {
                    fetch: core_1.DELETE,
                    optimistic: true
                }
            });
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', prop: 'value' },
                record3: { id: 'record3', prop: 'value' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: now,
                record3: now
            });
        });
    });
    describe('optimistic DELETE_MANY', function () {
        it('removes the deleted records', function () {
            var now = new Date();
            var state = {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'value' },
                record3: { id: 'record3', prop: 'value' },
                fetchedAt: {
                    record1: now,
                    record2: now,
                    record3: now
                }
            };
            var newState = data_1["default"](state, {
                type: 'FOO',
                payload: { ids: ['record3', 'record2'] },
                meta: {
                    fetch: core_1.DELETE_MANY,
                    optimistic: true
                }
            });
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', prop: 'value' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt, {
                record1: now
            });
        });
    });
    describe('optimistic UPDATE', function () {
        it('update the given record without touching the other', function () {
            var before = new Date(0);
            var state = {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'value' },
                record3: { id: 'record3', prop: 'value' },
                fetchedAt: {
                    record1: before,
                    record2: before,
                    record3: before
                }
            };
            var newState = data_1["default"](state, {
                type: 'FOO',
                payload: { id: 'record2', data: { prop: 'new value' } },
                meta: {
                    fetch: core_1.UPDATE,
                    optimistic: true
                }
            });
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'new value' },
                record3: { id: 'record3', prop: 'value' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt.record1, before);
            assert_1["default"].deepEqual(newState.fetchedAt.record3, before);
            assert_1["default"].notDeepEqual(newState.fetchedAt.record2, before);
        });
    });
    describe.each([core_1.UPDATE, core_1.CREATE, core_1.GET_ONE])('%s', function (actionType) {
        it('update the given record without touching the other', function () {
            var before = new Date(0);
            var state = {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'value' },
                record3: { id: 'record3', prop: 'value' },
                fetchedAt: {
                    record1: before,
                    record2: before,
                    record3: before
                }
            };
            var newState = data_1["default"](state, {
                type: 'FOO',
                payload: { data: { id: 'record2', prop: 'new value' } },
                meta: {
                    fetchResponse: actionType,
                    fetchStatus: actions_1.FETCH_END
                }
            });
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'new value' },
                record3: { id: 'record3', prop: 'value' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt.record1, before);
            assert_1["default"].deepEqual(newState.fetchedAt.record3, before);
            assert_1["default"].notDeepEqual(newState.fetchedAt.record2, before);
        });
    });
    describe.each([core_1.GET_MANY_REFERENCE, core_1.GET_MANY])('%s', function (actionType) {
        it('should add new records to the old one', function () {
            var before = new Date(0);
            var now = new Date();
            // @ts-ignore
            getFetchedAt_1["default"].mockImplementationOnce(function () { return ({
                new_record: now,
                record2: now
            }); });
            var state = {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'value' },
                record3: { id: 'record3', prop: 'value' },
                fetchedAt: {
                    record1: before,
                    record2: before,
                    record3: before
                }
            };
            var newState = data_1["default"](state, {
                type: actionType,
                payload: {
                    data: [
                        { id: 'record2', prop: 'updated value' },
                        { id: 'new_record', prop: 'new value' },
                    ]
                },
                meta: {
                    fetchResponse: actionType,
                    fetchStatus: actions_1.FETCH_END
                }
            });
            assert_1["default"].deepEqual(newState, {
                record1: { id: 'record1', prop: 'value' },
                record2: { id: 'record2', prop: 'updated value' },
                record3: { id: 'record3', prop: 'value' },
                new_record: { id: 'new_record', prop: 'new value' }
            });
            assert_1["default"].deepEqual(newState.fetchedAt.record1, before);
            assert_1["default"].deepEqual(newState.fetchedAt.record3, before);
            assert_1["default"].notDeepEqual(newState.fetchedAt.record2, before);
            assert_1["default"].notDeepEqual(newState.fetchedAt.new_record, before);
        });
    });
});
