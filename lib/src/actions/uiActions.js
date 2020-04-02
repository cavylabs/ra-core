exports.TOGGLE_SIDEBAR = 'RA/TOGGLE_SIDEBAR';
readonly;
type: typeof exports.TOGGLE_SIDEBAR;
exports.toggleSidebar = function () { return ({
    type: exports.TOGGLE_SIDEBAR
}); };
exports.SET_SIDEBAR_VISIBILITY = 'RA/SET_SIDEBAR_VISIBILITY';
readonly;
type: typeof exports.SET_SIDEBAR_VISIBILITY;
readonly;
payload: boolean;
exports.setSidebarVisibility = function (isOpen) {
    return ({
        type: exports.SET_SIDEBAR_VISIBILITY,
        payload: isOpen
    });
};
exports.REFRESH_VIEW = 'RA/REFRESH_VIEW';
readonly;
type: typeof exports.REFRESH_VIEW;
exports.refreshView = function () { return ({
    type: exports.REFRESH_VIEW
}); };
