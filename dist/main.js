var $gXNCa$react = require("react");
var $gXNCa$reactjsxruntime = require("react/jsx-runtime");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useAsync", () => $824cddfeb1030802$export$cdf1dc76b55502e3);
$parcel$export(module.exports, "useLocalStorage", () => $c3473276a685574f$export$86e2cef2561044ac);
$parcel$export(module.exports, "useUserPrefs", () => $3cec8125e91706eb$export$3e97b15cb3188032);

/**
 * useAsync
 *
 * @param {Function} asyncFn - The asynchronous function to run
 * @param {Boolean} [deferred=false] - whether to save the function to a variable
 * for later use (true) or run it instantly (false).
 * @returns {Object} Properties include a run() function which is used to subsequently
 * call the function (if deferred); the resulting data; and the status and error states.
 *
 * @example
 * Run it instantly:
 * const { data, status, error } = useAsync(fetch("https://my-cool-api.com/some-endpoint"))
 * console.log(data)
 *
 * Deferred execution:
 * const { run, data, status, error } = useAsync(fetch("https://my-cool-api.com/some-endpoint"))
 * const handleClick = (event) => run()
 *
 */ const $824cddfeb1030802$export$cdf1dc76b55502e3 = (asyncFn, deferred = false)=>{
    const [status, setStatus] = (0, $gXNCa$react.useState)("idle");
    const [data, setData] = (0, $gXNCa$react.useState)(null);
    const [error, setError] = (0, $gXNCa$react.useState)(null);
    // Wrapping the call to the async function in a callback which manages some state
    // around the function itself. This also has the benefit of "caching" it, so the asyncFn
    // won't get redeclared on every render:
    const run = (0, $gXNCa$react.useCallback)(()=>{
        setStatus("pending");
        return asyncFn().then((res)=>{
            setData(res);
            setStatus("success");
        }).catch((err)=>{
            // console.log(err)
            setError(err);
            setStatus("error");
        });
    }, [
        asyncFn
    ]);
    // Default is to call run() as soon as the hook is used, but you can also "defer" its
    // usage, since it's stored in the returned "run" value:
    (0, $gXNCa$react.useEffect)(()=>{
        if (!deferred) run();
    }, [
        deferred,
        run
    ]);
    return {
        run: run,
        data: data,
        status: status,
        error: error
    };
};



const $1940ffa5bb8d0d48$export$b823d0e9bf91ce95 = (input)=>{
    if (typeof input === "boolean") return input;
    return input === "true" ? true : false;
};


/**
 * Manage state which also gets saved to the browser's localStorage
 *
 * @param {String} key - the localStorage key
 * @param {*} [defaultValue=""] - the localStorage value. Stringification is up to you to do.
 * @returns {Array} an array containing the state and an update function
 *
 * @example
 * const [favoriteFruit, setFavoriteFruit] = useLocalStorage("fruit", "apple")
 *
 */ const $c3473276a685574f$var$reducer = (state, action)=>{
    if (typeof action === "string" && (action === "true" || action === "false")) return (0, $1940ffa5bb8d0d48$export$b823d0e9bf91ce95)(action);
    return action;
};
const $c3473276a685574f$export$86e2cef2561044ac = (key, defaultValue = "")=>{
    const [state, setState] = (0, $gXNCa$react.useReducer)($c3473276a685574f$var$reducer, defaultValue);
    (0, $gXNCa$react.useEffect)(()=>{
        if (typeof window !== "undefined") {
            const savedState = window.localStorage.getItem(key);
            setState(savedState || defaultValue);
        }
    }, [
        defaultValue,
        key
    ]);
    (0, $gXNCa$react.useEffect)(()=>{
        window.localStorage.setItem(key, state);
    }, [
        key,
        state
    ]);
    return [
        state,
        setState
    ];
};







const $e7693e58f25e4583$export$38ed5205f664713a = /*#__PURE__*/ (0, $gXNCa$react.createContext)();
const $e7693e58f25e4583$export$42096c77943a6f6f = ({ children: children  })=>{
    // Create our state for all values we want to store client-side:
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, $c3473276a685574f$export$86e2cef2561044ac)("prefersReducedMotion", false);
    const [prefersReducedData, setPrefersReducedData] = (0, $c3473276a685574f$export$86e2cef2561044ac)("prefersReducedData", false);
    const [prefersDarkColorScheme, setPrefersDarkColorScheme] = (0, $c3473276a685574f$export$86e2cef2561044ac)("prefersDarkColorScheme", false);
    // Bind references to the user's operating-system-level settings
    // for reduced motion, reduced data, and prefers dark mode:
    const reducedMotionMediaQuery = (0, $gXNCa$react.useRef)(null);
    const reducedDataMediaQuery = (0, $gXNCa$react.useRef)(null);
    const colorSchemeMediaQuery = (0, $gXNCa$react.useRef)(null);
    (0, $gXNCa$react.useEffect)(()=>{
        reducedMotionMediaQuery.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        reducedDataMediaQuery.current = window.matchMedia("(prefers-reduced-data: reduce)").matches;
        colorSchemeMediaQuery.current = window.matchMedia("(prefers-color-scheme: dark)").matches;
        // Update our settings if there are any operating-system-level settings on the user's end:
        if (reducedMotionMediaQuery.current) setPrefersReducedMotion(true);
        if (reducedDataMediaQuery.current) setPrefersReducedData(true);
        if (colorSchemeMediaQuery.current) setPrefersDarkColorScheme(true);
    }, [
        setPrefersDarkColorScheme,
        setPrefersReducedData,
        setPrefersReducedMotion
    ]);
    // Anytime a localStorage value changes — including on initial render — update it:
    (0, $gXNCa$react.useEffect)(()=>{
        document.body.classList[(0, $1940ffa5bb8d0d48$export$b823d0e9bf91ce95)(prefersReducedMotion) ? "add" : "remove"]("is-reduced-motion");
    }, [
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)($e7693e58f25e4583$export$38ed5205f664713a.Provider, {
        value: {
            prefersDarkColorScheme: prefersDarkColorScheme,
            setPrefersDarkColorScheme: setPrefersDarkColorScheme,
            prefersReducedData: prefersReducedData,
            setPrefersReducedData: setPrefersReducedData,
            prefersReducedMotion: prefersReducedMotion,
            setPrefersReducedMotion: setPrefersReducedMotion
        },
        children: children
    });
};



const $3cec8125e91706eb$export$3e97b15cb3188032 = ()=>{
    const { prefersDarkColorScheme: prefersDarkColorScheme , setPrefersDarkColorScheme: setPrefersDarkColorScheme , prefersReducedData: prefersReducedData , setPrefersReducedData: setPrefersReducedData , prefersReducedMotion: prefersReducedMotion , setPrefersReducedMotion: setPrefersReducedMotion ,  } = (0, $gXNCa$react.useContext)((0, $e7693e58f25e4583$export$38ed5205f664713a));
    const togglePrefersDarkColorScheme = ()=>{
        setPrefersDarkColorScheme(!(0, $1940ffa5bb8d0d48$export$b823d0e9bf91ce95)(prefersDarkColorScheme));
    };
    const togglePrefersReducedData = ()=>{
        setPrefersReducedData(!(0, $1940ffa5bb8d0d48$export$b823d0e9bf91ce95)(prefersReducedData));
    };
    const togglePrefersReducedMotion = ()=>{
        setPrefersReducedMotion(!(0, $1940ffa5bb8d0d48$export$b823d0e9bf91ce95)(prefersReducedMotion));
    };
    return {
        prefersDarkColorScheme: prefersDarkColorScheme,
        togglePrefersDarkColorScheme: togglePrefersDarkColorScheme,
        prefersReducedData: prefersReducedData,
        togglePrefersReducedData: togglePrefersReducedData,
        prefersReducedMotion: prefersReducedMotion,
        togglePrefersReducedMotion: togglePrefersReducedMotion
    };
};




//# sourceMappingURL=main.js.map
