import React from 'react';
import { AppNavigator } from '@genx/react';
import bookingRoutes from './routes';

import SampleMe from './screens/SampleMe';

export { default as config } from './config';

export default () => (
    <AppNavigator
        _registry={{
            SampleMe,
        }}
        {...bookingRoutes}
    />
);
