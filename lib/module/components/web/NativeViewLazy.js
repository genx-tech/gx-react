import React, { useEffect, useRef } from 'react';
import { AppRegistry } from 'react-native-web';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import Runtime from '../../runtimeConfig';
let idCounter = 0;
export default function NativeView({
  view,
  ...props
}) {
  const myCounter = useRef(null);

  if (myCounter.current == null) {
    myCounter.current = "gx_nv".concat(idCounter);
    idCounter++; // myCounter.current used below will appear +1 larger than expected, not sure why
    // even though, log output here is correct, to follow up
  }

  useEffect(() => {
    const rootTag = document.getElementById(myCounter.current);
    AppRegistry.registerComponent(myCounter.current, () => view);
    AppRegistry.runApplication(myCounter.current, { ...props,
      rootTag
    });
    return () => {
      AppRegistry.unmountApplicationComponentAtRootTag(rootTag);
    };
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  []
  /* eslint-enable react-hooks/exhaustive-deps */
  );
  return /*#__PURE__*/React.createElement(ErrorBoundary, {
    FallbackComponent: ErrorFallback,
    onError: Runtime.onError
  }, /*#__PURE__*/React.createElement("div", {
    id: myCounter.current
  }));
}
//# sourceMappingURL=NativeViewLazy.js.map