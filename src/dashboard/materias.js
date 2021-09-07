import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { DeletaMaterias } from '../../functions/remove/deleteMaterias'
const deleteIco = require('../../img/deleteico.png')

export default function Materias({data, update }){

   async function handlerDelete(){
       const status = await DeletaMaterias(data)
       if(status == true){
           update()
       }
    }

    return(
        <View style={{...styles.container, backgroundColor: data.color}}>
            <View style={styles.itemContainer}>
                <Text style={styles.title}>Matéria:</Text>
                <Text style={styles.text}>{data.materia}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.title}>Professor:</Text>
                <Text style={styles.text}>{data.professor}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.title}>Dia Semana:</Text>
                <Text style={styles.text}>{data.diaSemana}</Text>
            </View>
            <View  style={{...styles.itemContainer, flex: 0.5, alignSelf: 'center'}}>
                <TouchableOpacity onPress={handlerDelete}>
                    <Image source={deleteIco}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'stretch',
        flexDirection: 'row',
        margin: 3,
        padding: 10,
        borderRadius: 5
    },
    itemContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title:{
        fontSize: 12,
        color: '#ffff',
        textShadowColor: '#000000',
        textShadowRadius: 10
    },
    text:{
        color: '#ffff',
        fontSize: 14,
        textShadowColor: '#000000',
        textShadowRadius: 10
    }
})