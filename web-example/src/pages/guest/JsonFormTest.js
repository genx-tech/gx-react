import React, { useState } from 'react';
import { NativeView } from '@genx/react/web';
import TaskForm from '../../components/TaskForm';

import task from './task1';

export default function Router() {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <div style={{ margin: '20px auto', width: 400 }}>
                <NativeView
                    component={TaskForm}
                    initialProps={{ task, value: task.value, onSubmit }}
                />
            </div>
        </div>
    );
}
