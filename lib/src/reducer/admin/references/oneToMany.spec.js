var assert_1 = require('assert');
var oneToMany_1 = require('./oneToMany');
var core_1 = require('../../../core');
var actions_1 = require('../../../actions');
describe('oneToMany', function () {
    describe('oneToMany', function () {
        it('should name relation based on reference, id, resource and target', function () {
            assert_1["default"].equal(oneToMany_1.nameRelatedTo('reference', 'id', 'resource', 'target'), 'resource_reference@target_id');
            assert_1["default"].equal(oneToMany_1.nameRelatedTo('comments', '6', 'posts', 'id'), 'posts_comments@id_6');
        });
        it('should incorporate filter to the name if any', function () {
            assert_1["default"].equal(oneToMany_1.nameRelatedTo('reference', 'id', 'resource', 'target', {
                filter1: 'value1',
                filter2: false
            }), 'resource_reference@target_id?filter1="value1"&filter2=false');
            assert_1["default"].equal(oneToMany_1.nameRelatedTo('comments', '6', 'posts', 'id', {
                active: true
            }), 'posts_comments@id_6?active=true');
        });
        it('should remove reference deleted optimistically', function () {
            var previousState = {
                'posts_comments@id_1': {
                    ids: [1, 2, 3],
                    total: 3
                },
                'reviews_comments@id_1': {
                    ids: [1, 3, 4],
                    total: 3
                },
                'posts_reviews@id_1': {
                    ids: [1, 2, 3],
                    total: 3
                }
            };
            var state = oneToMany_1["default"](previousState, {
                type: actions_1.UNDOABLE,
                payload: {
                    id: 2
                },
                meta: {
                    resource: 'comments',
                    optimistic: true,
                    fetch: core_1.DELETE
                }
            });
            expect(state).toEqual({
                'posts_comments@id_1': {
                    ids: [1, 3],
                    total: 2
                },
                'reviews_comments@id_1': {
                    ids: [1, 3, 4],
                    total: 3
                },
                'posts_reviews@id_1': {
                    ids: [1, 2, 3],
                    total: 3
                }
            });
        });
        it('should remove references deleted optimistically', function () {
            var previousState = {
                'posts_comments@id_1': {
                    ids: [1, 2, 3],
                    total: 3
                },
                'reviews_comments@id_1': {
                    ids: [1, 3, 4],
                    total: 3
                },
                'posts_reviews@id_1': {
                    ids: [1, 2, 3],
                    total: 3
                }
            };
            var state = oneToMany_1["default"](previousState, {
                type: actions_1.UNDOABLE,
                payload: {
                    ids: [2, 3]
                },
                meta: {
                    resource: 'comments',
                    optimistic: true,
                    fetch: core_1.DELETE_MANY
                }
            });
            expect(state).toEqual({
                'posts_comments@id_1': {
                    ids: [1],
                    total: 1
                },
                'reviews_comments@id_1': {
                    ids: [1, 4],
                    total: 2
                },
                'posts_reviews@id_1': {
                    ids: [1, 2, 3],
                    total: 3
                }
            });
        });
    });
});
