import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { Block, Input, withGalio, Text } from 'galio-framework';

export default function JVInput({ meta, inline, key, styles, store }) {
    const { name, inputProps, rules } = meta;

    const [value, setValue] = useState(() => store.getValue(name));

    const inputLabel = inputProps.placeholder;
    const inputWidth = inputProps.style.width;
    const addon = inputProps.addonAfter ? inputProps.addonAfter.text : null;

    const textInputProps = useMemo(
        () =>
            store.readOnly
                ? { editable: false }
                : {
                      onChangeText: (value) => {
                          store.setValue(name, value);
                          setValue(value);
                      },
                  },
        [store]
    );

    return (
        <View style={{ paddingRight: 12, paddingLeft: 12 }} key={key}>
            <Block row middle={true}>
                <Input defaultValue={value} {...textInputProps} />
                <Text
                    style={{
                        paddingLeft: 5,
                        paddingTop: 5,
                        alignContent: 'center',
                    }}
                    size={14}
                >
                    {addon}
                </Text>
            </Block>
        </View>
    );
}
