import _get from 'lodash/get';
import _set from 'lodash/set';
import Runtime from '../Runtime';

class FormStore {
  constructor(initValues, readOnly) {
    this.values = initValues || {};
    this.readOnly = readOnly;
  }

  getValue(name) {
    return _get(this.values, name);
  }

  setValue(name, value) {
    if (this.readOnly) {
      Runtime.log('warning', () => `Trying to set the field "${name}" of a read-only form.`);
    } else {
      _set(this.values, name, value);
    }
  }

}

export default FormStore;
//# sourceMappingURL=JsonFormStore.js.map