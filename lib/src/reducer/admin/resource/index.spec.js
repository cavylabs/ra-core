var expect_1 = require('expect');
var index_1 = require('./index');
var actions_1 = require('../../../actions');
var listActions_1 = require('../../../actions/listActions');
describe('Resources Reducer', function () {
    it('should return previous state if the action has no resource meta and is not REGISTER_RESOURCE nor UNREGISTER_RESOURCE', function () {
        var previousState = { previous: true };
        expect_1["default"](index_1["default"](previousState, {
            type: 'OTHER_ACTION',
            meta: {}
        })).toEqual(previousState);
    });
    it('should initialize a new resource upon REGISTER_RESOURCE', function () {
        expect_1["default"](index_1["default"]({
            posts: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'posts' }
            },
            comments: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'comments' }
            }
        }, {
            type: actions_1.REGISTER_RESOURCE,
            payload: {
                name: 'users',
                options: 'foo'
            }
        })).toEqual({
            posts: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'posts' }
            },
            comments: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'comments' }
            },
            users: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'users', options: 'foo' }
            }
        });
    });
    it('should remove a resource upon UNREGISTER_RESOURCE', function () {
        expect_1["default"](index_1["default"]({
            posts: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'posts' }
            },
            comments: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'comments' }
            }
        }, {
            type: actions_1.UNREGISTER_RESOURCE,
            payload: 'comments'
        })).toEqual({
            posts: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'posts' }
            }
        });
    });
    it('should call inner reducers for each resource when action has a resource meta', function () {
        expect_1["default"](index_1["default"]({
            posts: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'posts' }
            },
            comments: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'comments' }
            }
        }, {
            // @ts-ignore
            type: listActions_1.CRUD_CHANGE_LIST_PARAMS,
            meta: { resource: 'posts' },
            payload: {
                filter: { commentable: true },
                order: null,
                page: 1,
                perPage: null,
                sort: null
            }
        })).toEqual({
            posts: {
                data: {},
                list: {
                    params: {
                        filter: { commentable: true },
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'posts' }
            },
            comments: {
                data: {},
                list: {
                    params: {
                        filter: {},
                        order: null,
                        page: 1,
                        perPage: null,
                        sort: null
                    },
                    ids: [],
                    cachedRequests: {},
                    total: 0,
                    selectedIds: [],
                    loadedOnce: false
                },
                validity: {},
                props: { name: 'comments' }
            }
        });
    });
    describe('getReferenceResource selector', function () {
        it('should return the reference resource', function () {
            var state = {
                posts: 'POSTS',
                comments: 'COMMENTS'
            };
            var props = {
                reference: 'comments'
            };
            expect_1["default"](index_1.getReferenceResource(state, props)).toEqual('COMMENTS');
        });
    });
});
