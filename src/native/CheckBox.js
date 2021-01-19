import React, {Component} from 'react';
import {Block} from 'galio-framework';

import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBox = (props) => {
    const {
        checked,
        disabled,
        title,
        containerStyle,
        titleStyle,
        onPress,
        size = 18,
        activeColor = 'red',
        defaultColor = 'rgba(0,0,0,7)',
        disabledColor = 'rgba(0,0,0,0.3)',
        variant = 'square',
        splitTitle = false,
    } = props;

    const checkedIcon = (
        <Icon
            name={
                variant === 'square'
                    ? 'checkbox-marked'
                    : 'checkbox-marked-circle'
            }
            color={disabled ? disabledColor : activeColor}
            size={size}
            style={{marginRight: 4}}
        />
    );
    const uncheckedIcon = (
        <Icon
            name={
                variant === 'square'
                    ? 'checkbox-blank-outline'
                    : 'checkbox-blank-circle-outline'
            }
            color={defaultColor}
            size={size}
            style={{marginRight: 4}}
        />
    );

    return (
        <View style={[containerStyle]}>
            {splitTitle ? (
                <Block row top>
                    <TouchableWithoutFeedback
                        style={{flex: 1}}
                        onPress={onPress}
                        disabled={disabled}>
                        {checked ? checkedIcon : uncheckedIcon}
                    </TouchableWithoutFeedback>
                    {typeof title === 'string' ? (
                        <Text
                            numberOfLines={0}
                            style={[{marginLeft: 4}, titleStyle]}>
                            {title}
                        </Text>
                    ) : (
                        title
                    )}
                </Block>
            ) : (
                <TouchableWithoutFeedback
                    style={{flex: 1}}
                    onPress={onPress}
                    disabled={disabled}>
                    <Block row middle>
                        {checked ? checkedIcon : uncheckedIcon}
                        {typeof title === 'string' ? (
                            <Text
                                numberOfLines={0}
                                style={[{marginLeft: 4}, titleStyle]}>
                                {title}
                            </Text>
                        ) : (
                            title
                        )}
                    </Block>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};

export default CheckBox;
