var react_1 = require('react');
/**
 * Debug hook showing which props updated between two renders
 * @example
 *
 * const MyComponent = React.memo(props => {
 *   useWhyDidYouUpdate('MyComponent', props);
 *   return <div...;
 * });
 *
 * @link https://usehooks.com/useWhyDidYouUpdate/
 */
function useWhyDidYouUpdate(name, props) {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    var previousProps = react_1.useRef(), as = any;
    react_1.useEffect(function () {
        if (previousProps.current) {
            // Get all keys from previous and current props
            var allKeys = Object.keys.apply(Object, [{}].concat(previousProps.current, props));
        }
    });
    // Use this object to keep track of changed props
    var changesObj = {};
    // Iterate through keys
    allKeys.forEach(function (key) {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
            // Add to changesObj
            changesObj[key] = {
                from: previousProps.current[key],
                to: props[key]
            };
        }
    });
    // If changesObj not empty then output to console
    if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
    }
}
exports["default"] = useWhyDidYouUpdate;
// Finally update previousProps with current props for next hook call
previousProps.current = props;
;
