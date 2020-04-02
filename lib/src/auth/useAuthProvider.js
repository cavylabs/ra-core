var react_1 = require('react');
var AuthContext_1 = require('./AuthContext');
exports.defaultAuthParams = {
    loginUrl: '/login',
    afterLoginUrl: '/'
};
/**
 * Get the authProvider stored in the context
 */
var useAuthProvider = function () { return react_1.useContext(AuthContext_1["default"]); };
exports["default"] = useAuthProvider;
