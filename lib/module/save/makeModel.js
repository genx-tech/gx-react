import React from 'react';
import get from 'lodash/get';
export default ((model, props) => context => {
  const state = {};
  model.state && model.state.entries.forEach(([name, initValue]) => {
    const [stateValue, setState] = React.useState(initValue);
    Object.defineProperty(state, name, {
      get: () => stateValue,
      set: newValue => setState(newValue),
      enumerable: true
    });
  });
  const modelInstance = {
    getValue: (name, defaultValue) => get(modelInstance, name, defaultValue),
    props,
    state,
    context
  };
  return modelInstance;
});
//# sourceMappingURL=makeModel.js.map