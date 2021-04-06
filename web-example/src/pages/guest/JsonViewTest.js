import React, { useState } from 'react';
import { NativeView } from '@genx/react/web';
import TaskView from '../../components/TaskView';

import task from './task1';

export default function Router() {
    return (
        <div>
            <div style={{ margin: '20px auto', width: 400 }}>
                <NativeView
                    component={TaskView}
                    initialProps={{ task: task, value: task.value }}
                />
            </div>
        </div>
    );
}
