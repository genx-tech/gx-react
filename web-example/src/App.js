import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider, httpLoader } from '@genx/react/i18n';
import { withObserver } from '@genx/react/hoc';
import { Runtime } from '@genx/react';

import settings from 'config/settings';
import appStore from 'stores/appStore';

Runtime.update({
    //dynamic import have to be placed in project code, since the resolver will use relative path to load dynamic module
    import_: (url) => import('./' + url),
    suspenseFallback: () => <div>My loading...</div>,
}).finalize();

const TestRouter = lazy(() => import('./routers/Test'));

const localeLoader = httpLoader(
    (locale, moduleName) =>
        `${settings.localeBaseUrl}/${locale}/${moduleName}.json`
);

const App = ({ appStore }) => {
    const onLocationChange = (location) => {
        Runtime.log('info', () => ['location change', location]);

        if (location.pathname === '/logout') {
            appStore.logout();
        } else {
            appStore.setLocation(location);
        }
    };

    return (
        <I18nProvider locale={appStore.locale} loader={localeLoader}>
            <Suspense fallback={Runtime.suspenseFallback()}>
                <BrowserRouter>
                    <TestRouter />
                </BrowserRouter>
            </Suspense>
        </I18nProvider>
    );
};

export default withObserver({ appStore })(App);
