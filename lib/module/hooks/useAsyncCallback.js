import { useCallback, useState, useRef } from 'react';
import useMountedChecker from './useMountedChecker';
/**
 * React hook that returns state and a callback for an async function or a function that returns a promise. Just like an async version of useCallback.
 * @param {*} fn - Async function
 * @param {Array} deps
 * @param {boolean} [loadingState=false]
 */

export default function useAsyncCallback(fn, deps, loadingState) {
  const lastCallId = useRef(0);
  const isMounted = useMountedChecker();
  const [state, setState] = useState({
    loading: loadingState ? true : false
  });
  const applyChange = useCallback(payload => {
    setState(prevState => ({ ...prevState,
      ...payload
    }));
  }, [setState]);
  const callback = useCallback((...args) => {
    const callId = ++lastCallId.current;
    setState(prevState => ({ ...prevState,
      loading: true
    }));
    fn(...args).then(value => {
      isMounted() && callId === lastCallId.current && setState({
        value,
        loading: false
      });
      return value;
    }).catch(error => {
      isMounted() && callId === lastCallId.current && setState({
        error,
        loading: false
      });
      return error;
    });
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  deps
  /* eslint-enable react-hooks/exhaustive-deps */
  );
  return [state, callback, applyChange];
}
//# sourceMappingURL=useAsyncCallback.js.map