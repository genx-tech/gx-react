import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TestI18n from 'components/TestI18n';
import TestNativeView from 'components/TestNativeView';
import { NativeView } from '@genx/react';
import Button from '@material-ui/core/Button';

export default function Router() {
    const [ show, setShow ] = useState(false);

    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'}>
                    <div>
                        <TestI18n />
                        <NativeView view={TestNativeView} initialProps={{ timeout: 3000}} />
                        {show &&
                        <NativeView view={TestNativeView} initialProps={{ timeout: 5000}} />
                        }
                        <Button onClick={() => setShow(s => !s)}>Toggle</Button>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
