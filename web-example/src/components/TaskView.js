import React from 'react';
import { View, Text } from 'react-native';
import SimpleCard from './Card/SimpleCard';
import { JsonView, JsonViewFactory, viewItems } from '@genx/react/common';

const factory = new JsonViewFactory(viewItems);

export default function ({ task, value }) {
    const resources = task?.[':resourceGroup']?.[':resources'] || [];

    return (
        <View>
            <SimpleCard
                title="操作步骤"
                content={
                    <JsonView
                        view={task.view}
                        value={value || task.value}
                        factory={factory}
                    />
                }
            />
            <View
                style={{
                    height: 10,
                    width: '100%',
                }}
            />
            {resources.length > 0 && (
                <SimpleCard
                    title="文档附件"
                    content={
                        <>
                            {resources.map((res, i) => {
                                return (
                                    <View>
                                        <Text>{res.title_zh_CN}</Text>
                                    </View>
                                );
                            })}
                        </>
                    }
                />
            )}
        </View>
    );
}
