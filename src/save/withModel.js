import React from 'react';
import { observer, inject } from 'mobx-react';
import makeModel from './makeModel';

export default (model) => (component) => {
    const modelObject = {};

    if (model.reactive) {
        component = observer(component);
    }

    if (model.external) {
        component = inject(...model.external)(component);
    }

    return (...props) => (
        <component {...props} useModel={makeModel(modelObject, props)} />
    );
};
