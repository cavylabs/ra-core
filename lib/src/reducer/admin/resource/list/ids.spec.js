var ids_1 = require('./ids');
var actions_1 = require('../../../../actions');
var core_1 = require('../../../../core');
describe('ids reducer', function () {
    describe('DELETE', function () {
        it('should remove id from ids on Delete action', function () {
            var action = {
                type: core_1.DELETE,
                payload: {
                    id: 'record2'
                },
                meta: {
                    fetch: core_1.DELETE,
                    optimistic: true
                }
            };
            var newState = ids_1["default"](['record1', 'record2', 'record3'], action);
            expect(newState).toEqual(['record1', 'record3']);
        });
    });
    describe('DELETE_MANY', function () {
        it('should remove ids from ids on DELETE_MANY action', function () {
            var action = {
                type: core_1.DELETE_MANY,
                payload: {
                    ids: ['record1', 'record3']
                },
                meta: {
                    fetch: core_1.DELETE_MANY,
                    optimistic: true
                }
            };
            var newState = ids_1["default"](['record1', 'record2', 'record3'], action);
            expect(newState).toEqual(['record2']);
        });
    });
    describe('CRUD_GET_LIST_SUCCESS', function () {
        it('should replace ids with ids from action', function () {
            var action = {
                type: actions_1.CRUD_GET_LIST_SUCCESS,
                payload: {
                    data: [
                        { id: 'new_record1' },
                        { id: 'new_record2' },
                        { id: 'new_record3' },
                    ]
                }
            };
            var newState = ids_1["default"](['record1', 'record2', 'record3'], action);
            expect(newState).toEqual([
                'new_record1',
                'new_record2',
                'new_record3',
            ]);
        });
    });
    describe('CRUD_CREATE_SUCCESS', function () {
        it('should add new id at the start of ids', function () {
            var action = {
                type: actions_1.CRUD_CREATE_SUCCESS,
                payload: {
                    data: { id: 'new_record' }
                }
            };
            var newState = ids_1["default"](['record1', 'record2', 'record3'], action);
            expect(newState).toEqual([
                'new_record',
                'record1',
                'record2',
                'record3',
            ]);
        });
    });
});
