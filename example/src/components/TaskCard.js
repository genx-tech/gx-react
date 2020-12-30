import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { Block, Text, withGalio, Icon, Button } from 'galio-framework';
import CardBase from './CardBase'
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns'
import { useCountDown } from '../../utils/timerHooks'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TaskCard = (props) => {
    const { title, selectable, status, selected, onSelect, onPress, taskInfo, styles } = props
    const {
        seconds,
        minutes,
        hours,
        isPositive,
        totalSeconds,
        isRunning,
        pause,
        start,
        reset,
    } = useCountDown(taskInfo.remainSeconds) 
    const statusMap = {
        readyToStart:{
            icon:<Icon name="clockcircleo" family="AntDesign" color='white' size={12} />,
            color:'#FFA000',
            textColor:"white",
            label:'待启动',
            actions:[
                {
                    label:'启动',
                    icon:<Ionicons size={36} name='play-circle' color='#FFA000'/>,
                    onPress:()=>{
                        if(taskInfo.onStart){
                            taskInfo.onStart()
                        }
                    }
                }
            ]
        },
        ongoing:{
            icon:<Icon name="rocket1" family="AntDesign" color='white' size={12} />,
            color:'#00B4C8',
            textColor:"white",
            label:'进行中',
            actions:[
                {
                    label:'编辑',
                    icon:<MaterialCommunityIcons size={36} name='text-box' color='#00B4C8'/>,
                    onPress:()=>{
                        if(taskInfo.onEdit){
                            taskInfo.onEdit()
                        }
                    }
                },
                {
                    label:'结束',
                    icon:<Ionicons size={36} name='stop-circle' color='#00B4C8'/>,
                    onPress:()=>{
                        if(taskInfo.onEnd){
                            taskInfo.onEnd()
                        }
                    }
                }
            ]
        },
        readyToReceive:{
            icon:<Icon name="spinner-3" family="EvilIcons" color='white' size={12} />,
            color:'#A0A0FF',
            textColor:"white",
            label:'待领取',
            actions:[
                {
                    label:'领取',
                    icon:<Block center style={{backgroundColor:'#A0A0FF',padding:6,borderRadius:6}}>
                        <Icon family='AntDesign' size={20} name='download' color='white'/>
                    </Block>,
                    onPress:()=>{
                        if(taskInfo.onReceive){
                            taskInfo.onReceive()
                        }
                    }
                },
            ]
        },
        verified:{
            icon:<Icon name="checkcircleo" family="AntDesign" color='white' size={12} />,
            color:'#00C864',
            textColor:"white",
            label:'验证达标',
            actions:[
                {
                    label:'质检合格',
                    icon:<Ionicons size={48} name='checkmark-circle' color='#00C864'/>,
                }
            ]
        },
        failed:{
            icon:<Icon name="closecircleo" family="AntDesign" color='white' size={12} />,
            color:'#E23000',
            textColor:"white",
            label:'验证失败',
            actions:[
                {
                    label:'质检失败',
                    icon:<Ionicons size={48} name='close-circle' color='#E23000'/>,
                }
            ]
        },
        done:{
            icon:<MaterialCommunityIcons name="clipboard-check-outline" color='white' size={12} />,
            color:'#0032C8',
            textColor:"white",
            label:'已完成',
            actions:taskInfo.verifying?[
                {
                    label:'系统检测中', 
                    icon:<MaterialCommunityIcons size={48} name='text-box-search' color='#0032C8'/>
                }
            ]:[
                {
                    label:'编辑',
                    icon:<MaterialCommunityIcons size={36} name='text-box' color='#0032C8'/>,
                    onPress:()=>{
                        if(taskInfo.onEdit){
                            taskInfo.onEdit()
                        }
                    }
                },
                {
                    label:'结束',
                    icon:<Ionicons size={36} name='stop-circle' color='#BFC2D5'/>,
                    onPress:()=>{
                        if(taskInfo.onEnd){
                            taskInfo.onEnd()
                        }
                    },
                    disabled:true
                }
            ]
        },
    }
    const primaryColor = statusMap[status].color

    const timeSection = [
        {
            icon:<Icon name='star' family="Feather" color='#646464' size={12}/>,
            timeString:format(parseISO(taskInfo.createTime),'yyyy/MM/dd, hh:mm:ss a')
        },
        {
            icon:<Icon name='play-circle' family="Feather" color='#646464' size={12}/>,
            timeString:taskInfo.startTime?format(parseISO(taskInfo.startTime),'yyyy/MM/dd, hh:mm:ss a'):'待启动'
        },
        {
            icon:<Icon name='stop-circle' family="Feather" color='#646464' size={12}/>,
            timeString:taskInfo.endTime?format(parseISO(taskInfo.endTime),'yyyy/MM/dd, hh:mm:ss a'):'未完成'
        },
    ]


    return (
        <CardBase
            title={title}
            statusSetting={statusMap[status]}
            color={primaryColor}
            selectable={selectable}
            selected={selected}
            onSelect={onSelect}
            content={
                <Block space='between' row middle>
                    <TouchableWithoutFeedback onPress={onPress}>
                        <Block>
                            <Text size={14} color='#233975' bold>{taskInfo.cardTitle}</Text>
                            {(taskInfo.description)?
                            <Text size={12} color='#233975' style={{marginTop:4}}>{taskInfo.description}</Text>
                            :
                            <Text size={12} color={!['readyToStart','readyToReceive'].includes(status)?isPositive?'#00C864':'#FF0000':'#7E84A3'} style={{marginTop:4}}>{isPositive?'-':'+'}{hours}:{minutes}:{seconds}</Text>
                            }
                            <Block style={{marginTop:8}}>
                                <Block left>
                                    {timeSection.map((item,index)=>
                                        <Block row middle key={index} style={{marginTop:4}}>
                                            <Block style={{marginRight:4}}>{item.icon}</Block>
                                            <Text size={12} color='#646464'>{item.timeString}</Text>
                                        </Block>
                                    )}
                                </Block>
                            </Block>
                        </Block>
                    </TouchableWithoutFeedback>
                    <Block row middle>
                        {statusMap[status].actions.map((item,index)=>
                            <Block key={index} center style={{marginRight:item.onPress?0:16}}>
                                {item.onPress ?
                                <Button size='small' color='white' onPress={item.onPress} style={styles.btn} shadowColor='#F0F0F0' disabled={item.disabled}>
                                    {item.icon}
                                </Button>
                                :<Block style={{marginBottom:8}}>
                                    {item.icon}
                                </Block>
                                }
                                <Text color='#233975' size={12}>{item.label}</Text>
                            </Block>
                        )}
                    </Block>
                </Block>
            }
        />
    )
}

TaskCard.propTypes = {
    title: PropTypes.any.isRequired,
    status: PropTypes.oneOf(['readyToStart','ongoing','readyToReceive','verified','failed','done']).isRequired,
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    onPress: PropTypes.func,
    taskInfo: PropTypes.shape({
        cardTitle: PropTypes.string.isRequired,
        remainSeconds:PropTypes.number.isRequired,
        description:PropTypes.string,
        createTime:PropTypes.string.isRequired,
        startTime:PropTypes.string,
        endTime:PropTypes.string,
        onStart:PropTypes.func,
        onEdit:PropTypes.func,
        onEnd:PropTypes.func,
        onReceive:PropTypes.func,
        verifying:PropTypes.bool
    }).isRequired
};


const styles = theme => StyleSheet.create({
   btn:{
       borderWidth:1,
       borderColor:'#F0F0F0',
       height:64,
       width:64,
   }
})

export default withGalio(TaskCard,styles)

