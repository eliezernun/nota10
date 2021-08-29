import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Materias({data}){
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
        color: '#ffff'
    },
    text:{
        color: '#ffff',
        fontSize: 17,
    }
})