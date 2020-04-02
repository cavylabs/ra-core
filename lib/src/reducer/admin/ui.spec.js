var assert_1 = require('assert');
var uiActions_1 = require('../../actions/uiActions');
var ui_1 = require('./ui');
describe('ui reducer', function () {
    var defaultState = {
        sidebarOpen: false,
        optimistic: false,
        viewVersion: 0
    };
    it('should return hidden sidebar by default', function () {
        assert_1["default"].deepEqual(defaultState, ui_1["default"](undefined, { type: 'foo' }));
    });
    it('should toggle sidebar visibility upon TOGGLE_SIDEBAR', function () {
        assert_1["default"].deepEqual.apply(assert_1["default"], [{}].concat(defaultState, [sidebarOpen, false]));
    }, ui_1["default"].apply(void 0, [{}].concat(defaultState, [sidebarOpen, true])));
}, uiActions_1.toggleSidebar());
;
assert_1["default"].deepEqual.apply(assert_1["default"], [{}].concat(defaultState, [sidebarOpen, true, , ui_1["default"].apply(void 0, [{}].concat(defaultState, [sidebarOpen, false, , uiActions_1.toggleSidebar()]))]));
;
it('should set sidebar visibility upon SET_SIDEBAR_VISIBILITY', function () {
    assert_1["default"].deepEqual.apply(assert_1["default"], [{}].concat(defaultState, [sidebarOpen, false]));
}, ui_1["default"].apply(void 0, [{}].concat(defaultState, [sidebarOpen, true, , uiActions_1.setSidebarVisibility(false)])));
assert_1["default"].deepEqual.apply(assert_1["default"], [{}].concat(defaultState, [sidebarOpen, true, , ui_1["default"].apply(void 0, [{}].concat(defaultState, [sidebarOpen, true, , uiActions_1.setSidebarVisibility(true)]))]));
assert_1["default"].deepEqual.apply(assert_1["default"], [{}].concat(defaultState, [sidebarOpen, false, , ui_1["default"].apply(void 0, [{}].concat(defaultState, [sidebarOpen, false, , uiActions_1.setSidebarVisibility(false)]))]));
assert_1["default"].deepEqual.apply(assert_1["default"], [{}].concat(defaultState, [sidebarOpen, true, , ui_1["default"].apply(void 0, [{}].concat(defaultState, [sidebarOpen, false, , uiActions_1.setSidebarVisibility(true)]))]));
;
it('should increment the viewVersion upon REFRESH_VIEW', function () {
    assert_1["default"].deepEqual({ optimistic: false, sidebarOpen: false, viewVersion: 1 }, ui_1["default"](undefined, uiActions_1.refreshView()));
});
;
