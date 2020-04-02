var assert_1 = require('assert');
var notificationActions_1 = require('../../actions/notificationActions');
var notifications_1 = require('./notifications');
describe('notifications reducer', function () {
    it('should return empty notification by default', function () {
        assert_1["default"].deepEqual([], notifications_1["default"](undefined, { type: 'foo' }));
    });
    it('should set autoHideDuration when passed in payload', function () {
        assert_1["default"].deepEqual([{ message: 'test', type: 'info', autoHideDuration: 1337 }], notifications_1["default"](undefined, {
            type: notificationActions_1.SHOW_NOTIFICATION,
            payload: {
                message: 'test',
                type: 'info',
                autoHideDuration: 1337
            }
        }));
    });
    it('should set text and type upon SHOW_NOTIFICATION', function () {
        assert_1["default"].deepEqual([{ message: 'foo', type: 'warning' }], notifications_1["default"](undefined, {
            type: notificationActions_1.SHOW_NOTIFICATION,
            payload: {
                message: 'foo',
                type: 'warning'
            }
        }));
    });
    it('should have no elements upon last HIDE_NOTIFICATION', function () {
        assert_1["default"].deepEqual([], notifications_1["default"]([{ message: 'foo', type: 'warning', as: NotificationType }], {
            type: notificationActions_1.HIDE_NOTIFICATION
        }));
    });
    it('should have one less notification upon HIDE_NOTIFICATION with multiple notifications', function () {
        var notifications = [
            { message: 'foo', type: 'info', as: NotificationType },
            { message: 'bar', type: 'info', as: NotificationType },
        ];
        assert_1["default"].equal(notifications.length - 1, notifications_1["default"](notifications, {
            type: notificationActions_1.HIDE_NOTIFICATION
        }).length);
    });
});
