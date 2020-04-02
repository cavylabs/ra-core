var expect_1 = require('expect');
var effects_1 = require('redux-saga/effects');
var notificationActions_1 = require('../actions/notificationActions');
var undoActions_1 = require('../actions/undoActions');
var uiActions_1 = require('../actions/uiActions');
var undo_1 = require('./undo');
describe('undo saga', function () {
    var action = {
        type: 'UNDOABLE',
        payload: {
            action: {
                type: 'FOO',
                payload: { id: 123 },
                meta: {
                    foo: 1,
                    onSuccess: {
                        bar: 2
                    }
                }
            }
        }
    };
    describe('cancelled', function () {
        var generator = undo_1.handleUndoRace(action);
        it('should start optimistic mode', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.put(undoActions_1.startOptimisticMode()));
        });
        it('should put the optimistic action with success metas', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.put({
                type: 'FOO_OPTIMISTIC',
                payload: { id: 123 },
                meta: {
                    foo: 1,
                    bar: 2,
                    optimistic: true
                }
            }));
        });
        it('should fork the race', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.race({
                undo: effects_1.take(undoActions_1.UNDO),
                complete: effects_1.take(undoActions_1.COMPLETE)
            }));
        });
        it('should stop the optimistic mode', function () {
            expect_1["default"](generator.next({ undo: true }).value).toEqual(effects_1.put(undoActions_1.stopOptimisticMode()));
        });
        it('should display the notification', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.put(notificationActions_1.showNotification('ra.notification.canceled')));
        });
        it('should send a refresh', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.put(uiActions_1.refreshView()));
        });
        it('should end there', function () {
            expect_1["default"](generator.next().done).toEqual(true);
        });
    });
    describe('complete', function () {
        var generator = undo_1.handleUndoRace(action);
        it('should start optimistic mode', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.put(undoActions_1.startOptimisticMode()));
        });
        it('should put the optimistic action with success metas', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.put({
                type: 'FOO_OPTIMISTIC',
                payload: { id: 123 },
                meta: {
                    foo: 1,
                    bar: 2,
                    optimistic: true
                }
            }));
        });
        it('should fork the race', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.race({
                undo: effects_1.take(undoActions_1.UNDO),
                complete: effects_1.take(undoActions_1.COMPLETE)
            }));
        });
        it('should stop the optimistic mode', function () {
            expect_1["default"](generator.next({ complete: true }).value).toEqual(effects_1.put(undoActions_1.stopOptimisticMode()));
        });
        it('should put the action in non-optimistic mode', function () {
            expect_1["default"](generator.next().value).toEqual(effects_1.put({
                type: 'FOO',
                payload: { id: 123 },
                meta: {
                    foo: 1,
                    onSuccess: { refresh: true },
                    onFailure: { refresh: true }
                }
            }));
        });
        it('should end there', function () {
            expect_1["default"](generator.next().done).toEqual(true);
        });
    });
});
