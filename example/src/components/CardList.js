import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Block, Text, withGalio, Icon, Button } from 'galio-framework';
import useModel from '../../../src/save/useModel';
import TaskCard from './TaskCard';

const CardList = (props) => {    
    const model = useModel(props);

    

    return (
        <TaskCard
            
            
        />
    )
}

const styles = theme => StyleSheet.create({
   btn:{
       borderWidth:1,
       borderColor:'#F0F0F0',
       height:64,
       width:64,
   }
})

export default withGalio(CardList,styles)

