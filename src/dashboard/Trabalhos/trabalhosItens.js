import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TrabalhosItens({data}){
    let titulo = data.titulo == null ? '--' : data.titulo

    var dateobj = new Date(data.data)

    function pad(n) {return n < 10 ? "0"+n : n;}

    var result = pad(dateobj.getDate())+"/"+pad(dateobj.getMonth()+1)+"/"+dateobj.getFullYear();

    return(
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>grupo:</Text>
                <Text style={styles.text}>{data.grupoNota}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>titulo:</Text>
                <Text style={styles.text}>{titulo}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>nota:</Text>
                <Text style={styles.text}>{data.nota}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.textTitle}>data:</Text>
                <Text style={styles.text}>{result}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        padding: 5, 
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        margin: 1, 
        borderRadius: 5
    },
    itemContainer:{
        flex: 1, 
        alignItems: 'center'
    },
    text:{
        color: '#ffff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textTitle:{
        color: '#ffff',
        fontSize: 13,
        fontWeight: 'bold'
    }
})