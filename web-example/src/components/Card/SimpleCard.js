import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, withGalio, Icon } from 'galio-framework';

const CardBase = (props) => {
    const { styles, title, content, stackItems } = props;
    return (
        <Block center shadow style={[styles.card]}>
            {title && (
                <>
                    <Block space="between" row middle style={styles.header}>
                        <Block row middle>
                            <Block>
                                <Text style={{ fontSize: 14 }}>{title}</Text>
                            </Block>
                        </Block>
                    </Block>
                    <Block style={styles.divider} />
                </>
            )}
            <Block style={styles.content}>{content}</Block>
            {stackItems && (
                <React.Fragment>
                    <Block style={styles.divider} />
                    {stackItems.map((item, index) => (
                        <Block
                            space="between"
                            key={item.title || index}
                            row
                            middle
                            style={styles.stackItemsLine}
                        >
                            <Text style={{ fontSize: 14 }}>{item.title}</Text>
                        </Block>
                    ))}
                    <Block style={{ marginBottom: 8 }} />
                </React.Fragment>
            )}
        </Block>
    );
};

const styles = (theme) =>
    StyleSheet.create({
        card: {
            backgroundColor: 'white',
            width: '100%',
            borderRadius: 8,
            borderStyle: 'solid',
            borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 0.5,
        },
        divider: {
            backgroundColor: 'rgba(0,0,0,0.2)',
            height: 0.5,
            width: '100%',
        },
        header: {
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 16,
        },
        stackItemsLine: {
            width: '100%',
            marginTop: 10,
            paddingHorizontal: 16,
        },
        content: {
            width: '100%',
            paddingVertical: 14,
            paddingHorizontal: 16,
        },
        chip: {
            borderRadius: 20,
            paddingVertical: 3,
            paddingHorizontal: 6,
            height: 20,
        },
        chipText: {
            fontSize: 12,
            marginLeft: 3,
        },
        circle: {
            height: 20,
            width: 20,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: '#D7DBEC',
        },
        circleBtn: {
            marginRight: 8,
        },
        cardSelected: {
            backgroundColor: 'rgba(0,0,0,0.03)',
        },
    });

export default withGalio(CardBase, styles);
