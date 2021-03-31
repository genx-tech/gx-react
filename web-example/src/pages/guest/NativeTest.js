import React, { useState } from 'react';
import TestI18n from 'components/TestI18n';
import TestNativeView from 'components/TestNativeView';
import { NativeView } from '@genx/react/web';
import Button from '@material-ui/core/Button';

export default function Router() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <TestI18n />
            <NativeView
                component={TestNativeView}
                initialProps={{ timeout: 3000 }}
            />
            {show && (
                <NativeView
                    component={TestNativeView}
                    initialProps={{ timeout: 5000 }}
                />
            )}
            <Button onClick={() => setShow((s) => !s)}>Toggle</Button>
        </div>
    );
}
