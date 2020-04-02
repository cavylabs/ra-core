var actions_1 = require('../../actions');
readonly;
sidebarOpen: boolean;
readonly;
optimistic: boolean;
readonly;
viewVersion: number;
var defaultState = {
    sidebarOpen: false,
    optimistic: false,
    viewVersion: 0
};
var uiReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = defaultState; }
    switch (action.type) {
        case actions_1.TOGGLE_SIDEBAR:
            return {};
    }
};
previousState,
    sidebarOpen;
!previousState.sidebarOpen,
;
;
SET_SIDEBAR_VISIBILITY: return { previousState: previousState, sidebarOpen: action.payload };
REFRESH_VIEW: return {
    previousState: previousState,
    viewVersion: previousState.viewVersion + 1
};
START_OPTIMISTIC_MODE: return { previousState: previousState, optimistic: true };
STOP_OPTIMISTIC_MODE: return { previousState: previousState, optimistic: false };
return previousState;
;
exports["default"] = uiReducer;
