import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { Block, Text, withGalio, Icon } from 'galio-framework';

const CardBase = (props) => {
    const { styles,title,titleComponent, selectable, statusSetting, onSelect, selected, color='black', content } = props
    return (
        <TouchableWithoutFeedback onPress={selectable?onSelect:null}>
            <Block center shadow style={[styles.card, selected && styles.cardSelected]}>
                <Block space='between' row middle style={styles.header}>
                    <Block row middle>
                        {selectable && 
                        <React.Fragment>
                            {!selected ?
                            <Block style={[styles.circle,{marginRight:16}]}/>
                            :
                            <Icon name='checkcircle' family='AntDesign' size={20} color={color} style={{marginRight:16}}/>
                            }
                        </React.Fragment>
                        }
                        {titleComponent?titleComponent:
                        <Text style={{fontSize:14}}>{title}</Text>
                        }
                    </Block>
                    {statusSetting &&
                    <Block row middle style={[styles.chip,{backgroundColor:statusSetting.color}]}>
                        {statusSetting.icon}
                        <Text style={[styles.chipText,{color:statusSetting.textColor}]}>{statusSetting.label}</Text>
                    </Block>
                    }
                </Block>
                <Block style={styles.divider}/>
                <Block style={styles.content} pointerEvents={selectable ? 'none':'auto'}>
                    {content}
                </Block>
            </Block>
        </TouchableWithoutFeedback>
    )
}

const styles = theme => StyleSheet.create({
    card:{
        backgroundColor:'white',
        width:'100%',
        borderRadius:8,
        borderStyle:'solid',
        borderColor:'rgba(0,0,0,0.2)',
        borderWidth:0.5,
    },
    divider:{
        backgroundColor:'rgba(0,0,0,0.2)',
        height:0.5,
        width:'100%'
    },
    header:{
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:16
    },
    content:{
        width:'100%',
        paddingVertical:14,
        paddingHorizontal:16
    },
    chip:{
        borderRadius:20,
        paddingVertical:3,
        paddingHorizontal:6,
        height:20
    },
    chipText:{
        fontSize:12,
        marginLeft:3,
    },
    circle:{
        height:20,
        width:20,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#D7DBEC'
    },
    circleBtn:{
        marginRight:8
    },
    cardSelected:{
        backgroundColor:'rgba(0,0,0,0.03)',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 2,
        //     height: 3,
        // },
        // elevation:10,
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
    }
})

export default withGalio(CardBase,styles)

