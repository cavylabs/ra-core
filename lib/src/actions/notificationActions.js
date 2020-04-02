exports.SHOW_NOTIFICATION = 'RA/SHOW_NOTIFICATION';
'info' | 'warning' | 'error';
readonly;
message: string;
readonly;
type: NotificationType;
readonly;
notificationOptions ?  : NotificationOptions;
readonly;
type: typeof exports.SHOW_NOTIFICATION;
readonly;
payload: Notification;
/**
 * Shows a snackbar/toast notification on the screen
 *
 * @see {@link https://material-ui.com/api/snackbar/|Material ui snackbar component}
 * @see {@link https://material.io/guidelines/components/snackbars-toasts.html|Material ui reference document on snackbar}
 */
exports.showNotification = function (
    // A translatable label or text to display on notification
    message, 
    // The type of the notification
    type, 
    // Specify additional parameters of notification
    notificationOptions) {
    if (type === void 0) { type = 'info'; }
    return ({
        type: exports.SHOW_NOTIFICATION,
        payload: {} });
};
notificationOptions,
    type,
    message,
;
;
exports.HIDE_NOTIFICATION = 'RA/HIDE_NOTIFICATION';
readonly;
type: typeof exports.HIDE_NOTIFICATION;
exports.hideNotification = function () { return ({
    type: exports.HIDE_NOTIFICATION
}); };
