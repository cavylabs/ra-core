var expect_1 = require('expect');
var effects_1 = require('redux-saga/effects');
var connected_react_router_1 = require('connected-react-router');
var redirection_1 = require('./redirection');
var uiActions_1 = require('../actions/uiActions');
describe('redirection saga', function () {
    it('should yield a refresh of the view if redirectTo is falsy', function () {
        var action = {
            type: 'foo',
            payload: { id: 123 },
            meta: { redirectTo: false, basePath: '/posts' }
        };
        // @ts-ignore
        var generator = redirection_1.handleRedirection(action);
        expect_1["default"](generator.next().value).toEqual(effects_1.put(uiActions_1.refreshView()));
    });
    it('should yield a redirection if redirectTo is truthy', function () {
        var action = {
            type: 'foo',
            payload: { id: 123 },
            meta: { redirectTo: 'edit', basePath: '/posts' }
        };
        var generator = redirection_1.handleRedirection(action);
        expect_1["default"](generator.next().value).toEqual(effects_1.put(connected_react_router_1.push('/posts/123')));
    });
    it('should yield a redirection using the payload data if available', function () {
        var action = {
            type: 'foo',
            payload: { data: { id: 123 } },
            meta: { redirectTo: 'edit', basePath: '/posts' }
        };
        var generator = redirection_1.handleRedirection(action);
        expect_1["default"](generator.next().value).toEqual(effects_1.put(connected_react_router_1.push('/posts/123')));
    });
    it('should yield a redirection using the request payload if available', function () {
        var action = {
            type: 'foo',
            requestPayload: { id: 123 },
            meta: { redirectTo: 'edit', basePath: '/posts' }
        };
        var generator = redirection_1.handleRedirection(action);
        expect_1["default"](generator.next().value).toEqual(effects_1.put(connected_react_router_1.push('/posts/123')));
    });
});
