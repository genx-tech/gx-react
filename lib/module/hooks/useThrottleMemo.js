import { useEffect, useRef, useState } from 'react';
/**
 * React hook that throttles an function call.
 * @param {Function} fn
 * @param {integer} ms
 * @param {Array} args
 */

export default function useThrottleMemo(fn, ms, args) {
  ms != null || (ms = 200);
  args != null || (args = []);
  const [state, setState] = useState(null);
  var timeout = useRef();
  var nextArgs = useRef();
  useEffect(() => {
    if (!timeout.current) {
      setState(fn(...args));

      const timeoutHandler = () => {
        if (nextArgs.current) {
          setState(fn(...args));
          nextArgs.current = undefined;
          timeout.current = setTimeout(timeoutHandler, ms);
        } else {
          timeout.current = undefined;
        }
      };

      timeout.current = setTimeout(timeoutHandler, ms);
    } else {
      //waiting period
      nextArgs.current = args;
    }
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  args
  /* eslint-enable react-hooks/exhaustive-deps */
  );
  useEffect(() => {
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, []);
  return state;
}
//# sourceMappingURL=useThrottleMemo.js.map