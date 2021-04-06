import React, { useState } from 'react';
import { Block, Text } from 'galio-framework';
import { CheckBox } from 'react-native-elements';

export default function JVRadio({ meta, inline, key, styles, store }) {
    const { label, name, inputProps, radioItems, rules } = meta;

    const [selectedValue, setSelectedValue] = useState(() =>
        store.getValue(name)
    );

    const toggleValue = (value) => {
        setSelectedValue((prev) => (value === prev ? null : value));
        store.setValue(name, selectedValue);
    };

    return (
        <Block>
            {label && <Text>{label}</Text>}
            <Block>
                {store.readOnly ? (
                    <Text>
                        {
                            radioItems.find(
                                (item) => selectedValue === item.value
                            )?.label
                        }
                    </Text>
                ) : (
                    radioItems.map((item, index) => (
                        <Block>
                            <CheckBox
                                key={index}
                                title={item.label}
                                checked={selectedValue === item.value}
                                onPress={() => toggleValue(item.value)}
                            />
                        </Block>
                    ))
                )}
            </Block>
        </Block>
    );
}
