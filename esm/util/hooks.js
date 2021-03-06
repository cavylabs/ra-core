import { useState, useRef, useEffect, useCallback } from 'react';
import isEqual from 'lodash/isEqual';
// thanks Kent C Dodds for the following helpers
export function useSafeSetState(initialState) {
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var mountedRef = useRef(false);
    useEffect(function () {
        mountedRef.current = true;
        return function () { return (mountedRef.current = false); };
    }, []);
    var safeSetState = useCallback(function (args) { return mountedRef.current && setState(args); }, [mountedRef, setState]);
    return [state, safeSetState];
}
export function usePrevious(value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
}
export function useDeepCompareEffect(callback, inputs) {
    var cleanupRef = useRef();
    useEffect(function () {
        if (!isEqual(previousInputs, inputs)) {
            cleanupRef.current = callback();
        }
        return cleanupRef.current;
    });
    var previousInputs = usePrevious(inputs);
}
export function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var _a = useState(false), ready = _a[0], setReady = _a[1];
    useEffect(function () {
        var timer = setTimeout(function () {
            setReady(true);
        }, ms);
        return function () {
            clearTimeout(timer);
        };
    }, [ms]);
    return ready;
}
