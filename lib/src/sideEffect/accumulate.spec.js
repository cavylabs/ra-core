var expect_1 = require('expect');
var effects_1 = require('redux-saga/effects');
var testing_utils_1 = require('@redux-saga/testing-utils');
var accumulate_1 = require('./accumulate');
var actions_1 = require('../actions');
describe('accumulate saga', function () {
    describe('backward compatibility', function () {
        it('proceeds with the accumulated action when no more actions are dispatched', function () {
            var tasks = {};
            var accumulations = {};
            var finalize = accumulate_1.finalizeFactory(tasks, accumulations);
            var saga = accumulate_1.accumulateFactory(tasks, accumulations, finalize)({
                payload: { resource: 'posts', ids: [1, 2] },
                meta: { accumulate: actions_1.crudGetMany }
            });
            expect_1["default"](saga.next().value).toEqual(effects_1.fork(finalize, 'posts', actions_1.crudGetMany));
            expect_1["default"](accumulations).toEqual({
                posts: [1, 2]
            });
        });
        it('cancels the previous action when a new matching action is dispatched then proceeds with the new one', function () {
            var task = testing_utils_1.createMockTask();
            var tasks = { posts: task };
            var accumulations = {
                posts: [1, 2]
            };
            var finalize = accumulate_1.finalizeFactory(tasks, accumulations);
            var saga = accumulate_1.accumulateFactory(tasks, accumulations, finalize)({
                payload: { resource: 'posts', ids: [2, 3] },
                meta: { accumulate: actions_1.crudGetMany }
            });
            expect_1["default"](saga.next().value).toEqual(effects_1.cancel(task));
            expect_1["default"](saga.next().value).toEqual(effects_1.fork(finalize, 'posts', actions_1.crudGetMany));
            expect_1["default"](accumulations).toEqual({
                posts: [1, 2, 3]
            });
        });
        it('waits for a 50ms delay before dispatching the action', function () {
            var task = testing_utils_1.createMockTask();
            var tasks = { posts: task };
            var accumulations = { posts: [1, 2] };
            var saga = accumulate_1.finalizeFactory(tasks, accumulations)('posts', actions_1.crudGetMany);
            expect_1["default"](saga.next().value).toEqual(effects_1.delay(50));
            expect_1["default"](saga.next().value).toEqual(effects_1.put(actions_1.crudGetMany('posts', [1, 2])));
            saga.next(); // Ends the saga
            expect_1["default"](tasks).toEqual({});
            expect_1["default"](accumulations).toEqual({});
        });
    });
    describe('using all expected metas', function () {
        it('proceeds with the accumulated action when no more actions are dispatched', function () {
            var tasks = {};
            var accumulations = {};
            var finalize = accumulate_1.finalizeFactory(tasks, accumulations);
            var saga = accumulate_1.accumulateFactory(tasks, accumulations, finalize)({
                type: 'ACCUMULATE_ACTION',
                payload: { ids: [1, 2] },
                meta: {
                    accumulate: actions_1.crudGetMany,
                    accumulateValues: function (accumulations2, action) { return (accumulations2 || []).concat(action.payload.ids); },
                    accumulateKey: 'posts'
                }
            });
            expect_1["default"](saga.next().value).toEqual(effects_1.fork(finalize, 'posts', actions_1.crudGetMany));
            expect_1["default"](accumulations).toEqual({
                posts: [1, 2]
            });
        });
        it('cancels the previous action when a new matching action is dispatched then proceeds with the new one', function () {
            var task = testing_utils_1.createMockTask();
            var tasks = { posts: task };
            var accumulations = { posts: [1, 2] };
            var finalize = accumulate_1.finalizeFactory(tasks, accumulations);
            var saga = accumulate_1.accumulateFactory(tasks, accumulations, finalize)({
                type: 'ACCUMULATE_ACTION',
                payload: { ids: [3, 4] },
                meta: {
                    accumulate: actions_1.crudGetMany,
                    accumulateValues: function (accumulations2, action) { return (accumulations2 || []).concat(action.payload.ids); },
                    accumulateKey: 'posts'
                }
            });
            expect_1["default"](saga.next().value).toEqual(effects_1.cancel(task));
            expect_1["default"](saga.next().value).toEqual(effects_1.fork(finalize, 'posts', actions_1.crudGetMany));
            expect_1["default"](accumulations).toEqual({
                posts: [1, 2, 3, 4]
            });
        });
    });
});
