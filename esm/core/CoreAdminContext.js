import React, { useContext } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { AuthContext, convertLegacyAuthProvider } from '../auth';
import { DataProviderContext, convertLegacyDataProvider, } from '../dataProvider';
import createAdminStore from './createAdminStore';
import TranslationProvider from '../i18n/TranslationProvider';
var CoreAdminContext = function (_a) {
    var authProvider = _a.authProvider, dataProvider = _a.dataProvider, i18nProvider = _a.i18nProvider, children = _a.children, history = _a.history, customReducers = _a.customReducers, customSagas = _a.customSagas, initialState = _a.initialState;
    var reduxIsAlreadyInitialized = !!useContext(ReactReduxContext);
    if (!dataProvider) {
        throw new Error("Missing dataProvider prop.\nReact-admin requires a valid dataProvider function to work.");
    }
    var finalAuthProvider = authProvider instanceof Function
        ? convertLegacyAuthProvider(authProvider)
        : authProvider;
    var finalDataProvider = dataProvider instanceof Function
        ? convertLegacyDataProvider(dataProvider)
        : dataProvider;
    var finalHistory = history || createHashHistory();
    var renderCore = function () {
        return (React.createElement(AuthContext.Provider, { value: finalAuthProvider },
            React.createElement(DataProviderContext.Provider, { value: finalDataProvider },
                React.createElement(TranslationProvider, { i18nProvider: i18nProvider }, typeof window !== 'undefined' ? (React.createElement(ConnectedRouter, { history: finalHistory }, children)) : (children)))));
    };
    if (reduxIsAlreadyInitialized) {
        if (!history) {
            throw new Error("Missing history prop.\nWhen integrating react-admin inside an existing redux Provider, you must provide the same 'history' prop to the <Admin> as the one used to bootstrap your routerMiddleware.\nReact-admin uses this history for its own ConnectedRouter.");
        }
        return renderCore();
    }
    else {
        return (React.createElement(Provider, { store: createAdminStore({
                authProvider: finalAuthProvider,
                customReducers: customReducers,
                customSagas: customSagas,
                dataProvider: finalDataProvider,
                initialState: initialState,
                history: finalHistory,
            }) }, renderCore()));
    }
};
export default CoreAdminContext;
