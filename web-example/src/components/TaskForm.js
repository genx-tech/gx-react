import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    JsonView,
    JsonFormFactory,
    JsonFormStore,
    formItems,
} from '@genx/react/common';
import { Button } from 'react-native-elements';

import SimpleCard from './Card/SimpleCard';

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
    },
});

const factory = new JsonFormFactory(formItems, styles);

export default function ({ task, value, readOnly, onSubmit }) {
    const formStore = useMemo(() => new JsonFormStore(value, readOnly), [
        value,
        readOnly,
    ]);

    return (
        <View>
            <SimpleCard
                content={
                    <>
                        <JsonView
                            view={task.form}
                            value={formStore}
                            factory={factory}
                        />
                        {!readOnly && (
                            <View>
                                <Button
                                    title={'提交'}
                                    onPress={() => onSubmit(formStore.values)}
                                />
                            </View>
                        )}
                    </>
                }
            />
        </View>
    );
}
