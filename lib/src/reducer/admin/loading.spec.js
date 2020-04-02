var expect_1 = require('expect');
var fetchActions_1 = require('../../actions/fetchActions');
var loading_1 = require('./loading');
describe('loading reducer', function () {
    it('should return 0 by default', function () {
        expect_1["default"](loading_1["default"](undefined, { type: 'ANY' })).toEqual(0);
    });
    it('should increase with fetch or auth actions', function () {
        expect_1["default"](loading_1["default"](0, { type: fetchActions_1.FETCH_START })).toEqual(1);
    });
    it('should decrease with fetch or auth actions success or failure', function () {
        expect_1["default"](loading_1["default"](1, { type: fetchActions_1.FETCH_END })).toEqual(0);
        expect_1["default"](loading_1["default"](1, { type: fetchActions_1.FETCH_ERROR })).toEqual(0);
        expect_1["default"](loading_1["default"](1, { type: fetchActions_1.FETCH_CANCEL })).toEqual(0);
    });
});
