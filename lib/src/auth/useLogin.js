var react_1 = require('react');
var useAuthProvider_1 = require('./useAuthProvider');
var react_router_dom_1 = require('react-router-dom');
/**
 * Get a callback for calling the authProvider.login() method
 * and redirect to the previous authenticated page (or the home page) on success.
 *
 * @see useAuthProvider
 *
 * @returns {Function} login callback
 *
 * @example
 *
 * import { useLogin } from 'react-admin';
 *
 * const LoginButton = () => {
 *     const [loading, setLoading] = useState(false);
 *     const login = useLogin();
 *     const handleClick = {
 *         setLoading(true);
 *         login({ username: 'john', password: 'p@ssw0rd' }, '/posts')
 *             .then(() => setLoading(false));
 *     }
 *     return <button onClick={handleClick}>Login</button>;
 * }
 */
var useLogin = function () {
    var authProvider = useAuthProvider_1["default"]();
    var location = react_router_dom_1.useLocation();
    var locationState = location.state, as = any;
    var history = react_router_dom_1.useHistory();
    var nextPathName = locationState && locationState.nextPathname;
    var login = react_1.useCallback(function (params, pathName) {
        if (params === void 0) { params = {}; }
        if (pathName === void 0) { pathName = useAuthProvider_1.defaultAuthParams.afterLoginUrl; }
        return authProvider.login(params).then(function (ret) {
            history.push(nextPathName || pathName);
            return ret;
        });
    }, [authProvider, history, nextPathName]);
    var loginWithoutProvider = react_1.useCallback(function (_, __) {
        history.push(useAuthProvider_1.defaultAuthParams.afterLoginUrl);
        return Promise.resolve();
    }, [history]);
    return authProvider ? login : loginWithoutProvider;
};
exports["default"] = useLogin;
