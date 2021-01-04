import React, { lazy, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { I18nProvider, httpLoader } from '@genx/react';
import settings from 'config/settings';

const GuestRouter = lazy(() => import('routers/Guest'));

const localeLoader = httpLoader(
    (locale, moduleName) =>
        `${settings.localeBaseUrl}/${locale}/${moduleName}.json`
);

const App = ({ store }) => (
    <I18nProvider locale={store.locale} loader={localeLoader}>
        <Suspense fallback={<div>Loading...</div>}>
            <GuestRouter />
        </Suspense>
    </I18nProvider>
);

export default observer(App);
